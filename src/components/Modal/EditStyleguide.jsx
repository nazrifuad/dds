import { useRef, useEffect } from "react";
import closeIcon from "../../assets/img/close-icon.svg";
import plusIcon from "../../assets/img/plus-icon.svg";

const EditStyleguide = ({
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
              <h3>Edit Styleguide</h3>
              <p>Modify or remove your styleguide here</p>
            </div>
            <div className="input-wrapper pt-50">
              <p>Styleguide Logo</p>
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
                    <label htmlFor="editStyleguide">
                      <p>Styleguide Name</p>
                    </label>
                    <div className="input-body pt-20">
                      <div className="input-details">
                        <input
                          id="editStyleguide"
                          type="text"
                          placeholder="Gravitas Business Solution"
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
                          data-replace="Delete Styleguide"
                        >
                          <span className="inner-btn-text">
                            Delete Styleguide
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

export default EditStyleguide;
