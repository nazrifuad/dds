import { useRef, useEffect } from "react";
import closeIcon from "../../assets/img/close-icon.svg"

const NewShortcut = ({ isVisible, closeModal, handleSearchChange, handleSearchSubmit, searchTerm }) => {
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
                <h3>Add New Shortcut</h3>
                <p>Create or add your new shortcut here</p>
              </div>
              <div className="input-wrapper pt-50">
                <form className="form-custom" onSubmit={handleSearchSubmit}>
                  <div className="form-row">
                    <div className="form-col">
                    <label htmlFor="shortcutLink">
                      <p>Enter a URL</p>
                    </label>
                    <div className="input-body pt-20">
                      <div className="input-details">
                          <input
                            id="shortcutLink"
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
                    <label htmlFor="shortcutTitle">
                      <p>Shortcut Title</p>
                    </label>
                    <div className="input-body pt-20">
                      <div className="input-details">
                          <input
                            id="shortcutTitle"
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
                    <label htmlFor="shortcutDesc">
                      <p>Shortcut Description</p>
                    </label>
                    <div className="input-body pt-20">
                      <div className="input-details">
                          <input
                            id="shortcutDesc"
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

export default NewShortcut;
