import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Axios from "axios";
import MainLogo from "../../components/Logo/MainLogo";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import SearchInput from "../../components/Search/SearchInput";

import StyleguideSettings from "../../components/Modal/StyleguideSettings";
import ShareStyleguide from "../../components/Modal/ShareStyleguide";

import previewIcon from "../../assets/img/preview-icon.svg";

const Nav = () => {
  //backend
  Axios.defaults.withCredentials = true;
  const [auth, setAuth] = useState(false);

  // useEffect(() => {
  //   const fetchUserLoginStatus = async () => {
  //     try {
  //       const res = await Axios.get("http://localhost:3000/api/v1/users/login");
  //       if (res) {
  //         console.log(res);
  //         setAuth(res.data.logged);
  //       } else {
  //         setAuth(false);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user login status:", error);
  //       setAuth(false);
  //     }
  //   };
  //   fetchUserLoginStatus();
  // }, []);

  // active nav function
  const location = useLocation();
  const isNavLinkActive = (path) => {
    return location.pathname === path;
  };

  // Specify an array of paths for which to hide the "Styleguide Settings" for regular users
  const hiddenUserNav = ["/edit-styleguide", "/shortcut"];

  // Specify an array of paths for which to hide the "Styleguide" and "Upload" links for editors
  const hiddenEditorNav = ["/", "/upload", "/styleguide"];

  // Conditionally render the button links to hide/un-hide
  const renderLinks = () => {
    const isSettingsActive = isNavLinkActive("/"); // add active class link when clicking on the "Settings" menu
    const isShareActive = isNavLinkActive("/"); // add active class link when clicking on the "Share" menu

    if (hiddenUserNav.some((path) => isNavLinkActive(path))) {
      // If the current location is in the hiddenUserNav array, don't render these links
      return (
        <>
          <li className="settings-modal-nav">
            <NavLink
              to="/"
              onClick={(event) => {
                event.preventDefault();
                showModal("StyleguideSettings");
              }}
              className={
                isStyleguideSettingsModalVisible
                  ? "active-link"
                  : isSettingsActive
                  ? "active-link"
                  : ""
              }
              data-replace="Settings"
            >
              <span>Settings</span>
            </NavLink>
          </li>
          <li className="share-modal-nav">
            <NavLink
              to="/"
              onClick={(event) => {
                event.preventDefault();
                showModal("ShareStyleguide");
              }}
              className={
                isShareStyleguideModalVisible
                  ? "active-link"
                  : isShareActive
                  ? "active-link"
                  : ""
              }
              data-replace="Share"
            >
              <span>Share</span>
            </NavLink>
          </li>
          <li className="preview-link">
            <NavLink
              to="/preview"
              className={isNavLinkActive("/preview") ? "active-link" : ""}
            >
              <img src={previewIcon} alt="Preview" />
              <span>Preview</span>
            </NavLink>
          </li>
        </>
      );
    } else if (hiddenEditorNav.some((path) => isNavLinkActive(path))) {
      // If the current location is in the hiddenEditorNav array (editor's page), don't render "Styleguide" and "Upload" links
      return (
        <>
          <li>
            <NavLink
              to="/styleguide"
              className={isNavLinkActive("/styleguide") ? "active-link" : ""}
              data-replace="Styleguide"
            >
              <span>Styleguide</span>
            </NavLink>
          </li>
          <li className="upload-nav-btn">
            <NavLink
              to="/upload"
              className={isNavLinkActive("/upload") ? "active-link" : ""}
              data-replace="Upload"
            >
              <span>Upload</span>
            </NavLink>
          </li>
        </>
      );
    }
  };

  // open styleguide settings modal
  const [isStyleguideSettingsModalVisible, setStyleguideSettingsModalVisible] =
    useState(false);
  const [isShareStyleguideModalVisible, setShareStyleguideModalVisible] =
    useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const showModal = (modalType) => {
    if (modalType === "StyleguideSettings") {
      setStyleguideSettingsModalVisible(true);
      setShareStyleguideModalVisible(false);
    } else if (modalType === "ShareStyleguide") {
      setStyleguideSettingsModalVisible(false);
      setShareStyleguideModalVisible(true);
    }
  };

  const closeModal = () => {
    setStyleguideSettingsModalVisible(false);
    setShareStyleguideModalVisible(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    // Handle search submission logic if needed
    event.preventDefault();
    console.log("Search submitted:", searchTerm);
  };

  return (
    <>
      <header className="header section nav-mobile-not-active">
        <div id="navbar" className="navbar">
          <div className="navbar-wrapper">
            <div className="left-navbar">
              <div className="btn-link btn-nav-home">
                <NavLink
                  to={auth ? "/styleguide" : "/"}
                  className={`default-btn-click ${
                    isNavLinkActive("/") ? "active-link" : ""
                  }`}
                >
                  <MainLogo />
                </NavLink>
              </div>
              <div className="main-navbar link-navbar-wrapper">
                <ul className="link-desktop link-desktop-main">
                  <li>
                    <NavLink
                      to="/shortcut"
                      className={
                        isNavLinkActive("/shortcut") ? "active-link" : ""
                      }
                      data-replace="Shortcut"
                    >
                      <span>Shortcut</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/error-page"
                      className={
                        isNavLinkActive("/error-page") ? "active-link" : ""
                      }
                      data-replace="Error Page"
                    >
                      <span>Error Page</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right-navbar link-navbar-wrapper">
              <ul className="link-desktop link-desktop-right">
                <li className="search-wrapper">
                  <SearchInput />
                </li>
                {renderLinks()}
                <li className="profile-nav-btn">
                  <ProfileImage />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* styleguide setting modal */}
      <StyleguideSettings
        isVisible={isStyleguideSettingsModalVisible}
        closeModal={closeModal}
        handleSearchChange={handleSearchChange}
        handleSearchSubmit={handleSearchSubmit}
        searchTerm={searchTerm}
      />

      {/* styleguide share modal */}
      <ShareStyleguide
        isVisible={isShareStyleguideModalVisible}
        closeModal={closeModal}
        handleSearchChange={handleSearchChange}
        handleSearchSubmit={handleSearchSubmit}
        searchTerm={searchTerm}
      />
    </>
  );
};

export default Nav;
