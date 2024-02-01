import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../../pages/Nav/Nav";
import Styleguide from "../../pages/Styleguide/Styleguide";
import NoPage from "../../pages/NoPage/NoPage";
import Homepage from "../../pages/Home/Homepage";
import Upload from "../../pages/Upload/Upload";
import Shortcut from "../../pages/Shortcut/Shortcut";
import EditStyleguide from "../../pages/Styleguide/EditStyleguide";
import Preview from "../../pages/Styleguide/Preview";
import SignIn from "../../pages/Sign/SignIn";
import SignUp from "../../pages/Sign/SignUp";
import ForgotPass from "../../pages/Forgot/Forgot";

// header routing
const HeaderRoutes = () => {
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/styleguide" element={<Styleguide />} />
          <Route path="/edit-styleguide/:id" element={<EditStyleguide />} />
          <Route path="/shortcut" element={<Shortcut />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
        </Routes>
      </>
    </Router>
  );
};

export default HeaderRoutes;
