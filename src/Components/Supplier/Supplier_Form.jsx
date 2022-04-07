import React from "react";
import "./Supplier_Form.css";
import { useState } from "react";
export default function Form() {
  let check = "check the form again! Some credentials are missing";
  let done = "form created!";
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (password && number) {
      localStorage.setItem("Number", JSON.stringify(number));
      localStorage.setItem("Password", JSON.stringify(password));
      localStorage.setItem("Email", JSON.stringify(email));
    }
    alert(number !== "" ? done : check);
    setNumber("");
    setPassword("");
  };
  function generateOTP() {
    var digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    setOtp(OTP);
  }
  return (
    <div className="supplier_form_main_div">
      <div>
        <h2>&nbsp; &nbsp; Welcome to Meesho</h2>
        <br />
        &nbsp; &nbsp; &nbsp; Create your account to start selling
        <br />
        <br />
      </div>
      <form className="SampleForm_MainBlock" onSubmit={handleSubmit}>
        <div className="SmapleForm_common_fields">
          <input
            type="number"
            placeholder="Mobile Number"
            className="SamleForm_MobileNumber"
            value={number}
            onChange={event => setNumber(event.target.value)}
          />
          Get Otp:
          <input type="checkbox" onClick={generateOTP} />
        </div>
        <br />
        <br />
        <div className="SmapleForm_common_fields">
          <input
            type="number"
            placeholder="Enter OTP"
            className="SamleForm_enterOTP"
            value={otp}
          />
        </div>
        <br />
        <br />
        <div className="SmapleForm_common_fields">
          <input
            type="email"
            placeholder="Email"
            className="SamleForm_email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>
        <br />
        <br />
        <div className="SmapleForm_common_fields">
          <input
            type="password"
            placeholder="Enter Password"
            className="SamleForm_password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <div className="supplier_form_space"> &nbsp;</div>
        <div className="supplier_form_checkbox">
          <div>
            <input type="checkbox" className="SampleForm_checkBox" />
            receive important updates on{" "}
          </div>
          <div className="supplier_form_whasapp_image">
            &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          </div>
        </div>
        <div className="SmapleForm_common_fields">
          <button type="submit" className="SampleForm_submitButton">
            Create Account
          </button>
        </div>
        z
        <br />
        <div id="supplier_form_last_text">
          &nbsp;&nbsp; &nbsp;&nbsp;By clicking you agree to our{" "}
          <span className="pink-text">Terms & Conditions</span>
          and <span className="pink-text"> Privacy Policy</span>
        </div>
      </form>
    </div>
  );
}
