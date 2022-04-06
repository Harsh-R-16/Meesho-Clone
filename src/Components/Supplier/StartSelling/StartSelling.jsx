import React from "react";
import Form from "./SupplierForm (2)";
import "./StartSelling.css";
import Button from "@mui/material/Button";

const StartSelling = () => {
  return (
    <div className="Supplier_main_div">
      <div className="supplier_first_div">
        <div className="supplier_meesho_logo"></div>
        <div className="empty_supplier_div"></div>
        <div className="supplier_login_button">
          <Button
            variant="outlined"
            size="large"
            href="#outlined-buttons"
            color="secondary"
          >
            Login
          </Button>
        </div>
      </div>
      <div className="suplier_second_div">
        <div className="supplier_form_div">
          <Form />
        </div>
        <div className="suplier_second_div_second_div">
          Grow your business faster by selling on Meesho
          <div className="supplier_second_div_second_div_first">
            <div className="ssdsd_first">
              <div className="ssdsd_first_image1"></div>
              <div>
                <h2>4 lakh+</h2>
                <div>Suppliers are selling</div>
                <div>commission-free</div>
              </div>
            </div>
            <div className="ssdsd_second">
              <div className="ssdsd_first_image2"></div>
              <div>
                <h2>27,000 +</h2>
                <div>Pincodes supported for delivery</div>
              </div>
            </div>
          </div>
          <div className="supplier_second_div_second_div_first">
            <div className="ssdsd_first">
              <div className="ssdsd_first_image3"></div>
              <div>
                <h2>10 Crore+</h2>
                <div>Customers buy across India</div>
              </div>
            </div>
            <div className="ssdsd_second">
              <div className="ssdsd_first_image4"></div>
              <div className="ssdsd_first_image4_text">
                <h2>700 +</h2>
                <div>Categories to sell</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="supplier_background_image">
        <div className="supplier_background_image_text">
          All you need to sell on Meesho is
          <ul>
            <li>GSTIN</li>
            <li>Bank Account</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export { StartSelling };
