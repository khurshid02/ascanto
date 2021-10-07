import styled from "styled-components";

const FooterWrapper = styled.div`
  li {
    list-style-type: none;
    display: inline-block;
    margin-left: 10px;
    a {
      text-decoration: none;
      color: black;
    }
  }

  .icons {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #494e53;
    font-size: 30px;
    margin-left: 10px;
  }
`;
export default FooterWrapper;
