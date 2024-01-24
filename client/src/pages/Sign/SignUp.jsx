import MainGradient from "../../components/Gradient/MainGradient";
import NewSignUp from "../../components/Modal/NewSignUp";

const SignUp = () => {
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
