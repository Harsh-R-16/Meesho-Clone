import styled from "styled-components";

let Main = styled.main`
  margin: 50px 3.2vw;
  h2 {
    margin: 10px 1vw;
    font-size: 14.5px;
    font-weight: normal;
    span {
      font-size: 19px;
      font-weight: bold;
      color: #f43397;
    }
  }
  h2 + p {
    font-size: 14px;
    margin: 20px 1vw 40px;
    span {
      font-weight: 500;
    }
  }

  #products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 1.9vw 20px;
    div {
      width: 305px;
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
        background-color: #e8e9ea;
        font-size: 15px;
        font-weight: 500;
        color: #666;
        border: 1px solid rgb(204, 204, 204);
        border-radius: 5px;
        display: flex;
        align-items: center;
        width: fit-content;
        padding: 5px 10px;
        margin-right: 9px;
      }
      svg {
        margin-left: 5px;
      }
    }
    .meesho-trust {
      position: absolute;
      bottom: 12px;
      right: 13px;
    }
  }
  .active-btn {
    background-color: #f43397 !important;
    color: #fff;
  }
  .btns {
    color: #f43397;
    margin: 0 15px !important;
  }
  #sort-btns {
    width: fit-content;
    float: right;
    display: flex;
  }
  #sort-btns button {
    background-color: #fff;
    color: #f43397;
    border: 1px solid #f43397;
    padding: 5px 10px;
    font-size: 11px;
    margin: 0 10px;
    border-radius: 4px;
    font-weight: 500;
  }
  #nav-buttons {
    text-align: center;
    button {
      border: none;
      background-color: #fff;
      margin: 3px 4px;
      border-radius: 50%;
      height: 34px;
      aspect-ratio: 1;
      font-weight: 500;
      font-size: 15px;
    }
  }
`;

export { Main };
