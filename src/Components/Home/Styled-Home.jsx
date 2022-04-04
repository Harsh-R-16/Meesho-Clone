import styled from "styled-components";

let Main = styled.main`
  padding: 50px 2.8vw;
  #homepage {
    display: grid;
    margin: 5px 3.4vw;
    grid-template-columns: 1fr 1fr;
    gap: 5vw;
    background-color: #f9f9f9;

    div {
      &:nth-of-type(1) {
        padding: 50px;
        h1 {
          font-size: 35px;
          line-height: 145%;
          letter-spacing: 2px;
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

      &:nth-of-type(4) {
        height: 300px;
      }
    }
  }

  #h1-line2 {
    display: flex;
    align-items: center;
    margin-bottom: 55px;

    hr {
      flex-grow: 1;
      border: none;
      border-top: 1px solid #f43397;
    }
    h1 {
      margin: 0 3vw;
    }
  }
`;

export { Main };
