import styled from "styled-components";

let Main = styled.main`
  padding: 50px 3.2vw;
  #homepage {
    display: grid;
    margin: 5px 3.8vw;
    grid-template-columns: 1fr 1fr;
    gap: 5vw;
    background-color: #f9f9f9;
    @media (max-width: 1100px) {
      grid-template-columns: 1fr;
    }

    div {
      &:nth-of-type(1) {
        padding: 50px;
        @media (max-width: 600px) {
          padding: 50px 20px;
        }
        h1 {
          font-size: 35px;
          line-height: 145%;
          letter-spacing: 2px;
          @media (max-width: 600px) {
            letter-spacing: 1px;
            font-size: 23px;
          }
        }
        p {
          background-color: #fff;
          padding: 2.5vh 1.5vw;
          width: fit-content;
          border-radius: 7px;
          margin: 25px 0;
          border: 1px solid #dedede;
        }

        button {
          display: flex;
          align-items: center;
          padding: 1.8vh 1.6vw;
          color: #fff;
          background-color: #f43397;
          border: none;
          border-radius: 5px;

          span {
            margin-left: 5px;
            font-weight: bold;
          }

          img {
            margin-right: 12px;
          }
        }
      }
      &:nth-of-type(2) {
        img {
          width: 100%;
        }
      }
    }
  }

  #h1-line {
    display: flex;
    align-items: center;
    margin: 55px 3.4vw;

    hr {
      flex-grow: 1;
      border: none;
      border-top: 1px solid #f43397;
    }
    h1 {
      margin: 0 3vw;
    }
  }

  #image-container {
    text-align: center;
    margin: 5px 3.4vw 10px;

    img {
      width: 100%;
      height: 75vh;
      margin-bottom: 6.5vh;
      border-radius: 10px;
      @media (max-width: 700px) {
        height: 400px;
      }

      &:nth-of-type(4) {
        height: 300px;
        @media (max-width: 1100px) {
          height: 150px;
        }
      }
    }
  }

  #h1-line2 {
    display: flex;
    align-items: center;
    margin-bottom: 65px;

    hr {
      flex-grow: 1;
      border: none;
      border-top: 1px solid #f43397;
    }
    h1 {
      margin: 0 3vw;
    }
  }

  #products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 2vw;
    @media (max-width: 730px) {
      justify-content: center;
    }
    div {
      width: 300px;
      margin: 0 10px;
      margin-bottom: 50px;
      box-shadow: 1px 1px 6px 1px #e3e3e3;
      border-radius: 5px;
      overflow: hidden;
      position: relative;
      padding-bottom: 4px;
      background-color: #f9f9f9;
      transition: 01s cubic-bezier(0.075, 0.82, 0.165, 1);
      &:hover {
        transform: scale(1.03);
        box-shadow: 1px 1px 10px 1px #d0d0d0;
      }
      .main-img {
        height: 360px;
        width: 100%;
        margin: 0;
        margin-bottom: 7px;
      }
    }
    .product-name {
      font-size: 17px;
      font-weight: 500;
      margin: 0 12px 9px;
    }
    .mkt {
      margin: 0 12px 6px;
      font-size: 12.5px;
      color: rgb(88, 88, 88);
    }
    .price {
      font-size: 19px;
      font-weight: bold;
      margin: 0 12px 6px;
      line-height: 160%;
    }
    .aprice {
      font-size: 15px;
      text-decoration: line-through;
      font-weight: normal;
      color: rgb(88, 88, 88);
      margin: 3px;
    }
    .discount {
      color: #038d63;
      font-size: 17px;
    }
    .firstorder {
      color: rgb(95, 94, 94);
      font-size: 15px;
      margin: 0 12px 14px;
      display: flex;
      align-items: center;
      img {
        height: 23px;
        aspect-ratio: 1;
        margin-right: 7px;
      }
    }
    .rating {
      margin: 0 12px 15px;
      display: flex;
      align-items: center;
      font-size: 12px;
      span {
        font-size: 15px;
        font-weight: 500;
        color: #fff;
        border-radius: 5px;
        display: flex;
        align-items: center;
        width: fit-content;
        padding: 5.5px 11px;
        margin-right: 9px;
      }
      svg {
        margin-left: 7px;
      }
    }
    .meesho-trust {
      position: absolute;
      bottom: 12px;
      right: 13px;
    }
  }
`;

export { Main };
