import React from "react";
import { Link } from "react-router-dom";
import MainGradient from "../../components/Gradient/MainGradient";

const Homepage = () => {
  return (
    <>
      <section className="section main-section full-height">
        <div className="container">
          {/* gradient bg */}
          <MainGradient />

          <div className="section-wrap align">
            <div className="general-heading-wrapper">
              <div className="general-big-desc mw-1000 mw-full-m -mw-full-i text-center">
                <h3>Welcome to Gravitas Digital Design System</h3>
              </div>
              <div className="general-subtitle mw-1000 mw-full-m -mw-full-i text-center ">
                <p>
                  Elevate your brand presence and user experience through a
                  cohesive and visually stunning design language. Our
                  comprehensive system ensures consistency across all digital
                  platforms, fostering a strong and memorable brand identity.
                  Start by sign up your profile!
                </p>
              </div>
            </div>
            <div className="flex-center btn pt-50">
              <div className="default-btn secondary-btn">
                <Link to="/sign-up" className="btn-link">
                  <div className="btn-text" data-replace="Sign Up">
                    <span className="inner-btn-text">Sign Up</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
