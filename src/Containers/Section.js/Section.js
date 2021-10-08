import React from "react";
import SectionWrapper from "./SectionWrapper";
import { Button } from "@material-ui/core";
import { Input } from "reactstrap";
import { GoLocation } from "react-icons/go";
import { HiPhone } from "react-icons/hi";
import { FaRegEnvelope } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const Section = () => {
  return (
    <SectionWrapper>
      <div>
        <div className="row mt-5">
          <Slide triggerOnce className=" col-sm-12 col-lg-6 my-2">
            <div className="d-flex justify-content-center align-items-end card1 container-fluid">
              <p className="text">женщины</p>
            </div>
          </Slide>
          <Slide triggerOnce className="col-sm-12 col-lg-6 mt-2">
            <div className=" d-flex justify-content-center align-items-end card2 container-fluid">
              <p>мужчины</p>
            </div>
          </Slide>
        </div>
        <div className="row mt-2  ">
          <Slide
            triggerOnce
            className="col-12 row card d-flex justify-content-center align-items-center"
          >
            <div className="col-sm-9 col-md-7 col-lg-5 d-flex justify-content-center align-items-center">
              <div className="text-white">
                <h2 className="text-center">О нас</h2>
                <p>
                  Швейная компания Ascanto рада представить Вам свою продукцию.
                  Стиль, элегантность, комфорт и оригинальность – отличие нашей
                  одежды. Естественно, качество стоит на первом месте! Мы
                  приглашаем Вас ознакомиться с коллекциями женских костюмов,
                  платьев, юбок, блуз, мужских костюмов, брюк, верхней одежды. У
                  нас есть оригинальные модели на каждый день, для деловых
                  встреч и офисных будней. Руководство, дизайнеры, художники,
                  швеи — весь коллектив нашей компании с огромной
                  ответственностью и трепетом относится к созданию каждой
                  модели. В любое изделие Ascanto работники вкладывают частичку
                  себя и благодаря этому компания завоевала популярность. Из-за
                  постоянного роста количества покупателей бренду необходимо
                  было расширить свое присутствие на иностранных рынках. Мы
                  смогли достичь этого путем сотрудничества с оптовыми
                  покупателями, франчайзи в России и Турции.
                </p>
              </div>
            </div>
          </Slide>
        </div>
        <div className="container mt-5">
          <div className="container row">
            <div className="col-sm-12 col-md-8 col-lg-5">
              <img src="img4.jpg" alt="" className="img" />
            </div>
            <div className="col-sm-12 col-md-9 col-lg-7 d-flex align-items-center">
              <div>
                <h1>Женские костюмы</h1>
                <p>
                  Неотъемлемой частью женского гардероба в 21 веке является
                  брючный костюм. Он изящно подчеркивает фигуру и придает образу
                  уверенности. Классические костюмы можно не только прекрасно
                  сочетать со многими вещами, но и носить для любых мероприятий,
                  ведь нотку строгости всегда можно разбавить модными оттенками
                  и формами.
                </p>
                <p>
                  Ascanto предлагают вам изделия для любого случая, подходящие
                  вам не только по фигуре, но и по цветотипу. Это очень важная
                  особенность, ведь изобилие моделей – это действительно большой
                  плюс.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-9 col-lg-7 d-flex align-items-center">
              <div>
                <h1>Мужские костюмы</h1>
                <p>
                  Во все времена мужской костюм оставался, при всех своих
                  разновидностях, показателем статуса владельца и его
                  социального положения. Хороший костюм открывал дорогу по
                  многим приличным людям в государственные учреждения и
                  правительственные дома.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-5">
              <img src="img5.jpg" alt="" className="img" />
            </div>
          </div>
        </div>
        <div className="row mt-2  ">
          <div className="col-12 row cards d-flex justify-content-center align-items-center">
            <div className="col-sm-9 col-md-7 col-lg-5 d-flex justify-content-center align-items-center">
              <div className="text-white">
                <h2 className="text-center">ИСТОРИЯ</h2>
                <p>
                  Швейная компания Ascanto рада представить Вам свою продукцию.
                  Стиль, элегантность, комфорт и оригинальность – отличие нашей
                  одежды. Естественно, качество стоит на первом месте! Мы
                  приглашаем Вас ознакомиться с коллекциями женских костюмов,
                  платьев, юбок, блуз, мужских костюмов, брюк, верхней одежды. У
                  нас есть оригинальные модели на каждый день, для деловых
                  встреч и офисных будней. Руководство, дизайнеры, художники,
                  швеи — весь коллектив нашей компании с огромной
                  ответственностью и трепетом относится к созданию каждой
                  модели. В любое изделие Ascanto работники вкладывают частичку
                  себя и благодаря этому компания завоевала популярность. Из-за
                  постоянного роста количества покупателей бренду необходимо
                  было расширить свое присутствие на иностранных рынках. Мы
                  смогли достичь этого путем сотрудничества с оптовыми
                  покупателями, франчайзи в России и Турции.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="container row">
            <div className="col-sm-12 col-md-8 col-lg-6 d-flex justify-content-center align-items-center">
              <div>
                <h2>
                  Популярные костюмы <br /> нашего времени
                </h2>
                <p>
                  Самое удобное премиальное качество, созданное людьми выберите
                  свой образ
                </p>
                <Button variant="contained" className="bg-black">
                  перейти
                </Button>
              </div>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-6 mt-2">
              <img src="img5.jpg" alt="foto" className="img" />
            </div>
          </div>
        </div>
        <div className="row mt-4  ">
          <div className="col-12 row car d-flex justify-content-center align-items-center">
            <div className="col-sm-12 col-lg-9 d-flex justify-content-center align-items-center">
              <div className="text-white row justify-content-center">
                <h2 className="text-center col-sm-10 col-md-8 col-lg-6">
                  Свяжитесь с нами, мы всегда рады обратной связи!
                </h2>
                <div className="row mt-5 col-12 d-flex justify-content-center">
                  <div className="col-sm-12 col-md-8 col-lg-7 bg-white text-black mt-5 mb-5 sms d-flex align-items-center  row">
                    <div className="container mt-3 col-10">
                      <h3>Связаться</h3>
                      <Input
                        type="имя"
                        name="имя"
                        id="имя"
                        placeholder="Имя"
                        className="mt-3"
                      />
                      <Input
                        type="phone"
                        name="phone"
                        id="phone"
                        placeholder="телефон номер"
                        className="mt-3"
                      />
                      <Button variant="contained" className="bg-black mt-3">
                        Отправит сообщение
                      </Button>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-8 col-lg-5 adres mt-2 mb-2">
                    <div className="container mt-5">
                      <h3>Свяжитесь с нами</h3>
                      <div className="row">
                        <div className="icons col-4">
                          <GoLocation className="h-100" />
                        </div>
                        <div className="col-8 mt-2">
                          <p>
                            <b>Адрес: </b>
                            Узбекистан, город. Наманган
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="icons col-4">
                          <HiPhone className="h-100" />
                        </div>
                        <div className="col-8 mt-4">
                          <p>
                            <b>Телефон: </b>
                            <a href="tel:+998906980800">+998906980800</a>
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="icons col-4">
                          <FaRegEnvelope className="h-100" />
                        </div>
                        <div className="col-8 mt-3">
                          <b>Электронная почта:</b>
                          <a href="mailto:info@ascanto.com">info@ascanto.com</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Section;
