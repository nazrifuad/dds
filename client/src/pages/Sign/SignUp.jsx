import MainGradient from "../../components/Gradient/MainGradient";
import NewSignUp from "../../components/Modal/NewSignUp";
import React, { useState, useEffect } from "react";

const SignUp = () => {
  // const { userData, setUserData } = useState({
  //   email: "",
  //   password: "",
  // });

  return (
    <div>
      <section className="section main-section full-height">
        <div className="container">
          {/* gradient bg */}
          <MainGradient />
          <NewSignUp />
        </div>
      </section>
    </div>
  );
};

export default SignUp;
