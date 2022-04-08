import React from "react";
import BasicModal from "./BasicModal";
import { useDispatch } from "react-redux";
import { emptyCart } from "../../Redux/action";

export default function Summary() {
  let dispatch = useDispatch();
  dispatch(emptyCart([]));
  return (
    <div>
      <BasicModal />
      <h1 style={{ textAlign: "center", margin: "20px 0 250px" }}>
        Order Placed
      </h1>
    </div>
  );
}
