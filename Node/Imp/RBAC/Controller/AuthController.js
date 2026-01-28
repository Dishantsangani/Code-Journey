const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../../../Database/db");

module.exports.SignupController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const USER_CHECK_QUERY = "SELECT email FROM authuser WHERE email = $1";
    const isvalid = await pool.query(USER_CHECK_QUERY, [email]);

    if (isvalid.rowCount > 0) {
      return res.status(409).json({ message: "User Already Register" });
    }

    const hashpassword = await bcrypt.hash(String(password), 10);

    const AUTH_INSERT_QUERY =
      "INSERT INTO authuser (email,password,role) VALUES ($1, $2,$3)";

    const result = await pool.query(AUTH_INSERT_QUERY, [
      email,
      hashpassword,
      "user",
    ]);
    const user = result.rows[0];
    const payload = {
      id: user.id,
      email: user.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(201).json({ message: "Created Successfully", token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.SigninController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "email and password required" });
    }

    const USER_SINGIN_CHECK =
      "SELECT email, password, role FROM authuser WHERE email = $1";

    const isvalid = await pool.query(USER_SINGIN_CHECK, [email]);

    if (isvalid.rowCount === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const user = isvalid.rows[0];

    const isMatch = await bcrypt.compare(String(password), user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({ message: "sign in Successfully", token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.ForgotPasswordController = async (req, res) => {
  try {
    const { email } = req.body;

    const result = await pool.query(
      "SELECT id,email FROM authuser WHERE email=$1",
      [email.toLowerCase()],
    );
    if (result.rowCount === 0)
      return res.status(404).json({ message: "User not found" });

    const user = result.rows[0];

    const resetToken = crypto.randomBytes(32).toString("hex");
    const expiry = new Date(Date.now() + 15 * 60 * 1000);

    await pool.query(
      "UPDATE authuser SET reset_token=$1, reset_token_expiry=$2 WHERE id=$3",
      [resetToken, expiry, user.id],
    );

    await ForgotPasswordMail(resetToken, user.email);
    return res
      .status(200)
      .json({ message: "Password reset link sent to email" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.SetPasswordController = async (req, res) => {
  const { token, password } = req.body;

  if (!token || !password) {
    return res.status(400).json({ message: "Token and password are required" });
  }

  const result = await pool.query(
    "SELECT id FROM authuser WHERE reset_token=$1 AND reset_token_expiry > NOW()",
    [token],
  );

  if (result.rowCount === 0) {
    return res.status(400).json({ message: "Token invalid or expired" });
  }

  const user = result.rows[0];

  const hashpassword = await bcrypt.hash(String(password), 10);

  const AUTH_INSERT_QUERY =
    "UPDATE authuser SET password=$1, reset_token=NULL, reset_token_expiry=NULL WHERE id=$2";

  await pool.query(AUTH_INSERT_QUERY, [hashpassword, user.id]);

  return res.status(201).json({ message: "Password reset successfully" });
};
