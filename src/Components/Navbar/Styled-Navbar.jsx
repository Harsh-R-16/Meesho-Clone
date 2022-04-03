import styled from "styled-components";

let Nav = styled.nav`
  position: sticky;
  top: 0px;
  #top {
    display: flex;
    align-items: center;
    padding: 17px 2.8vw;
    background-color: white;
    color: #000;
    border-bottom: 1px solid #dfdfdf;
    

    #logo {
      transform: translateY(-3px);
    }

    div {
      border: 1px solid #999;
      flex-grow: 1;
      display: flex;
      margin: 0 0.5vw 0 1.1vw;
      padding: 10px 0.9vw;
      border-radius: 5px;

      form {
        flex-grow: 1;
        margin: 0 10px;

        input {
          width: 100%;
          border: none;

          &:focus {
            outline: none;
          }
        }
      }
    }

    p {
      margin: 0 0.7vw;
      font-size: 15px;
      position: relative;
      display: flex;
      align-items: center;
      cursor: pointer;

      &:hover {
        color: #f43397;
      }

      img {
        height: 23px;
        margin-right: 4px;
      }
    }

    .line {
      color: #b9b9b9;
      transform: scaleY(2.5);
      margin: 0 6px;
    }

    #cart svg {
      margin-right: 14px;
      transform: scale(1.3);
    }
    #cart span {
      position: absolute;
      top: -17px;
      left: 5px;
      width: 27px;
      text-align: center;
      aspect-ratio: 1.3;
      font-size: 14px;
      color: #fff;
      background-color: #f43397;
      z-index: 1;
      border-radius: 50%;
      padding-top: 5px;
    }
  }

  #bottom {
      background-color: white;
      color: #000;
      
      ul {
      padding: 0px 2.8vw;
      border-bottom: 1px solid #dfdfdf;
      display: flex;
      align-items: center;
      list-style: none;
      justify-content: space-between;

      li:nth-of-type(1) {
        flex-grow: 0;
        padding-right: 1.3vw;
      }
      li:nth-of-type(9) {
        flex-grow: 0;
        padding-left: 1.3vw;
      }
      li {
        flex-grow: 1;
        font-size: 15px;
        padding: 17px 0;
        text-align: center;
      }
    }
    article {
    border: 1px solid #dfdfdf;
    background-color: white;
    color: rgb(92, 92, 92);
    display: flex;
    margin: 0px 2.8vw;
    border-top:0;
    
    
    div {
      padding-bottom:12px;
      padding-right: 2vw;
      background-color: #fff;
      // flex-grow: 1;

      p {
        margin: 10px 19px 13px;
        font-size: 15px;
        cursor:pointer;

        &:hover {
            color:#000;
            transform: scale(1.04);
            transition:transform .25s ease-in-out;
        }
      }
      p:nth-of-type(1) {
        color: #f43397;
        font-weight: bold;
        margin: 18px 17px 16px;
      }
    
      &:nth-of-type(odd) {
      background-color: rgb(249, 249, 249);
    }
  }
  }

 
`;

export { Nav };
