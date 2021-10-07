import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import BasicModal from "../../Components/Modal/Modal";
import ContactWrapper from "./HeaderWrapper";

const Header = () => {
  return (
    <ContactWrapper>
      <div className="row mt-2 " id="glavniy">
        <div className="col-4 ">
          <FiAlignJustify className="icon" />
        </div>
        <div className="col-4 logo ">
          <img src="logo.png" alt="" />
        </div>
        <div className="col-4 contact">
          <BasicModal />
        </div>
      </div>
    </ContactWrapper>
  );
};

export default Header;
