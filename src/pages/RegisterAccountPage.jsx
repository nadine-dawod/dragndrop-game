import Register from "../components/registerAccount/Register";
import "../components/registerAccount/Register.css";
import { ImageRegister } from "../components/Elements/ImageRegister";

export const RegisterAccountPage = () => {
  return (
    <div className="register-page-container">
      <div className="registerImage">
        <ImageRegister />
      </div>
      <div className="register-container">
        <h1 className="register-title">IMAGINARIUM</h1>
        <form className="register-form">
          <div className="register-option1">
            <label>
              <input
                type="radio"
                name="register-radio-options"
                value="option1"
                checked={true}
                className="register-form-input"
              />
              <span className="register-text-option">Free game plan</span>
              <ul className="register-option-list">
                <li>Unlimited access to one world</li>
              </ul>
            </label>
          </div>
          <div className="register-option2">
            <label>
              <input
                type="radio"
                name="register-radio-options"
                value="option2"
                className="register-form-input"
              />
              <span className="register-text-option">Premium game plan</span>
              <ul className="register-option-list">
                <li>Unlock more worlds</li>
                <li>Choose colour-theme</li>
                <li>Access more building blocks</li>
                <li>Keep track of your score and compete against others</li>
              </ul>
            </label>
          </div>
        </form>  
        <Register />
      </div>
    </div>
  );
};