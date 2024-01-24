import { useState, useRef } from "react";
import ProfileImg from "../../assets/img/nazri-profile.png";
import ProfileNav from "../Dropdown/ProfileNav";

const ProfileImage = () => {
  // ref to the dropdown element
  const dropdownRef = useRef(null);

  // local state for dropdown visibility
  const [isProfileDropdownVisible, setProfileDropdownVisible] = useState(false);

  // function to show dropdown when clicking on the profile image
  const showDropdown = () => {
    setProfileDropdownVisible(!isProfileDropdownVisible);
  };

  const closeDropdown = () => {
    setProfileDropdownVisible(false);
  };

  return (
    <>
      <div className={`profile-img-wrapper ${isProfileDropdownVisible ? 'clicked' : ''}`} onClick={() => showDropdown()}>
        <img src={ProfileImg} alt="Profile" />
      </div>
      {/* dropdown */}
      <ProfileNav
        isProfileDropdownVisible={isProfileDropdownVisible}
        closeDropdown={closeDropdown}
        dropdownRef={dropdownRef}
      />
    </>
  );
};

export default ProfileImage;
