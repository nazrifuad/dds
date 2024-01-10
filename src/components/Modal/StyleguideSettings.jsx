import { useRef, useEffect, useState } from "react";
import closeIcon from "../../assets/img/close-icon.svg";
import plusIcon from "../../assets/img/plus-icon.svg";
import ColorIcon from "../Icons/ColorIcon";
import TypographyIcon from "../Icons/TypographyIcon";
import CodeIcon from "../Icons/CodeIcon";
import UploadIcon from "../Icons/UploadIcon";
import DeleteIcon from "../Icons/DeleteIcon";
import FooterIcon from "../Icons/FooterIcon";

const StyleguideSettings = ({
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


  // handling tabs function
  const [activeTab, setActiveTab] = useState("color");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };


  return (
    <>
      <div className={`modal-section ${isVisible ? "show-modal" : ""}`}>
        <div ref={modalRef} className="modal-container">
          <div className="modal-item styleguide-settings">
            <div className="close-button" onClick={closeModal}>
              <img src={closeIcon} alt="Close" />
            </div>
            <div className="desc-wrap">
              <h3>Styleguide Settings</h3>
              <p>Make an edit or changes to your styleguide page</p>
            </div>
            <div className="input-wrapper">

              <div className="tabNav-wrapper">
                <div className="tab-nav-listing">
                  <div className={`tab-item ${activeTab === "color" ? "active" : ""}`} onClick={() => handleTabClick("color")}>
                    <div className="icon">
                      <ColorIcon />
                    </div>
                    <div className="title">
                      <p>Color</p>
                    </div>
                  </div>
                  <div className={`tab-item ${activeTab === "typography" ? "active" : ""}`} onClick={() => handleTabClick("typography")}>
                    <div className="icon">
                      <TypographyIcon />
                    </div>
                    <div className="title">
                      <p>Typography</p>
                    </div>
                  </div>
                  <div className={`tab-item ${activeTab === "designUploads" ? "active" : ""}`} onClick={() => handleTabClick("designUploads")}>
                    <div className="icon">
                      <UploadIcon />
                    </div>
                    <div className="title">
                      <p>Design Uploads</p>
                    </div>
                  </div>
                  <div className={`tab-item ${activeTab === "codeResources" ? "active" : ""}`} onClick={() => handleTabClick("codeResources")}>
                    <div className="icon">
                      <CodeIcon />
                    </div>
                    <div className="title">
                      <p>Code Resources</p>
                    </div>
                  </div>
                  <div className={`tab-item ${activeTab === "footer" ? "active" : ""}`} onClick={() => handleTabClick("footer")}>
                    <div className="icon">
                      <FooterIcon />
                    </div>
                    <div className="title">
                      <p>Footer</p>
                    </div>
                  </div>
                </div>

                <div className="tab-nav-content">
                  <div className="content-tab-wrapper">
                    <div className={`content-tab-item color ${activeTab === "color" ? "active" : ""}`}>
                      <div className="item flex-layout">
                        <div className="title">
                          <p>Accent</p>
                        </div>
                        <div className="color-wrapper">
                          <div className="code">
                            <p>#E25E3E</p>
                          </div>
                          <div className="color-box main-color"></div>
                        </div>
                      </div>
                      <div className="item flex-layout">
                        <div className="title">
                          <p>Page Title</p>
                        </div>
                        <div className="color-wrapper">
                          <div className="code">
                            <p>#FFFFFF</p>
                          </div>
                          <div className="color-box white-color"></div>
                        </div>
                      </div>
                      <div className="item flex-layout">
                        <div className="title">
                          <p>Page Intro</p>
                        </div>
                        <div className="color-wrapper">
                          <div className="code">
                            <p>#777777</p>
                          </div>
                          <div className="color-box grey-color"></div>
                        </div>
                      </div>
                      <div className="item flex-layout">
                        <div className="title">
                          <p>Large Heading (H2)</p>
                        </div>
                        <div className="color-wrapper">
                          <div className="code">
                            <p>#FFFFFF</p>
                          </div>
                          <div className="color-box white-color"></div>
                        </div>
                      </div>
                      <div className="item flex-layout">
                        <div className="title">
                          <p>Medium Heading (H3)</p>
                        </div>
                        <div className="color-wrapper">
                          <div className="code">
                            <p>#FFFFFF</p>
                          </div>
                          <div className="color-box white-color"></div>
                        </div>
                      </div>
                      <div className="item flex-layout">
                        <div className="title">
                          <p>Small Heading (H3)</p>
                        </div>
                        <div className="color-wrapper">
                          <div className="code">
                            <p>#FFFFFF</p>
                          </div>
                          <div className="color-box white-color"></div>
                        </div>
                      </div>
                      <div className="item flex-layout">
                        <div className="title">
                          <p>Body Text</p>
                        </div>
                        <div className="color-wrapper">
                          <div className="code">
                            <p>#FFFFFF</p>
                          </div>
                          <div className="color-box white-color"></div>
                        </div>
                      </div>
                      <div className="item flex-layout">
                        <div className="title">
                          <p>Links</p>
                        </div>
                        <div className="color-wrapper">
                          <div className="code">
                            <p>#FFFFFF</p>
                          </div>
                          <div className="color-box white-color"></div>
                        </div>
                      </div>
                      <div className="item flex-layout">
                        <div className="title">
                          <p>Links (Hover/Active State)</p>
                        </div>
                        <div className="color-wrapper">
                          <div className="code">
                            <p>#E25E3E</p>
                          </div>
                          <div className="color-box main-color"></div>
                        </div>
                      </div>
                    </div>
                    <div className={`content-tab-item typography ${activeTab === "typography" ? "active" : ""}`}>
                      <div className="item">
                        <p>New Fonts</p>
                        <div className="desc">
                          <p>
                          Importing fonts ensures text style previews display correctly if the viewer doesn’t have the font installed
                          </p>
                        </div>
                      </div>

                      {/* input fonts */}
                      <div className="item">
                        <div className="form-custom">
                          <div className="form-row">
                            <div className="form-col">
                              <label htmlFor="importSelected">
                                <p>Import using</p>
                              </label>
                              <div className="input-body pt-20">
                                <div className="input-details">
                                  <input
                                    id="importSelected"
                                    type="text"
                                    placeholder="Font URL"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    autoComplete="off"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-col">
                              <label htmlFor="fontFamily">
                                <p>Family</p>
                              </label>
                              <div className="input-body pt-20">
                                <div className="input-details">
                                  <input
                                    id="fontFamily"
                                    type="text"
                                    placeholder="e.g. Roboto"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    autoComplete="off"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-col">
                              <label htmlFor="fontURL">
                                <p>URL</p>
                              </label>
                              <div className="input-body pt-20">
                                <div className="input-details">
                                  <input
                                    id="fontURL"
                                    type="text"
                                    placeholder="e.g. https://server.com/font.otf"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    autoComplete="off"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-col">
                              <label htmlFor="fontWeight">
                                <p>Weight</p>
                              </label>
                              <div className="input-body pt-20">
                                <div className="input-details">
                                  <input
                                    id="fontWeight"
                                    type="text"
                                    placeholder="400"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    autoComplete="off"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="form-row cancel-add-btn">
                            <div className="form-col">
                              <div className="btn cancel-btn">
                                <p>Cancel</p>
                              </div>
                              <div className="btn add-btn">
                                <p>Add</p>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>

                      {/* add new font btn */}
                      <div className="item">
                        <div className="flex-center flex-start btn">
                          <div className="default-btn main-btn upload">
                            <div className="btn-link">
                              <button type="submit" className="btn-text" data-replace="Add New Font">
                                <span className="inner-btn-text">Add New Font</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* checkbox */}
                      <div className="item">
                        <p>Font Sizes</p>
                        <div className="form-custom">

                          <div className="form-row">
                            <div className="form-col checkbox-col">
                              <label htmlFor="categoryTitleCase" className="checkbox-container">
                                Category titles are uppercase
                                <input id="categoryTitleCase" type="checkbox" name="" value="" />
                                <span className="checkbox-checkmark"></span>
                              </label>
                              <div className="desc">
                                <p>This will change the capitalisation style of categories in the side navigation and in pages</p>
                              </div>
                            </div>
                          </div>

                          <div className="form-row">
                            <div className="form-col checkbox-col">
                              <label htmlFor="textWidth" className="checkbox-container">
                                Make text width the same as other content blocks
                                <input id="textWidth" type="checkbox" name="" value="" />
                                <span className="checkbox-checkmark"></span>
                              </label>
                              <div className="desc">
                                <p>This will change the width of paragraphs, page intros and headers for all pages in this styleguide</p>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>

                    </div>
                    <div className={`content-tab-item designUploads ${activeTab === "designUploads" ? "active" : ""}`}>

                      {/* checkbox */}
                      <div className="item">
                        <p>Text Style Settings</p>
                        <div className="form-custom">

                          <div className="form-row">
                            <div className="form-col checkbox-col">
                              <label htmlFor="textStyle" className="checkbox-container">
                                Text Style
                                <input id="textStyle" type="checkbox" name="" value="" />
                                <span className="checkbox-checkmark"></span>
                              </label>
                              <div className="desc">
                                <p>Show rem as well as PX values when displaying fonts</p>
                              </div>
                            </div>
                          </div>

                          <div className="form-row">
                            <div className="form-col checkbox-col">
                              <label htmlFor="colorStyle" className="checkbox-container">
                                Color Style
                                <input id="colorStyle" type="checkbox" name="" value="" />
                                <span className="checkbox-checkmark"></span>
                              </label>
                              <div className="desc">
                                <p>Display HSL/HSLA color values</p>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>

                    </div>
                    <div className={`content-tab-item codeResources ${activeTab === "codeResources" ? "active" : ""}`}>
                      <div className="item">
                        <p>Shared Resources</p>
                        <div className="desc">
                          <p>
                            These files will be included in all the code examples in this styleguide
                          </p>
                        </div>
                      </div>

                      {/* input fonts */}
                      <div className="item">
                        <div className="form-custom">
                          <div className="form-row">
                            <div className="form-col">
                              <label htmlFor="javascriptSelected">
                                <p>JavaScript</p>
                              </label>
                              <div className="input-body pt-20">
                                <div className="input-details">
                                  <input
                                    id="javascriptSelected"
                                    type="text"
                                    placeholder="e.g. https://dds.com/file.js"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    autoComplete="off"
                                    required
                                  />
                                </div>
                                <div className="delete-icon">
                                  <DeleteIcon />
                                </div>
                              </div>
                              {/* add another resources btn */}
                              <div className="item pt-20">
                                <div className="flex-center flex-start btn">
                                  <div className="default-btn main-btn upload">
                                    <div className="btn-link">
                                      <button type="submit" className="btn-text" data-replace="Add Another">
                                        <span className="inner-btn-text">Add Another</span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="form-row">
                            <div className="form-col">
                              <label htmlFor="cssSelected">
                                <p>CSS</p>
                              </label>
                              <div className="input-body pt-20">
                                <div className="input-details">
                                  <input
                                    id="cssSelected"
                                    type="text"
                                    placeholder="e.g. https://dds.com/file.css"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    autoComplete="off"
                                    required
                                  />
                                </div>
                                <div className="delete-icon">
                                  <DeleteIcon />
                                </div>
                              </div>
                              {/* add another resources btn */}
                              <div className="item pt-20">
                                <div className="flex-center flex-start btn">
                                  <div className="default-btn main-btn upload">
                                    <div className="btn-link">
                                      <button type="submit" className="btn-text" data-replace="Add Another">
                                        <span className="inner-btn-text">Add Another</span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>



                    </div>
                    <div className={`content-tab-item footer ${activeTab === "footer" ? "active" : ""}`}>
                      <div className="item">
                        <p>Feedback Form</p>
                        <div className="desc">
                          <p>
                          Add a link at the bottom of each page in the styleguide (view mode only) to open an embedded feedback form.
                          </p>
                        </div>
                      </div>

                      {/* input fonts */}
                      <div className="item">
                        <div className="form-custom">
                          <div className="form-row">
                            <div className="form-col">
                              <label htmlFor="footerLink">
                                <p>Please enter the form URL you would like viewers to use:</p>
                              </label>
                              <div className="input-body pt-20">
                                <div className="input-details">
                                  <input
                                    id="footerLink"
                                    type="text"
                                    placeholder="e.g. https://form.typeform.com/to/W4stnkmV"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    autoComplete="off"
                                    required
                                  />
                                </div>
                                <div className="delete-icon">
                                  <DeleteIcon />
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>



                    </div>
                  </div>

                  {/* save button */}
                  <div className="flex flex-end save-btn">
                    <div className="default-btn main-btn reset">
                      <div className="btn-link">
                        <button
                          type="submit"
                          className="btn-text"
                          data-replace="Reset to Defaults"
                        >
                          <span className="inner-btn-text">Reset to Defaults</span>
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

              </div>










              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StyleguideSettings;
