import React from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import { useDispatch } from "react-redux";
import { addName } from "../../Redux/action.js";

export default function Login() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    let name = e.target.elements[1].value;
    dispatch(addName(name));
    localStorage.setItem("name", name);
    navigate("/checkout/cart");
  };
  return (
    <section id="login-page">
      <div>
        <img
          src="https://images.meesho.com/images/marketing/1648820929975.jpeg"
          alt=""
        />
        <h2>Create Account</h2>
        <form action="" onSubmit={submitForm}>
          <label htmlFor="emailId">Email ID:</label>
          <input
            type="text"
            placeholder="enter your email address"
            id="emailId"
            onClick={(e) => (e.target.value = "harsh.gajera17@gmail.com")}
          />
          <label htmlFor="fname">First Name:</label>
          <input
            type="text"
            placeholder="enter your first name"
            id="fname"
            required
            onClick={(e) => (e.target.value = "Harsh")}
          />
          <label htmlFor="lname">Last Name:</label>
          <input
            type="text"
            placeholder="enter your last name"
            id="lname"
            onClick={(e) => (e.target.value = "Gajera")}
          />
          <label htmlFor="otp">Enter OTP:</label>
          <input
            type="text"
            placeholder="enter otp"
            id="otp"
            onClick={(e) =>
              (e.target.value = localStorage.getItem("otp")
                ? localStorage.getItem("otp")
                : 123456)
            }
          />
          <button>Verify</button>
        </form>
      </div>
    </section>
  );
}
