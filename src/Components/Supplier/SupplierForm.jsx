import React from "react";
import { FaLock } from "react-icons/fa";
import styled from "styled-components";
import img from "./form-img.png";

export default function SupplierForm() {
  let [inp, setInp] = React.useState("");
  const inpHandler = (e) => {
    if (inp === "") {
      setInp("+91 - " + e.target.value);
      return;
    }
    setInp(e.target.value);
  };
  console.log(inp.length);
  return (
    <>
      <Section>
        <article id="first-article">
          <form action="">
            <h1 id="selling-form-h1">Welcome to Meesho</h1>
            <p>Create your account to start selling</p>
            <div id="selling-form-inp">
              <input
                type="text"
                placeholder="Mobile Number"
                value={inp}
                onChange={inpHandler}
                maxLength={16}
              />
              <button className={inp.length > 15 ? "active" : ""}>
                Send OTP
              </button>
            </div>
            <input type="text" placeholder="Enter OTP" className="input-text" />
            <input type="text" placeholder="Email ID" className="input-text" />
            <div id="selling-form-password">
              <input type="password" placeholder="Set Password" />
              <FaLock />
            </div>
            <ul>
              <li>Minimum 8 Characters</li>
              <li>1 Special Characters (@#$%!^&amp;*)</li>
              <li>1 Capital letter</li>
              <li>1 Number</li>
            </ul>
            <input type="checkbox" name="box" id="box" />{" "}
            <label htmlFor="box">
              I want to receive important updates on <span>Whatsapp</span>
            </label>
            <button>Create Account</button>
            <p>
              By clicking you agree to our <span>Terms &amp; Conditions</span>{" "}
              and <span>Privacy Policy</span>
            </p>
          </form>
        </article>
        <article id="second-article">
          <h3>Grow your business faster by selling on Meesho</h3>
          <img src={img} alt="" />
          <h4>All you need to sell on Meesho is </h4>
          <p>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(56, 185, 122)", fontSize: "20px" }}
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
            </svg>
            GSTIN
          </p>
          <p>
            {" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(56, 185, 122)", fontSize: "20px" }}
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
            </svg>
            Bank Account
          </p>
        </article>
      </Section>
      <img
        src="https://supplier.meesho.com/panel/v2/new/static/c1763d1ca9a9043ec6abf7c8b0802a9f.png"
        alt=""
        id="footer-image"
      />
    </>
  );
}

let Section = styled.section`
  display: flex;
  position: relative;
  justify-content: space-evenly;
  padding: 50px;
  flex-wrap: wrap;
  + #footer-image {
    height: 150px;
    width: 99vw;
  }
  article {
    width: 420px;
    padding: 10px;
    margin: 0 50px;
    #selling-form-h1 {
      font-size: 28px;
      + p {
        font-size: 14.5px;
        margin: 8px 0 15px;
      }
    }
    #selling-form-inp {
      display: flex;
      margin: 12px 0;
      button {
        color: #f43397;
        background-color: #fff;
        border: 1px solid #f43397;
        padding: 7px 10px;
      }
    }
    #selling-form-inp input {
      flex-grow: 1;
      margin-right: 15px;
      padding: 7px 9px;
    }
    .input-text {
      width: 94.6%;
      padding: 7px 9px;
      margin: 12px 0;
    }
    #selling-form-password {
      border: 1px solid #000;
      /* width: 79.2%; */
      padding: 8px 9px;
      margin: 12px 0;
      display: flex;
      input {
        border: none;
        flex-grow: 1;
        &:focus {
          outline: none;
        }
      }
    }
  }
  ul {
    font-size: 13px;
    padding-left: 20px;
    margin-bottom: 12px;
    li {
      margin: 7px 0;
    }
  }

  #box + label {
    font-size: 14px;
    span {
      color: #f43397;
      font-weight: bold;
    }
  }
  label + button {
    margin: 50px 0 15px;
    width: 100%;
    font-weight: 500;
    padding: 13px 0;
    color: white;
    background-color: #f43397;
    border: none;
    + p {
      font-size: 10px;
      text-align: center;
      span {
        color: #f43397;
        font-weight: 500;
      }
    }
  }
  .active {
    background-color: #f43397 !important;
    color: white !important;
  }
  img {
    width: 140%;
    margin: 50px 0;
  }
  h4 {
    margin: 15px 0;
  }
  p > svg {
    margin-right: 10px;
    transform: translateY(4px);
  }
`;
