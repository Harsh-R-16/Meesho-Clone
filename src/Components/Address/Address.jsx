import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increaseStep } from "../../Redux/action";
import PhoneIconOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "./address.css";
let data = [
  "Harsh Gajera",
  7046581170,
  "B-107, XYZ Complex",
  "Kheda Road",
  387411,
  "Kheda",
  "Gujarat",
  "Near Busstand",
];
export default function Address() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(increaseStep());
    navigate("/checkout/payment");
  };

  return (
    <section id="address-section">
      <form action="" onSubmit={handleSubmit}>
        <h1>ADD ADDRESS</h1>
        <hr />
        <div>
          <PhoneIconOutlinedIcon
            sx={{ color: "#E93599", marginRight: "10px" }}
          />
          <h2>Contact Details</h2>
        </div>
        <input
          type="text"
          placeholder="Name"
          id="0"
          onClick={(e) => {
            e.target.value = data[+e.target.id];
          }}
        />
        <input
          type="text"
          placeholder="Phone Number"
          id="1"
          onClick={(e) => {
            e.target.value = data[+e.target.id];
          }}
        />
        <div>
          <LocationOnOutlinedIcon
            sx={{ color: "#E93599", marginRight: "10px" }}
          />
          <h2>Address Details</h2>
        </div>
        <input
          type="text"
          placeholder="House no./ Building Name"
          id="2"
          onClick={(e) => {
            e.target.value = data[+e.target.id];
          }}
        />
        <input
          type="text"
          placeholder="Road Name/ Area/ Colony"
          id="3"
          onClick={(e) => {
            e.target.value = data[+e.target.id];
          }}
        />
        <input
          type="text"
          placeholder="Pincode"
          id="4"
          onClick={(e) => {
            e.target.value = data[+e.target.id];
          }}
        />
        <input
          type="text"
          placeholder="City"
          id="5"
          onClick={(e) => {
            e.target.value = data[+e.target.id];
          }}
        />
        <input
          type="text"
          placeholder="State"
          id="6"
          onClick={(e) => {
            e.target.value = data[+e.target.id];
          }}
        />
        <input
          type="text"
          placeholder="Nearby Location (optional)"
          id="7"
          onClick={(e) => {
            e.target.value = data[+e.target.id];
          }}
        />
        <button>Deliver to this Address</button>
      </form>
      <div>
        <h1>Price Details</h1>
        <p>
          Product Charges<span>₹{localStorage.getItem("total")}</span>
        </p>
        <p>
          Delivery Charges<span>+ ₹0</span>
        </p>
        <p>
          COD Charges<span>+ ₹0</span>
        </p>
        <p>
          1st Order Discount<span>- ₹50</span>
        </p>
        <hr />
        <h2>
          Order Total <span>₹{localStorage.getItem("total") - 50}</span>
        </h2>
      </div>
    </section>
  );
}
