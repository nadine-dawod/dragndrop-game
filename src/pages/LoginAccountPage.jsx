import Login from "../components/Login";
import "../components/Login.css";
import { ImageLogin } from "../components/Elements/ImageLogin";


export const LoginAccountPage = () => {
  return (
    <div className="page-container">
      <div className="image-container">
        <div className="loginImage">
          <ImageLogin  />
        </div>
       
      </div>
      <div className="login-container">
          <h1 className="login-title">IMAGINARIUM</h1>
          <p className="login-para">A building game to spark your imagination.
          <br></br> 
          Become the Architect of your own imaginary world.
          </p>
          <Login />
      </div>
    </div>
  );
};