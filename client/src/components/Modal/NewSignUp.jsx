import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import showPassIcon from "../../assets/img/show-pass.svg";
import asset1 from "../../assets/img/asset1.png";
import asset2 from "../../assets/img/asset2.png";

const NewSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const registerUser = () => {
    Axios.post("http://127.0.0.1:3000/api/v1/users", { email, password })
      .then(() => {
        alert("User registration successful");
        navigate("/styleguide");
      })
      .catch((error) => {
        console.error(error);
        alert("User registration failed");
      });
  };

  return (
    <div className="modal-section show-modal new-sign-in-form">
      <div className="modal-container">
        {/* Asset 1 */}
        <img
          src={asset1}
          alt=""
          style={{
            position: "absolute",
            top: "1rem",
            left: "7rem",
            zIndex: 1,
            maxWidth: "18%",
          }}
        />
        <div className="modal-item">
          <div className="desc-wrap">
            <h3>Create Account</h3>
          </div>
          <div className="input-wrapper pt-50">
            <form className="form-custom">
              {/* Email Field */}
              <div className="form-row">
                <div className="form-col">
                  <label htmlFor="userEmail">
                    <p>Email</p>
                  </label>
                  <div className="input-body pt-20">
                    <div className="input-details">
                      <input
                        id="userEmail"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        autoComplete="off"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Password Field */}
              <div className="form-row">
                <div className="form-col">
                  <label htmlFor="userPassword">
                    <p>Password</p>
                  </label>
                  <div className="input-body pt-20">
                    <div className="input-details">
                      <input
                        id="userPassword"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        autoComplete="off"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        required
                      />
                      <img
                        src={showPassIcon}
                        alt=""
                        onClick={togglePasswordVisibility}
                        className="show-password-icon"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions Checkbox */}
              <div className="form-row">
                <div className="form-col no-margin">
                  <label htmlFor="tnc" className="checkbox-container">
                    <input id="tnc" type="checkbox" name="" value="" required />
                    By creating an account, I agree to the
                    <Link
                      to="/terms-and-conditions"
                      style={{ color: "var(--main-color)", paddingLeft: "5px" }}
                    >
                      Terms and Conditions
                    </Link>
                    <span className="checkbox-checkmark"></span>
                  </label>
                </div>
              </div>

              {/* Sign Up Button */}
              <div className="form-row">
                <div className="form-col form-submit-btn full-width">
                  <div className="default-btn secondary-btn">
                    <div className="btn-link">
                      <button
                        type="submit"
                        className="btn-text full-width"
                        data-replace="Sign Up"
                        onClick={registerUser}
                      >
                        <span className="inner-btn-text">Sign Up</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Link to Sign In */}
          <div
            className="account-signup-link"
            style={{ textAlign: "center", marginTop: "4em" }}
          >
            Already have an account?{" "}
            <Link to="/sign-in" style={{ color: "var(--main-color)" }}>
              {" "}
              Sign in
            </Link>
          </div>
        </div>
        {/* Asset 2 */}
        <img
          src={asset2}
          alt=""
          style={{
            position: "absolute",
            bottom: "0",
            right: "1rem",
            zIndex: 1,
            maxWidth: "25%",
            transform: "rotate(-45deg)",
          }}
        />
      </div>
    </div>
  );
};

export default NewSignUp;
