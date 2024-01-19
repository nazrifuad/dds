import React, { useState } from 'react';
import showPassIcon from '../../assets/img/show-pass.svg';
import { Link } from 'react-router-dom'; 

const NewSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="modal-section show-modal new-sign-in-form">
      <div className="modal-container">
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
                        placeholder="Enter your email"
                        autoComplete="off"
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
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        autoComplete="off"
                        required
                      />
                      <img 
                        src={showPassIcon} 
                        alt="Show Password" 
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
                    <Link to="/terms-and-conditions" style={{ color: 'var(--main-color)', paddingLeft: '5px' }}>Terms and Conditions</Link>
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
          <div className="account-signup-link" style={{ textAlign: 'center', marginTop: '4em' }}>
            Already have an account? <Link to="/sign-in" style={{ color: 'var(--main-color)' }}> Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSignUp;
