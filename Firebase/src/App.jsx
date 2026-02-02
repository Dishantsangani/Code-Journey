import Signup from "./Auth/Signup";
import SocialSignup from "./Auth/SocialSignup";
import FileUpload from "./Auth/FileUpload";
import RBAC from "./Auth/RBAC";
function App() {
  return (
    <div>
      <h1>Firebase Demo</h1>
      {/* <Signup /> */}
      {/* <SocialSignup /> */}
      {/* <FileUpload /> */}
      <RBAC />
    </div>
  );
}

export default App;
