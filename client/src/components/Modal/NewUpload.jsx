import { useRef, useEffect } from "react";
import closeIcon from "../../assets/img/close-icon.svg"
import FigmaLogo from "../../components/Icons/FigmaLogo";
import AdobeXDLogo from "../../components/Icons/AdobeXDLogo";

const NewUpload = ({ isVisible, closeModal, handleSearchChange, handleSearchSubmit, searchTerm }) => {
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
                <h3>Add New Upload</h3>
                <p>Add existing working files from external sources.</p>
              </div>
              <div className="input-wrapper pt-50">
                {/* figma */}
                <div className="item">
                  <div className="flex platform">
                    <div className="img-icon">
                      <FigmaLogo />
                    </div>
                    <div className="desc">
                      <p>Figma</p>
                    </div>
                  </div>
                  <div className="flex-center flex-end btn">
                    <div className="default-btn main-btn upload">
                      <div className="btn-link">
                        <button
                          type="submit"
                          className="btn-text"
                          data-replace="Upload"
                        >
                          <span className="inner-btn-text">Upload</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* XD */}
                <div className="item">
                  <div className="flex platform">
                    <div className="img-icon">
                      <AdobeXDLogo />
                    </div>
                    <div className="desc">
                      <p>Adobe XD</p>
                    </div>
                  </div>
                  <div className="flex-center flex-end btn">
                    <div className="default-btn main-btn upload">
                      <div className="btn-link">
                        <button
                          type="submit"
                          className="btn-text"
                          data-replace="Upload"
                        >
                          <span className="inner-btn-text">Upload</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default NewUpload;
