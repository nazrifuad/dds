import React from 'react'
import MainGradient from "../../components/Gradient/MainGradient";
import ForgotPassword from "../../components/Modal/ForgotPassword";




const Forgot = () => {
  return (
    <div>
      <section className="section main-section full-height">
        <div className="container">
          <MainGradient />
          
          <ForgotPassword />
        </div>
      </section>
    </div>
  )
}

export default Forgot;