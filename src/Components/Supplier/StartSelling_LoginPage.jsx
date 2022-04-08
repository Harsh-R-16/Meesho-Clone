import React from "react";
import meesho from "./meesho_full_background.jpg";
import "./StartSelling_LoginPage.css";
import { useState } from "react";
const StartSellingLogin = () => {
  let success = "Login Successful!";
  let fail = "Login Failed Please Enter the Correct Details";
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const myFunction = () => {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    let pa = localStorage.getItem("Password").replace(/"/g, "");
    alert(pass == pa && mail == email ? success : fail);
  };
  return (
    <div className="StartSelling_Main_Division">
      <div className="StartSelling_Login_First_Div_Meesho_Background">
        <img
          src={meesho}
          alt=""
          className="StartSelling_Login_First_Div_image"
        ></img>
      </div>
      <div className="StartSellingLoginForm">
        <div className="StartSellingLoginForm_Box">
          <form onSubmit={handleSubmit}>
            <h2>Login to your supplier panel</h2>
            <br />
            <input
              type="email"
              className="StartSellingLoginForm_Email"
              placeholder="Email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            <br />
            <input
              type="password"
              id="myInput"
              className="StartSellingLoginForm_Email"
              placeholder="Password"
              value={pass}
              onChange={event => setPass(event.target.value)}
            />
            <br />
            <input type="checkbox" onClick={myFunction} />
            Show Password
            <br />
            <br />
            <br />
            <div className="LoginForm_Submission">
              <div className="Blue-colour-text">Forgot Password ?</div>
              <button className="Login_FormSubmit">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default StartSellingLogin;
