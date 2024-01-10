import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MainGradient from "../../components/Gradient/MainGradient";
import NavButton from "../../components/NavButton/NavButton";

import plusIcon from "../../assets/img/plus-icon.svg";

import mainLogo from "../../assets/img/gbs-horizontal-logo.png";

import NewPage from "../../components/Modal/NewPage";
import NewCategory from "../../components/Modal/NewCategory";

import OverlayEdit from "../../components/Button/OverlayEdit";
import TimeIcon from "../../components/Icons/TimeIcon";
import ArrowIcon from "../../components/Icons/ArrowIcon";



const EditStyleguide = () => {
  // add modal function
  const [isNewPageModalVisible, setNewPageModalVisible] = useState(false);
  const [isNewCategoryModalVisible, setNewCategoryModalVisible] =
    useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // replace this with actual search logic using searchTerm
    console.log("Search submitted:", searchTerm);

    setNewPageModalVisible(false); // Close the modal after submission
    setNewCategoryModalVisible(false);
  };

  // modal function (open/close) called
  const showModal = (modalType) => {
    if (modalType === "NewPage") {
      setNewPageModalVisible(true);
      setNewCategoryModalVisible(false);
    } else if (modalType === "NewCategory") {
      setNewPageModalVisible(false);
      setNewCategoryModalVisible(true);
    }
  };

  const closeModal = () => {
    setNewPageModalVisible(false);
    setNewCategoryModalVisible(false);
  };

  // add dropdown function to status tag button
  const [isStatusTagDropdownVisible, setStatusTagDropdownVisible] =
    useState(false);

  const toggleStatusTagDropdown = () => {
    setStatusTagDropdownVisible(!isStatusTagDropdownVisible);
  };

  const closeStatusTagDropdown = () => {
    setStatusTagDropdownVisible(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isStatusTagDropdownVisible &&
        !event.target.closest(".status-tag-wrapper")
      ) {
        closeStatusTagDropdown();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isStatusTagDropdownVisible]);


  // add accordion functionality
  const [activeAccordionTab, setActiveAccordionTab] = useState(null);

  const toggleAccordionTab = (tabName) => {
    setActiveAccordionTab(activeAccordionTab === tabName ? null : tabName);
  };


  return (
    <>
      <section className="section main-section full-height">
        <div className="container">
          {/* gradient bg */}
          <MainGradient />

          <div className="section-layout">
            <div className="section-wrap-parent secondary">
              {/* upload logo */}
              <div className="general-card upload">
                <div className="cards-desc-wrap upload">
                  <div className="item">
                    <img src={plusIcon} alt="Icon" />
                    <p>Upload Logo</p>
                  </div>
                </div>
              </div>

              <div className="section-wrap">
                <div className="accordion-wrapper">
                  <div className="accordion-item">
                    <div className="accordion-title">
                      <p className="big">Getting Started</p>
                    </div>
                    <div className="accordion-body">
                      <div className="accordion-tab">
                        <div className="accordion-tab-wrapper">
                          <p className="small">Introduction</p>
                        </div>
                      </div>
                      <div className="accordion-tab">
                        <div className="accordion-tab-wrapper">
                          <p className="small">Principles</p>
                        </div>
                      </div>
                      <div className="accordion-tab">
                        <div className="accordion-tab-wrapper">
                          <p className="small">Release Notes</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <div className="accordion-title">
                      <p className="big">Style</p>
                    </div>
                    <div className="accordion-body">
                      <div className={`accordion-tab ${activeAccordionTab === "Colors" ? "active" : ""}`}>
                        <div className="accordion-tab-wrapper" onClick={() => toggleAccordionTab("Colors")}>
                          <p className="small">Colors</p>
                          <div className="toggle-arrow">
                            <ArrowIcon />
                          </div>
                        </div>
                        {activeAccordionTab === "Colors" && (
                          <div className="accordion-toggle-dropdown">
                            <div className="accordion-tab">
                              <p className="small">Primary</p>
                            </div>
                            <div className="accordion-tab">
                              <p className="small">Secondary</p>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="accordion-tab">
                        <div className="accordion-tab-wrapper">
                          <p className="small">Typography</p>
                        </div>
                      </div>
                      <div className={`accordion-tab ${activeAccordionTab === "Logo" ? "active" : ""}`}>
                        <div className="accordion-tab-wrapper" onClick={() => toggleAccordionTab("Logo")}>
                          <p className="small">Logo</p>
                          <div className="toggle-arrow">
                            <ArrowIcon />
                          </div>
                        </div>
                        {activeAccordionTab === "Logo" && (
                          <div className="accordion-toggle-dropdown">
                            <div className="accordion-tab">
                              <p className="small">Concepts</p>
                            </div>
                            <div className="accordion-tab active">
                              <p className="small">Versions</p>
                            </div>
                            <div className="accordion-tab">
                              <p className="small">Color</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* button bottom */}
                <div className="btn-wrap">
                  {/* add new page button */}
                  <div
                    className="flex-center flex-start btn"
                    onClick={() => showModal("NewPage")}
                  >
                    <div className="default-btn main-btn upload">
                      <div className="btn-link">
                        <button
                          type="submit"
                          className="btn-text"
                          data-replace="Add Page"
                        >
                          <span className="inner-btn-text">Add Page</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* the modal */}
                  {/* new page */}
                  <NewPage
                    isVisible={isNewPageModalVisible}
                    closeModal={closeModal}
                    handleSearchChange={handleSearchChange}
                    handleSearchSubmit={handleSearchSubmit}
                    searchTerm={searchTerm}
                  />

                  {/* add new category button */}
                  <div
                    className="flex-center flex-start btn"
                    onClick={() => showModal("NewCategory")}
                  >
                    <div className="default-btn main-btn upload">
                      <div className="btn-link">
                        <button
                          type="submit"
                          className="btn-text"
                          data-replace="Add Category"
                        >
                          <span className="inner-btn-text">Add Category</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* the modal */}
                  {/* new styleguide */}
                  <NewCategory
                    isVisible={isNewCategoryModalVisible}
                    closeModal={closeModal}
                    handleSearchChange={handleSearchChange}
                    handleSearchSubmit={handleSearchSubmit}
                    searchTerm={searchTerm}
                  />
                </div>
              </div>
            </div>

            <div className="section-wrap-parent main">
              <div className="section-wrap">
                <div className="top-nav-wrapper">
                  {/* breadcrumbs */}
                  <div className="breadcrumbs-wrapper">
                    <div className="item home">
                      <ArrowIcon />
                      <Link to="#">Logo</Link>
                    </div>
                    <div className="item active">
                      <ArrowIcon />
                      <Link to="#">Versions</Link>
                    </div>
                  </div>

                  {/*   last edited status */}
                  <div className="edited-status-wrapper admin">
                    <div className="icon">
                      <TimeIcon />
                    </div>
                    <div className="desc">
                      <p className="font-grey small">
                        Last edited{" "}
                        <span className="font-white">a few seconds</span> ago{" "}
                        <span className="font-white">by Nazri</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="editor-wrapper">
                  <div className="main-editor content">
                    {/* bottom editor */}
                    <div className="top-title editor">
                      <div className="general-big-desc editor">
                        <h3>Versions</h3>
                      </div>
                      <div className="status-tag-wrapper">
                        <div
                          className="flex-center flex-start btn status-tag"
                          onClick={toggleStatusTagDropdown}
                        >
                          <div className="default-btn main-btn upload">
                            <div className="btn-link">
                              <button
                                type="submit"
                                className="btn-text"
                                data-replace="Status Tag"
                              >
                                <span className="inner-btn-text">
                                  Status Tag
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div
                          className="status-tag-dropdown"
                          style={{
                            display: isStatusTagDropdownVisible
                              ? "block"
                              : "none",
                          }}
                        >
                          <div className="status-tag-dropdown-wrapper">
                            <div className="item new-color">
                              <p>New</p>
                            </div>
                            <div className="item ready-color">
                              <p>Ready</p>
                            </div>
                            <div className="item in-progress-color">
                              <p>In Progress</p>
                            </div>
                            <div className="item todo-color">
                              <p>To Do</p>
                            </div>
                            <div className="item deprecated-color">
                              <p>Deprecated</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* title/tab description */}
                    <div className="general-subtitle editor">
                      <p>Add an introduction (Optional)</p>
                    </div>

                    <div className="general-editor">
                      <div className="general-big-desc editor">
                        <h4>Common Logo Version</h4>
                      </div>
                    </div>

                    <div className="general-editor">
                      <div className="row">
                        <div className="col-3">
                          <img src={mainLogo} alt="GBS Logo" />
                        </div>
                        <div className="col-8">
                          <div className="general-big-desc editor">
                            <h5>Combination Logo</h5>
                          </div>
                          <div className="general-subtitle editor active">
                            <p>
                              The combination logo for Gravitas Business
                              Solutions is designed for seamless integration
                              across various platforms. Its elongated layout
                              ensures a balanced and professional appearance,
                              making it ideal for website headers, email
                              signatures, business cards, and other
                              horizontal-oriented spaces. The logo's streamlined
                              design preserves clarity and impact, ensuring your
                              brand maintains a strong presence wherever it is
                              displayed horizontally. Harness the strength of
                              Gravitas with our versatile horizontal logo – a
                              mark of distinction in every business context.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="general-editor">
                      <div className="row">
                        <div className="col-3">
                          <img src={mainLogo} alt="GBS Logo" />
                        </div>
                        <div className="col-8">
                          <div className="general-big-desc editor">
                            <h5>Combination Logo</h5>
                          </div>
                          <div className="general-subtitle editor active">
                            <p>
                              The combination logo for Gravitas Business
                              Solutions is designed for seamless integration
                              across various platforms. Its elongated layout
                              ensures a balanced and professional appearance,
                              making it ideal for website headers, email
                              signatures, business cards, and other
                              horizontal-oriented spaces. The logo's streamlined
                              design preserves clarity and impact, ensuring your
                              brand maintains a strong presence wherever it is
                              displayed horizontally. Harness the strength of
                              Gravitas with our versatile horizontal logo – a
                              mark of distinction in every business context.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="general-editor">
                      <div className="row">
                        <div className="col-3">
                          <img src={mainLogo} alt="GBS Logo" />
                        </div>
                        <div className="col-8">
                          <div className="general-big-desc editor">
                            <h5>Combination Logo</h5>
                          </div>
                          <div className="general-subtitle editor active">
                            <p>
                              The combination logo for Gravitas Business
                              Solutions is designed for seamless integration
                              across various platforms. Its elongated layout
                              ensures a balanced and professional appearance,
                              making it ideal for website headers, email
                              signatures, business cards, and other
                              horizontal-oriented spaces. The logo's streamlined
                              design preserves clarity and impact, ensuring your
                              brand maintains a strong presence wherever it is
                              displayed horizontally. Harness the strength of
                              Gravitas with our versatile horizontal logo – a
                              mark of distinction in every business context.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="general-editor">
                      <div className="general-subtitle editor">
                        <p>
                          Type something you can use as markdown or use the + to
                          add content..
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="secondary-editor tab">
                    <div className="title">
                      <p>On this page</p>
                    </div>
                    <div className="tab-link">
                      <div className="item active">
                        <Link to="#">Common Logo Versions</Link>
                      </div>
                      <div className="item">
                        <Link to="#">Logo Color Version</Link>
                      </div>
                    </div>
                    {/* add new tab */}
                    <div className="flex-center flex-start btn">
                      <div className="default-btn main-btn upload">
                        <div className="btn-link">
                          <button
                            type="submit"
                            className="btn-text"
                            data-replace="Add Tab"
                          >
                            <span className="inner-btn-text">Add Tab</span>
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
      </section>
    </>
  );
};

export default EditStyleguide;
