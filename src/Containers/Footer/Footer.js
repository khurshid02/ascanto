import { Button } from "@material-ui/core";
import React from "react";
import FooterWrapper from "./FooterWrapper";
import { RiTelegramLine } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { AiOutlineYoutube } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <p>А также вы можете перейти на наш интернет-магазин</p>
              <Button
                variant="contained"
                className="bg-black mt-2 mb-2 text-white"
              >
                перейти
              </Button>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-6 text-center">
              <ul>
                <li>
                  <a href="https://ascanto.com/#">Главная</a>
                </li>
                <li>
                  <a href="https://ascanto.com/#">О нас</a>
                </li>
                <li>
                  <a href="https://ascanto.com/#">Мужское</a>
                </li>
                <li>
                  <a href="https://ascanto.com/#">Женское</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-8 col-md-5 col-lg-3">
              <p>Мы в социальных сетях</p>
              <div className="row">
                <div className="icons d-flex justify-content-center align-items-center col-3">
                  <RiTelegramLine className="text-center" />
                </div>
                <div className="icons d-flex justify-content-center align-items-center  col-3">
                  <GrInstagram />
                </div>
                <div className="icons d-flex justify-content-center align-items-center col-3">
                  <AiOutlineYoutube />
                </div>

                <div className="icons d-flex justify-content-center align-items-center col-3  ">
                  <CgFacebook />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <p>© Все права защищены</p>
            <p>Contact us Privacy & cookies</p>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
