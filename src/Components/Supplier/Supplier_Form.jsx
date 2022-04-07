import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import "./Supplier_Form.css";
export default function Form() {
  return (
    <div className="supplier_form_main_div">
      <Box component="form" noValidate autoComplete="off">
        <div>
          <h2>&nbsp; &nbsp; Welcome to Meesho</h2>
          <br />
          &nbsp; &nbsp; &nbsp; Create your account to start selling
          <br />
          <br />
        </div>
        <div className="supplier_form_text_field">
          <TextField
            required
            id="outlined-error"
            label="Mobile Number"
            sx={{ m: 1, width: "30ch" }}
            defaultValue="Mobile Number"
          />
          <TextField
            required
            id="outlined"
            sx={{ m: 1, width: "15ch" }}
            label="Send OTP"
          />
        </div>
        <div className="supplier_form_text_field">
          <TextField
            id="outlined-search"
            label="Enter OTP"
            sx={{ m: 1, width: "47ch" }}
            type="search"
          />
        </div>
        <div className="supplier_form_text_field">
          <TextField
            id="outlined-search"
            label="Email ID"
            sx={{ m: 1, width: "47ch" }}
            type="search"
          />
        </div>
        <div className="supplier_form_text_field">
          <TextField
            id="standard-adornment-password"
            label="Set Password"
            sx={{ m: 1, width: "47ch" }}
            type="search"
          />
        </div>
        <div className="supplier_form_passwrd_field_info">
          <div>
            <ul className="StartSelling_unorderedlist">
              <li>Minimum 8 characters</li>
              <li>1 Special Character (@#$%!^&*)</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>1 Capital letter (A-Z)</li>
              <li>1 Number</li>
            </ul>
          </div>
        </div>
      </Box>
      <div className="supplier_form_space"> &nbsp;</div>
      <div className="supplier_form_checkbox">
        <div>
          <Checkbox defaultChecked color="secondary" size="small" />I want to
          receive important updates on{" "}
        </div>
        <div className="supplier_form_whasapp_image">
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        </div>
      </div>
      <Button
        className="supplier_create_account"
        variant="contained"
        sx={{ m: 1, width: "50ch" }}
      >
        Create Account
      </Button>
      <br />
      <div className="supplier_form_last_text">
        &nbsp;&nbsp; &nbsp;&nbsp;By clicking you agree to our{" "}
        <span className="pink-text">Terms & Conditions</span>
        and <span className="pink-text"> Privacy Policy</span>
      </div>
    </div>
  );
}
