import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increaseStep } from "../../Redux/action";
function Payment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(increaseStep());
    navigate("/checkout/summary");
  };
  return <div>Payment</div>;
}

export default Payment;
