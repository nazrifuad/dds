import { useRef, useEffect } from "react";
import closeIcon from "../../assets/img/close-icon.svg";
import plusIcon from "../../assets/img/plus-icon.svg";

const ProfileSettings = ({
  isVisible,
  closeModal,
  handleSearchChange,
  handleSearchSubmit,
  searchTerm,
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, closeModal]);

  return (
    <>
      <div className={`modal-section ${isVisible ? "show-modal" : ""}`}>
        <div ref={modalRef} className="modal-container">
          <div className="modal-item">
            <div className="close-button" onClick={closeModal}>
              <img src={closeIcon} alt="Close" />
            </div>
            <div className="desc-wrap">
              <h3>Your Profile</h3>
              <p>Make changes and edit your profile here</p>
            </div>
            <div className="input-wrapper pt-50">
              <p>Profile Image</p>
              <div className="general-card small">
                <div className="cards-desc-wrap click pt-20">
                  <div className="item">
                    <img src={plusIcon} alt="Icon" />
                  </div>
                </div>
              </div>
              <form className="form-custom" onSubmit={handleSearchSubmit}>
                <div className="form-row">
                  <div className="form-col">
                    <label htmlFor="ProfileName">
                      <p>Name</p>
                    </label>
                    <div className="input-body pt-20">
                      <div className="input-details">
                        <input
                          id="ProfileName"
                          type="text"
                          placeholder="Change your name here"
                          value={searchTerm}
                          onChange={handleSearchChange}
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-col">
                    <label htmlFor="ProfileEmail">
                      <p>Email</p>
                    </label>
                    <div className="input-body pt-20">
                      <div className="input-details">
                        <input
                          id="ProfileEmail"
                          type="email"
                          placeholder="Change your email here"
                          value={searchTerm}
                          onChange={handleSearchChange}
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-col">
                    <label htmlFor="ProfileCurrentPassword">
                      <p>Current Password</p>
                    </label>
                    <div className="input-body pt-20">
                      <div className="input-details">
                        <input
                          id="ProfileCurrentPassword"
                          type="password"
                          value={searchTerm}
                          onChange={handleSearchChange}
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-col">
                    <label htmlFor="ProfileNewPassword">
                      <p>New Password</p>
                    </label>
                    <div className="input-body pt-20">
                      <div className="input-details">
                        <input
                          id="ProfileNewPassword"
                          type="password"
                          value={searchTerm}
                          onChange={handleSearchChange}
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-col form-submit-btn">
                    <div className="default-btn main-btn reset">
                      <div className="btn-link">
                        <button
                          type="submit"
                          className="btn-text"
                          data-replace="Delete Profile"
                        >
                          <span className="inner-btn-text">Delete Profile</span>
                        </button>
                      </div>
                    </div>
                    <div className="default-btn secondary-btn">
                      <div className="btn-link">
                        <button
                          type="submit"
                          className="btn-text"
                          data-replace="Save"
                        >
                          <span className="inner-btn-text">Save</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSettings;
