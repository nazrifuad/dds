import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MainGradient from "../../components/Gradient/MainGradient";
import NavButton from "../../components/NavButton/NavButton";

import mainLogo from "../../assets/img/gbs-horizontal-logo.png";
import gbsLogo from "../../assets/img/gbs-horizontal-logo.png";

import ArrowIcon from "../../components/Icons/ArrowIcon";

const Preview = () => {
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
                <div className="cards-desc-wrap upload preview">
                  <div className="cards-image-wrap">
                    <img src={gbsLogo} alt="GBS" />
                  </div>
                  <div className="cards-title">
                    <h5 className="big">Gravitas Business Solution</h5>
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
                      <div
                        className={`accordion-tab ${
                          activeAccordionTab === "Colors" ? "active" : ""
                        }`}
                      >
                        <div
                          className="accordion-tab-wrapper"
                          onClick={() => toggleAccordionTab("Colors")}
                        >
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
                      <div
                        className={`accordion-tab ${
                          activeAccordionTab === "Logo" ? "active" : ""
                        }`}
                      >
                        <div
                          className="accordion-tab-wrapper"
                          onClick={() => toggleAccordionTab("Logo")}
                        >
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
                </div>

                <div className="editor-wrapper">
                  <div className="main-editor content">
                    {/* bottom editor */}
                    <div className="top-title editor">
                      <div className="general-big-desc">
                        <h3>Versions</h3>
                      </div>
                      <div className="status-tag-wrapper">
                        <div className="status-tag-current new-color">
                          <p>New</p>
                        </div>
                      </div>
                    </div>
                    {/* title/tab description */}
                    <div className="general-subtitle">
                      <p>
                        There is a range of logo versions that can be used in
                        appropriate applications. Which logo version is used
                        will depend on the format, size, placement, and to some
                        degree the application.
                      </p>
                    </div>

                    <div className="general-editor">
                      <div className="general-big-desc">
                        <h4>Common Logo Version</h4>
                      </div>
                    </div>

                    <div className="general-editor">
                      <div className="row">
                        <div className="col-3">
                          <img src={mainLogo} alt="GBS Logo" />
                        </div>
                        <div className="col-8">
                          <div className="general-big-desc">
                            <h5>Combination Logo</h5>
                          </div>
                          <div className="general-subtitle active">
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
                          <div className="general-big-desc">
                            <h5>Combination Logo</h5>
                          </div>
                          <div className="general-subtitle active">
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
                          <div className="general-big-desc">
                            <h5>Combination Logo</h5>
                          </div>
                          <div className="general-subtitle active">
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
                      <hr className="divider-line"></hr>
                    </div>

                    <div className="general-editor">
                      <div className="general-big-desc">
                        <h4>Logo Color Version</h4>
                      </div>
                      <div className="general-subtitle">
                        <p>
                          The preferred expression of our logo is in orange and
                          green. It is most recognisable colour combination of
                          our brand expression. This standard full colour
                          version should be used on white backgrounds.
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

export default Preview;
