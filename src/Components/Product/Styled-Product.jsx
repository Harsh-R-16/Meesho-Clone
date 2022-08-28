import styled from "styled-components";

let Section = styled.section`
  display: grid;
  padding: 50px 5vw;
  grid-template-columns: 1fr 4fr 6fr;
  gap: 1vw;
  margin: 0 4vw;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    margin: 0;
    gap: 0;
  }

  #product-article-1 {
    height: fit-content;
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    img {
      width: 70px;
      aspect-ratio: 1;
      margin: 12px;
      border-radius: 4px;
      border: 1px solid rgb(206, 206, 206);
      &:hover {
        border-color: #f43397;
      }
    }
  }
  #product-article-2 {
    display: block;
    margin-right: 30px;
    position: relative;
    height: fit-content;
    text-align: center;
    #main-img {
      width: 100%;
      max-width: 400px;
      height: 520px;
      border: 1px solid rgb(234, 233, 233);
      border-radius: 6px;
    }
    div {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      img {
        width: 70px;
        aspect-ratio: 1;
        margin: 12px;
        border-radius: 4px;
        border: 1px solid rgb(206, 206, 206);
        &:hover {
          border-color: #f43397;
        }
      }
    }
    button {
      background-color: #f43397;
      color: white;
      width: 100%;
      border: none;
      padding: 12px;
      font-size: 16px;
      margin: 20px auto;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 400px;
      svg {
        margin-right: 10px;
        font-size: 18px;
      }
    }
    button + hr {
      border: none;
      border-bottom: 1px solid rgb(227, 227, 227);
      margin: 22px 0 25px;
    }
    hr + p {
      margin-bottom: 20px;
      font-weight: 500;
      font-size: 17px;
    }
  }
  #product-article-3 {
    div {
      padding: 15px;
      margin: 0 12px 25px;
      /* border: 1px solid rgb(226, 226, 226); */
      box-shadow: 1px 1px 6px 1px #cfcfcf;
    }
    #price h3 {
      color: #000;
      background-color: #fff;
      padding-left: 0;
      margin: 7px 0;
    }
    #price {
      font-size: 19px;
      font-weight: bold;
      line-height: 160%;

      h2 {
        color: rgb(54, 54, 54);
        font-size: 21px;
        font-weight: 500;
      }
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
    #price .rating {
      display: flex;
      align-items: center;
      font-size: 14px;
    }
    #price .rating svg {
      margin-left: 5px;
    }
    #price .rating span {
      background-color: green;
      font-size: 16px;
      font-weight: 500;
      color: rgb(255, 255, 255);
      border: 1px solid rgb(204, 204, 204);
      border-radius: 5px;
      display: flex;
      align-items: center;
      width: fit-content;
      padding: 0 10px;
      margin-right: 9px;
    }

    #price img {
      height: 23px;
      aspect-ratio: 1;
      margin-right: 7px;
    }
    .firstorder {
      margin: 6px 0 0;
      display: flex;
      align-items: center;
      font-weight: 500;
    }
    h5 + p {
      font-size: 14px;
      font-weight: 500;
    }
    #size p {
      font-size: 18px;
      margin-bottom: 12px;
      font-weight: 500;
    }
    #size button {
      color: #f43397;
      border: 1px solid #f43397;
      background-color: #fff;
      border-radius: 4px;
      padding: 10px;
      font-weight: bold;
      margin-right: 12px;
      &:hover {
        background-color: #f43397;
        color: #fff;
      }
    }

    #details p:nth-of-type(1) {
      font-size: 18px;
      margin-bottom: 12px;
      font-weight: 500;
      color: #000;
    }
    #details p {
      margin-bottom: 4.4px;
      color: rgb(71, 71, 71);
      font-size: 15px;
    }
    #soldBy p,
    #rating-img p,
    #information p {
      font-size: 18px;
      margin-bottom: 15px;
      font-weight: 500;
    }
    #soldBy article {
      display: flex;
      align-items: center;
      /* font-size: 25px; */
      /* justify-content: space-between; */
    }
    #soldBy svg {
      font-size: 40px;
      margin-right: 10px;
    }
    #soldBy button {
      color: #f43397;
      border: 1px solid #f43397;
      background-color: #fff;
      padding: 10px 20px;
      margin-left: 10px;
      border-radius: 5px;
      font-weight: 500;
      &:hover {
        background-color: #f43397;
        color: #fff;
      }
    }
    #soldBy span {
      margin: 0 20px;
      font-weight: 500;
    }
    #soldBy h6 {
      margin-top: 20px;
      font-size: 14px;
      font-weight: 500;
    }
    #soldBy h6 span {
      color: #f43397;
      margin: 0 5px;
      font-weight: bold;
    }
    #rating-img img {
      height: 200px;
    }
    #information p {
      display: flex;
      align-items: center;
    }
    #information svg {
      margin-left: 6px;
    }
    #information button {
      color: #f43397;
      border: 1px solid #f43397;
      background-color: #fff;
      padding: 10px 20px;
      margin-right: 15px;
      border-radius: 5px;
      font-weight: 500;
      &:hover {
        background-color: #f43397;
        color: #fff;
      }
    }
    #meesho-logo {
      display: flex;
      color: rgb(74, 74, 74);
      align-items: center;
      font-size: 14px;
    }
    #meesho-logo svg {
      margin-right: 10px;
    }
  }
`;
export { Section };
