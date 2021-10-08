import styled from "styled-components";

const SectionWrapper = styled.div`
  .card1 {
    background-image: url(img1.jpg);
    background-size: cover;
    font-size: 26px;
    min-height: 400px;
    color: white;
    p {
      opacity: 0;
      transition: 1s;
    }
  }

  .card2 {
    background-image: url(img2.jpg);
    background-size: cover;
    min-height: 400px;
    font-size: 26px;
    color: white;
    p {
      opacity: 0;
      transition: 1s;
    }
  }

  .card1:hover {
    p {
      opacity: 1;
    }
  }

  .card2:hover {
    p {
      opacity: 1;
    }
  }

  .card {
    background-image: url(img3.jpg);
    background-size: cover;
    min-height: 800px;
    width: 100%;
    transition: 3s;
  }

  Slide {
    transition: 2s;
  }

  .img {
    max-width: 100%;
  }

  .cards {
    background-image: url(img6.jpg);
    background-size: cover;
    min-height: 800px;
    width: 100%;
  }

  .car {
    background-image: url(img7.png);
    background-size: cover;
    min-height: 800px;
    width: 100%;
  }

  .sms {
    min-height: 400px;
  }

  .adres {
    background-color: #343a40;
    border-radius: 10px;
  }

  .icons {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: #494e53;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;

export default SectionWrapper;
