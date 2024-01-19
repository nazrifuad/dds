import React, { useState } from 'react';
import showPassIcon from '../../assets/img/show-pass.svg';
import { Link } from 'react-router-dom'; 

const NewSignIn = () => {
const [showPassword, setShowPassword] = useState(false);
const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
    return (
        <div className="modal-section show-modal new-sign-in-form">
          <div className="modal-container">
            <div className="modal-item">
              <div className="desc-wrap">
                <h3>Welcome Back!</h3>
              </div>
              <div className="input-wrapper pt-50">
                <form className="form-custom">
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
                        <div className="forgot-password-link" style={{ alignSelf:'flex-end' }}>
                        <Link to="/forgot-password">
                        Forgot Password?
                        </Link>
                  </div>
                    </div>
                  </div>
    
                  <div className="form-row">
                  <div className="form-col form-submit-btn full-width">
                  <div className="default-btn secondary-btn">
                    <div className="btn-link">
                      <button
                        type="submit"
                        className="btn-text full-width"
                        data-replace="Log In"
                      >
                        <span className="inner-btn-text">Log In</span>
                      </button>
                    </div>
                  </div>
                </div>
                  </div>
                </form>
              </div>

              <div className="account-signup-link" style={{ textAlign: 'center', marginTop: '4em' }}>
            Don't have an account? <Link to="/sign-up" style={{ color: 'var(--main-color)' }}> Sign up here</Link>
          </div>
            </div>
          </div>
        </div>
      );
};

export default NewSignIn;
