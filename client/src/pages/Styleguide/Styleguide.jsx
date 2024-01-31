import { useEffect, useState } from "react";
import Axios from "axios";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";

import MainGradient from "../../components/Gradient/MainGradient";
import gbsLogo from "../../assets/img/gbs-horizontal-logo.png";
import setiaLogo from "../../assets/img/Setia-Stay-Together-logo.png";
import takafulLogo from "../../assets/img/TAKAFUL.png";
import ytlLogo from "../../assets/img/YTL.png";
import suriaKlccLogo from "../../assets/img/SURIA-KLCC.png";
import NavButton from "../../components/NavButton/NavButton";

import plusIcon from "../../assets/img/plus-icon.svg";

import NewStyleguide from "../../components/Modal/NewStyleguide";
import EditStyleguide from "../../components/Modal/EditStyleguide";
import OverlayEdit from "../../components/Button/OverlayEdit";
import axios from "axios";

const Styleguide = () => {
  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;

  //backend
  const [styleguides, setStyleguides] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await Axios.get(
        "http://localhost:3000/api/v1/styleguides"
      );
      setStyleguides(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      navigate("/sign-in");
    }
  };

  // useEffect(() => {
  //   axios.get("http://127.0.0.1:3000/api/v1/styleguides").then((res) => {
  //     if (res.data.status === "success") {
  //       console.log(res);
  //       setStyleguides(res.data.data);
  //     } else {
  //       console.log("mah");
  //     }
  //   });
  // });

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
  const [isNewStyleguideModalVisible, setNewStyleguideModalVisible] =
    useState(false);
  const [isEditStyleguideModalVisible, setEditStyleguideModalVisible] =
    useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // replace this with actual search logic using searchTerm
    console.log("Search submitted:", searchTerm);

    setNewStyleguideModalVisible(false); // Close the modal after submission
    setEditStyleguideModalVisible(false);
  };

  // modal function (open/close) called
  const showModal = (modalType) => {
    if (modalType === "newStyleguide") {
      setNewStyleguideModalVisible(true);
      setEditStyleguideModalVisible(false);
    } else if (modalType === "editStyleguide") {
      setNewStyleguideModalVisible(false);
      setEditStyleguideModalVisible(true);
    }
  };

  const closeModal = () => {
    setNewStyleguideModalVisible(false);
    setEditStyleguideModalVisible(false);
  };

  return (
    <>
      <section className="section main-section full-height">
        <h2>Styleguide List</h2>
        <ul>
          {styleguides.map((styleguide) => (
            <li key={styleguide.id}>{styleguide.name}</li>
          ))}
        </ul>
        <div className="container">
          {/* gradient bg */}
          <MainGradient />
          <div className="section-wrap">
            {/* styleguide slider */}
            <div className="general-wrap">
              <div className="general-title">
                <h4>Styleguides</h4>
              </div>
              {/* navigation buttons */}
              <div className="custom-nav-wrapper styleguide">
                <NavButton />
              </div>
            </div>

            <div className="swiper-container styleguide">
              <div className="swiper general styleguide">
                <div className="swiper-wrapper">
                  {styleguides.map((styleguide) => (
                    <div
                      key={styleguide.id}
                      className="swiper-slide cards-wrap"
                    >
                      <Link to="/shortcut" className="card-link-wrapper">
                        <div className="cards-desc-wrap">
                          <div className="cards-image-wrap">
                            <img src={setiaLogo} alt="SP Setia" />
                          </div>
                          <div className="cards-title">
                            <h5 className="big">{styleguide.name}</h5>
                          </div>
                        </div>
                      </Link>
                      <OverlayEdit
                        showModal={() => showModal("editStyleguide")}
                      />
                    </div>
                  ))}
                  <div className="swiper-slide cards-wrap">
                    <Link to="/shortcut" className="card-link-wrapper">
                      <div className="cards-desc-wrap">
                        <div className="cards-image-wrap">
                          <img src={setiaLogo} alt="SP Setia" />
                        </div>
                        <div className="cards-title">
                          <h5 className="big">SP Setia Berhad</h5>
                        </div>
                      </div>
                    </Link>
                    <OverlayEdit
                      showModal={() => showModal("editStyleguide")}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* new styleguide button */}
            <div className="general-wrap pt-100">
              <div className="general-title">
                <h4>Add New Styleguide</h4>
              </div>
            </div>
            <div className="general-card">
              <div
                className="cards-desc-wrap click"
                onClick={() => showModal("newStyleguide")}
              >
                <div className="item">
                  <img src={plusIcon} alt="Icon" />
                </div>
              </div>
            </div>

            {/* the modal */}
            {/* new styleguide */}
            <NewStyleguide
              isVisible={isNewStyleguideModalVisible}
              closeModal={closeModal}
              handleSearchChange={handleSearchChange}
              handleSearchSubmit={handleSearchSubmit}
              searchTerm={searchTerm}
            />

            {/* edit styleguide */}
            <EditStyleguide
              isVisible={isEditStyleguideModalVisible}
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

export default Styleguide;
