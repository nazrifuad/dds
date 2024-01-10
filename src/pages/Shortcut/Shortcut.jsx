import { useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import MainGradient from "../../components/Gradient/MainGradient";
import NavButton from "../../components/NavButton/NavButton";

import plusIcon from "../../assets/img/plus-icon.svg";

import NewShortcut from "../../components/Modal/NewShortcut";
import EditShortcut from "../../components/Modal/EditShortcut";
import OverlayEdit from "../../components/Button/OverlayEdit";
import TimeIcon from "../../components/Icons/TimeIcon";

const Shortcut = () => {
  // styleguide slider
  useEffect(() => {
    const swiper = new Swiper(".swiper.styleguide", {
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 1000,
      modules: [Navigation],
      navigation: {
        nextEl: ".custom-nav-wrapper.styleguide .custom-button-next",
        prevEl: ".custom-nav-wrapper.styleguide .custom-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 3,
        },
        1300: {
          slidesPerView: 4,
        },
      },
    });
  }, []); // run this effect only once when the component mounts



  // add modal function
  const [isNewShortcutModalVisible, setNewShortcutModalVisible] = useState(false);
  const [isEditShortcutModalVisible, setEditShortcutModalVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // replace this with actual search logic using searchTerm
    console.log("Search submitted:", searchTerm);

    setNewShortcutModalVisible(false); // Close the modal after submission
    setEditShortcutModalVisible(false);
  };

  // modal function (open/close) called
  const showModal = (modalType) => {
    if (modalType === 'newShortcut') {
      setNewShortcutModalVisible(true);
      setEditShortcutModalVisible(false);
    } else if (modalType === 'editShortcut') {
      setNewShortcutModalVisible(false);
      setEditShortcutModalVisible(true);
    }
  };

  const closeModal = () => {
    setNewShortcutModalVisible(false);
    setEditShortcutModalVisible(false);
  };

  return (
    <>
      <section className="section main-section full-height">
        <div className="container">
          {/* gradient bg */}
          <MainGradient />

          <div className="section-wrap">
           <div className="general-heading-wrapper">
              <div className="general-big-desc mw-1000 mw-full-m -mw-full-i text-center">
                <h3>Welcome to GBS Digital Design System</h3>
              </div>
              <div className="general-subtitle mw-1000 mw-full-m -mw-full-i text-center ">
                <p>
                  Elevate your brand presence and user experience through a
                  cohesive and visually stunning design language.
                </p>
              </div>
            </div>
            {/* styleguide slider */}
            <div className="general-wrap pt-50">
              <div className="general-title">
                <h4>Shortcuts</h4>
              </div>
              {/* navigation buttons */}
              <div className="custom-nav-wrapper styleguide">
                <NavButton />
              </div>
            </div>
            <div className="swiper-container styleguide">
              <div className="swiper general styleguide">
                <div className="swiper-wrapper">
                  <div className="swiper-slide cards-wrap default">
                    <Link to="/edit-styleguide" className="card-link-wrapper">
                      <div className="cards-desc-wrap">
                        <div className="cards-title">
                          <h4 className="big">Brand Design</h4>
                        </div>
                        <div className="cards-desc">
                          <p className="small">Our logo, an abstract masterpiece, symbolizes innovation and strategic prowess. Learn more here.</p>
                        </div>
                      </div>
                    </Link>
                    <OverlayEdit showModal={() => showModal("editShortcut")}/>
                  </div>
                  <div className="swiper-slide cards-wrap default">
                    <Link to="/edit-styleguide" className="card-link-wrapper">
                      <div className="cards-desc-wrap">
                        <div className="cards-title">
                          <h4 className="big">Content</h4>
                        </div>
                        <div className="cards-desc">
                          <p className="small">Listing all the brand copywriting to use in various platforms.</p>
                        </div>
                      </div>
                    </Link>
                    <OverlayEdit showModal={() => showModal("editShortcut")}/>
                  </div>
                  <div className="swiper-slide cards-wrap default">
                    <Link to="/edit-styleguide" className="card-link-wrapper">
                      <div className="cards-desc-wrap">
                        <div className="cards-title">
                          <h4 className="big">Clients</h4>
                        </div>
                        <div className="cards-desc">
                          <p className="small">Clients feedbacks and related content.</p>
                        </div>
                      </div>
                    </Link>
                    <OverlayEdit showModal={() => showModal("editShortcut")}/>
                  </div>


                </div>
              </div>
            </div>

            {/* new styleguide button */}
            <div className="general-wrap pt-100">
              <div className="general-title">
                <h4>Add New Shortcuts</h4>
              </div>
            </div>
            <div className="general-card">
              <div className="cards-desc-wrap click" onClick={() => showModal('newShortcut')}>
                <div className="item">
                  <img src={plusIcon} alt="Icon" />
                </div>
              </div>
            </div>

            {/*   last edited status */}
            <div className="edited-status-wrapper">
              <div className="icon">
                <TimeIcon />
              </div>
              <div className="desc">
                <p className="font-grey small">Last edited <span className="font-white">a few seconds</span> ago</p>
              </div>
            </div>

            {/* the modal */}
            {/* new styleguide */}
            <NewShortcut
              isVisible={isNewShortcutModalVisible}
              closeModal={closeModal}
              handleSearchChange={handleSearchChange}
              handleSearchSubmit={handleSearchSubmit}
              searchTerm={searchTerm}
            />

            {/* edit styleguide */}
            <EditShortcut
              isVisible={isEditShortcutModalVisible}
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

export default Shortcut;
