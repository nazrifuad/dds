import React from 'react';



const ForgotPassword = () => {

    return (
        <div className="modal-section show-modal new-sign-in-form">
          
          <div className="modal-container">
            
            <div className="modal-item" style={{ padding: '4em 7em'}}>
              <div className="desc-wrap">
                <h3>Forgot Password?</h3>
                <p>No worries! Fill in your registered email and we will send instructions to reset your password.</p>
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
    
                  <div className="form-row" style={ {marginTop:'2em' }}>
                  <div className="form-col form-submit-btn full-width">
                  <div className="default-btn secondary-btn">
                    <div className="btn-link">
                      <button
                        type="submit"
                        className="btn-text full-width"
                        data-replace="Reset"
                      >
                        <span className="inner-btn-text">Reset</span>
                      </button>
                    </div>
                  </div>
                </div>
                  </div>
                </form>
              </div>

              {/* <div className="account-signup-link" style={{ textAlign: 'center', marginTop: '4em' }}>
            Don't have an account? <Link to="/sign-up" style={{ color: 'var(--main-color)' }}> Sign up here</Link>
          </div> */}
            </div>
          
          </div>

           
        </div>
      );
};

export default ForgotPassword;
