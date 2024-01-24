import React from 'react'
import MainGradient from "../../components/Gradient/MainGradient";
import NewSignIn from "../../components/Modal/NewSignIn";




const SignIn = () => {
  return (
    <div>
      <section className="section main-section full-height">
        <div className="container">
          <MainGradient />
          
          <NewSignIn />
        </div>
      </section>
    </div>
  )
}

export default SignIn;