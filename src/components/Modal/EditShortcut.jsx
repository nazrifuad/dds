import { useRef, useEffect } from "react";
import closeIcon from "../../assets/img/close-icon.svg";
import plusIcon from "../../assets/img/plus-icon.svg";

const EditShortcut = ({
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
              <h3>Edit Shortcut</h3>
              <p>Modify or remove your styleguide here</p>
            </div>
            <div className="input-wrapper pt-50">
              <form className="form-custom" onSubmit={handleSearchSubmit}>
                <div className="form-row">
                  <div className="form-col">
                    <label htmlFor="shortcutLinkEdit">
                      <p>Enter a URL</p>
                    </label>
                    <div className="input-body pt-20">
                      <div className="input-details">
                        <input
                          id="shortcutLinkEdit"
                          type="text"
                          placeholder="Enter your own URL"
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
                    <label htmlFor="shortcutTitleEdit">
                      <p>Shortcut Title</p>
                    </label>
                    <div className="input-body pt-20">
                      <div className="input-details">
                        <input
                          id="shortcutTitleEdit"
                          type="text"
                          placeholder="Enter title here"
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
                    <label htmlFor="shortcutDescEdit">
                      <p>Shortcut Description</p>
                    </label>
                    <div className="input-body pt-20">
                      <div className="input-details">
                        <input
                          id="shortcutDescEdit"
                          type="text"
                          placeholder="Enter short description here"
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
                          data-replace="Delete Shortcut"
                        >
                          <span className="inner-btn-text">
                            Delete Shortcut
                          </span>
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

export default EditShortcut;
