import React, { useState } from 'react';
import showPassIcon from '../../assets/img/show-pass.svg';
import { Link } from 'react-router-dom'; 
import asset1 from '../../assets/img/asset1.png'; 
import asset2 from '../../assets/img/asset2.png'; 

const NewSignIn = () => {
const [showPassword, setShowPassword] = useState(false);
const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
    return (
        <div className="modal-section show-modal new-sign-in-form">
          <div className="modal-container">
            {/* Asset 1 */}
          <img src={asset1} alt="" style={{ position: 'absolute', top:'1rem', left: '7rem', zIndex: 1, maxWidth: '18%' }} />
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
                            alt="" 
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
              {/* Asset 2 */}
           <img src={asset2} alt="" style={{ position: 'absolute', bottom: '0', right: '1rem', zIndex: 1 , maxWidth: '25%', transform: 'rotate(-45deg)'}} />
          </div>
        </div>
      );
};

export default NewSignIn;
