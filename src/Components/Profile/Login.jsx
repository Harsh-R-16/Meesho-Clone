import React from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import { useDispatch } from "react-redux";
import { addName } from "../../Redux/action.js";

export default function Login() {
  let [data, setData] = React.useState({
    email: "harsh.gajera17@gmail.com",
    fname: "Harsh",
    lname: "Gajera",
    otp: localStorage.getItem("otp"),
  });
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    let name = e.target.elements[1].value;
    dispatch(addName(name));
    localStorage.setItem("name", name);
    navigate("/checkout/cart");
  };
  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
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
            id="email"
            value={data.email}
            onChange={changeHandler}
          />
          <label htmlFor="fname">First Name:</label>
          <input
            type="text"
            placeholder="enter your first name"
            id="fname"
            required
            value={data.fname}
            onChange={changeHandler}
          />
          <label htmlFor="lname">Last Name:</label>
          <input
            type="text"
            placeholder="enter your last name"
            id="lname"
            value={data.lname}
            onChange={changeHandler}
          />
          <label htmlFor="otp">Enter OTP:</label>
          <input
            type="text"
            placeholder="enter otp"
            id="otp"
            value={data.otp}
            onChange={changeHandler}
          />
          <button>Verify</button>
        </form>
      </div>
    </section>
  );
}
