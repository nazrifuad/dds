import { useRef, useEffect } from "react";
import closeIcon from "../../assets/img/close-icon.svg"

const NewStyleguide = ({ isVisible, closeModal, handleSearchChange, handleSearchSubmit, searchTerm }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible, closeModal]);

  return (
    <>
        <div className={`modal-section ${isVisible ? 'show-modal' : ''}`}>
          <div ref={modalRef} className="modal-container">
            <div className="modal-item">
              <div className="close-button" onClick={closeModal}>
                <img src={closeIcon} alt="Close" />
              </div>
              <div className="desc-wrap">
                <h3>Add New Styleguide</h3>
                <p>Start by adding a new styleguide</p>
              </div>
              <div className="input-wrapper pt-50">
                <form className="form-custom" onSubmit={handleSearchSubmit}>
                  <div className="form-row">
                    <div className="form-col">
                      <label htmlFor="newStyleguide">
                        <p>Styleguide Name</p>
                      </label>
                      <div className="input-body pt-20">
                        <div className="input-details">
                          <input
                            id="newStyleguide"
                            type="text"
                            placeholder="Enter the styleguide name"
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
                      <div className="default-btn secondary-btn">
                        <div className="btn-link">
                          <button
                            type="submit"
                            className="btn-text"
                            data-replace="Create"
                          >
                            <span className="inner-btn-text">Create</span>
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

export default NewStyleguide;
