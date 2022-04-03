import styled from "styled-components";

let Main = styled.main`
  padding: 50px 7vw;
  #homepage {
    display: grid;
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
    margin: 55px 0;

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
    img {
      width: 100%;
      height: 70vh;
      margin-bottom: 6.5vh;

      &:nth-of-type(4) {
        height: 300px;
      }
    }
  }
`;

export { Main };
