import styled from "styled-components";

let Section = styled.section`
  background: linear-gradient(
    rgb(253, 233, 242) 0%,
    rgb(253, 240, 232) 100%,
    rgb(253, 240, 232) 100%
  );
  min-height: 75vh;
  height: fit-content;
  padding: 50px 3vw;
  div {
    width: 100%;
    margin: 0px auto;
    max-width: 440px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;
    img {
      width: 100%;
      padding: 0;
      height: 25vh;
    }
    h2 {
      text-align: center;
      font-size: 20px;
      margin: 20px 10px;
    }
    p {
      padding: 0 20px;
    }
    button {
      width: 90%;
      margin: 25px 5%;
      background-color: #f43397;
      color: #fff;
      border: none;
      padding: 10px;
      font-size: 16px;
      border-radius: 3px;
    }
    #privacy-policy {
      margin: 70px auto 25px;
      font-size: 11px;
      line-height: 20px;
      color: grey;
      text-align: center;
      span {
        color: #f43397;
        font-weight: 500;
      }
    }
    h2 + p {
      font-size: 12px;
      margin-bottom: 7px;
    }
    #number {
      font-size: 13px;
      span {
        font-weight: 500;
        margin-right: 10px;
      }
      input {
        border: none;
        border-bottom: 1px solid rgb(179, 179, 179);
        padding: 0 0 7px 7px;
        font-size: 12px;
        width: 80%;
        cursor: pointer;
        &:focus {
          outline: none;
          font-size: 14px;
        }
      }
    }
  }
`;

export { Section };
