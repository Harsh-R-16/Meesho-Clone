import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import "./modal.css";
import { useDispatch } from "react-redux";
import { emptyCart } from "../../Redux/action";

const style = {
  position: "absolute",
  top: "53%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const handleClose = () => {
    window.scrollTo(0, 0);
    navigate("/");
    dispatch(emptyCart([]));
  };
  window.scrollTo(0, 0);
  return (
    <div id="modal-box" onClick={handleClose}>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Order Placed
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Thank you for ordering from Meesho
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Order Id: #meesho1603200
        </Typography>
      </Box>
    </div>
  );
}
