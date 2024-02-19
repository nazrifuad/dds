import { useRef, useEffect, useState } from "react";
import closeIcon from "../../assets/img/close-icon.svg";
import { useParams } from "react-router-dom";
import Axios from "axios";

const NewCategory = ({
  isVisible,
  closeModal,
  fetchData,
  handleSearchChange,
  handleSearchSubmit,
  searchTerm,
}) => {
  const modalRef = useRef(null);
  const [name, setName] = useState("");
  const { id } = useParams();
  const createCategory = async (event) => {
    event.preventDefault();
    try {
      const response = await Axios.post(
        `http://localhost:3000/api/v1/styleguides/${id}/categories`,
        { name }
      );
      console.log(response);
      if (response.status === 201) {
        alert("Category Created Successfully");
        fetchData(id);
        closeModal();
      }
    } catch (err) {
      console.log(err);
      alert("Failed to create");
    }
  };

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
              <h3>Add New Category</h3>
              <p>Start by adding a new category</p>
            </div>
            <div className="input-wrapper pt-50">
              <form className="form-custom" onSubmit={createCategory}>
                <div className="form-row">
                  <div className="form-col">
                    <label htmlFor="categoryName">
                      <p>Category Name</p>
                    </label>
                    <div className="input-body pt-20">
                      <div className="input-details">
                        <input
                          id="categoryName"
                          type="text"
                          placeholder="Enter the category name"
                          autoComplete="off"
                          required
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
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

export default NewCategory;
