import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MainGradient from "../../components/Gradient/MainGradient";
import NavButton from "../../components/NavButton/NavButton";

import plusIcon from "../../assets/img/plus-icon.svg";
import colorIcon from "../../assets/img/color-icon.svg";
import componentsIcon from "../../assets/img/components-icon.svg";
import frameIcon from "../../assets/img/frame-icon.svg";
import characterStyleIcon from "../../assets/img/character-style-icon.svg";

import NewUpload from "../../components/Modal/NewUpload";
import FigmaLogo from "../../components/Icons/FigmaLogo";
import AdobeXDLogo from "../../components/Icons/AdobeXDLogo";


const Upload = () => {

  // add modal function
  const [isNewUploadVisible, setNewUploadModalVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // replace this with actual search logic using searchTerm
    console.log("Search submitted:", searchTerm);

    setNewUploadModalVisible(false); // Close the modal after submission
  };

  // modal function (open/close) called
  const showModal = (modalType) => {
    if (modalType === 'newUpload') {
      setNewUploadModalVisible(true);
    }
  };

  const closeModal = () => {
    setNewUploadModalVisible(false);
  };

  return (
    <>
      <section className="section main-section full-height">
        <div className="container">
          {/* gradient bg */}
          <MainGradient />

          <div className="section-wrap">
            {/* upload wrapper */}
            <div className="general-title pt-50">
              <h4>Uploads</h4>
            </div>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>File</th>
                    <th>Components</th>
                    <th>Character Styles</th>
                    <th>Frames</th>
                    <th>Color/Effect Styles</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="item-wrap main">
                        <div className="icon">
                          <FigmaLogo />
                        </div>
                        <div className="desc">
                          <div className="title">
                            <p>GBS Website</p>
                          </div>
                          <div className="update">
                            <p className="small font-grey">
                              Last updated a few seconds ago
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* components */}
                    <td>
                      <div className="item-wrap">
                        <div className="icon">
                          <img src={componentsIcon} alt="Components" />
                        </div>
                        <div className="desc">
                          <div className="title number">
                            <p>20</p>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* character styles */}
                    <td>
                      <div className="item-wrap">
                        <div className="icon">
                          <img src={characterStyleIcon} alt="Character Styles" />
                        </div>
                        <div className="desc">
                          <div className="title number">
                            <p>0</p>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* frames */}
                    <td>
                      <div className="item-wrap">
                        <div className="icon">
                          <img src={frameIcon} alt="Frames" />
                        </div>
                        <div className="desc">
                          <div className="title number">
                            <p>108</p>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* colors */}
                    <td>
                      <div className="item-wrap">
                        <div className="icon">
                          <img src={colorIcon} alt="Colors" />
                        </div>
                        <div className="desc">
                          <div className="title number">
                            <p>3</p>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="item-wrap">
                        <div className="icon">
                          <AdobeXDLogo />
                        </div>
                        <div className="desc">
                          <div className="title">
                            <p>GBS Website</p>
                          </div>
                          <div className="update">
                            <p className="small font-grey">
                              Last updated a few seconds ago
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* components */}
                    <td>
                      <div className="item-wrap">
                        <div className="icon">
                          <img src={componentsIcon} alt="Components" />
                        </div>
                        <div className="desc">
                          <div className="title number">
                            <p>20</p>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* character styles */}
                    <td>
                      <div className="item-wrap">
                        <div className="icon">
                          <img src={characterStyleIcon} alt="Character Styles" />
                        </div>
                        <div className="desc">
                          <div className="title number">
                            <p>0</p>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* frames */}
                    <td>
                      <div className="item-wrap">
                        <div className="icon">
                          <img src={frameIcon} alt="Frames" />
                        </div>
                        <div className="desc">
                          <div className="title number">
                            <p>108</p>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* colors */}
                    <td>
                      <div className="item-wrap">
                        <div className="icon">
                          <img src={colorIcon} alt="Colors" />
                        </div>
                        <div className="desc">
                          <div className="title number">
                            <p>3</p>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  {/* add more rows as needed */}
                </tbody>
              </table>
            </div>

            {/* pagination */}
            <div className="pagination-wrapper uploads">
              <div className="pagination">
                <li className="page-item previous-page disable"><Link to="" className="page-link">Prev</Link></li>
                <li className="page-item current-page active"><Link to="" className="page-link">1</Link></li>
                {/* <li className="page-item pagination-dots"><Link to="" className="page-link">...</Link></li> */}
                <li className="page-item current-page"><Link to="" className="page-link">2</Link></li>
                <li className="page-item current-page"><Link to="" className="page-link">3</Link></li>
                <li className="page-item current-page"><Link to="" className="page-link">4</Link></li>
                {/* <li className="page-item pagination-dots"><Link to="" className="page-link">...</Link></li> */}
                <li className="page-item current-page"><Link to="" className="page-link">8</Link></li>
                <li className="page-item next-page"><Link to="" className="page-link">Next</Link></li>
              </div>
            </div>


            {/* new upload button */}
            <div className="general-title pt-100">
              <h4>Add New Upload</h4>
            </div>
            <div className="general-card pt-50">
              <div className="cards-desc-wrap click" onClick={() => showModal('newUpload')}>
                <div className="item">
                  <img src={plusIcon} alt="Icon" />
                </div>
              </div>
            </div>

            {/* the modal */}
            {/* new upload */}
            <NewUpload
              isVisible={isNewUploadVisible}
              closeModal={closeModal}
              handleSearchChange={handleSearchChange}
              handleSearchSubmit={handleSearchSubmit}
              searchTerm={searchTerm}
            />

          </div>
        </div>
      </section>
    </>
  );
};

export default Upload;
