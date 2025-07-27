// Email Sending Contact Page
async function UserEmailSend(req, res) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const { name, email, message } = req.body;

  console.log("Received Data:", req.body); // Debugging

  if (!email) {
    return res.status(400).json({ success: false, error: "Email is required" });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "receiver@example.com", // Change to a valid email address
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Email sent successfully!", info });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
