import styled from "styled-components";

let Foot = styled.footer`
  padding: 50px 2.8vw;
  background-color: #f9f9f9;

  #section-1 {
    display: grid;
    grid-template-columns: 3fr 4fr 4fr;
    gap: 15px;

    @media screen and (max-width: 1200px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 850px) {
      grid-template-columns: 1fr;
    }
    #div-1 {
      grid-template-columns: 1fr;
      h1 {
        color: #333;
      }
      p {
        margin: 15px 0;
        color: #666;
        font-size: 15px;
        line-height: 140%;
        font-weight: normal;
      }
      button {
        background-color: #fff;
        width: 48%;
        text-align: left;
        padding: 5px 7px;
        border-radius: 5px;

        img {
          height: 22px;
          aspect-ratio: 1;
          background-color: #fff;
          margin: 7px 10px 0px 0;
          float: left;
        }
        span {
          font-size: 12px;
        }
        p {
          margin: 2px 0;
          font-size: 14px;
          color: #000;
          font-weight: 500;
        }
        &:nth-of-type(2) {
          margin-left: 10px;
        }
      }
    }

    > div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 20px;

      p {
        color: #333;
        margin-bottom: 13px;
        font-weight: 500;
      }
    }
    h3 {
      margin-bottom: 15px;
    }
  }

  #icons img {
    height: 35px;
    aspect-ratio: 1;
    margin: 12px 13px;
    margin-left: 0;
  }

  h3 + p {
    font-size: 12px;
    line-height: 150%;
    font-weight: normal !important;
  }

  #section-2 {
    border: 1px solid #cac9c9;
    background-color: #fff;
    padding: 15px;
    border-radius: 7px;
    h4 {
      font-size: 22px;
    }
    hr {
      border: none;
      border-top: 1px solid #cac9c9;
      margin: 15px 0;
    }
    h6 {
      font-size: 16px;
      font-weight: 500;
    }
    h6 + p {
      margin: 12px 0;
      font-size: 13.5px;
      line-height: 140%;
      color: #6a6a6a;

      span {
        color: #f43397;
        text-transform: capitalize;
        font-weight: bold;
      }
    }
    h4 {
      color: #f43397;
      margin-bottom: 18px;
    }

    #pink-para {
      p {
        color: #f43397;
        font-weight: 500;
        letter-spacing: 1.4px;
      }
    }
  }
`;

export { Foot };
