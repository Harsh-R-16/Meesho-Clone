import React from "react";
import "./cart.css";
import { useSelector } from "react-redux";
import { allProducts } from "../../AllProducts";
let arr = [
  Math.floor(Math.random() * 20) + 7,
  Math.floor(Math.random() * 20) + 7,
  Math.floor(Math.random() * 20) + 7,
  Math.floor(Math.random() * 20) + 7,
  Math.floor(Math.random() * 20) + 7,
];
export default function Cart() {
  let cart = useSelector((state) => state.cart);
  let res = [];
  for (let i = 0; i < allProducts.length; i++) {
    if (cart.includes(allProducts[i].id)) {
      let { img, name, soldBy, aprice, sprice } = allProducts[i];
      res.push({
        img,
        name,
        soldBy,
        aprice,
        sprice,
        q: 1,
        taprice: aprice,
        tsprice: sprice,
      });
    }
  }
  let [cartData, setCartData] = React.useState(res);
  let countHandler = (e, type) => {
    let newData = [...cartData];
    let ele = newData[+e.target.parentElement.id];
    if (type === "inc") {
      ele.q++;
      ele.taprice += ele.aprice;
      ele.tsprice += ele.sprice;
    } else {
      if (ele.q === 1) return;
      ele.q--;
      ele.taprice -= ele.aprice;
      ele.tsprice -= ele.sprice;
    }

    setCartData(newData);
    console.log(newData);
  };

  return (
    <main id="cart-main">
      <section>
        <h1>Order Summary</h1>
        <h2>
          Cart <span id="cart-line">| </span>
          <span id="total-items">{cartData.length} Items</span>
        </h2>
        {cartData.map((i, index) => (
          <div key={index}>
            <img src={i.img} alt="" />
            <h3>{i.name}</h3>
            <p>Only {arr[index % 5]} Left In Stock</p>
            <h4>Sold By: {i.soldBy}</h4>
            <h5>
              <span>₹{i.sprice}</span> ₹{i.aprice}
            </h5>
            <p>Delivery between APRIL 13 - APRIL 15</p>
            <div id={index}>
              <p>Quality: </p>
              <button onClick={(e) => countHandler(e, "dec")}>-</button>
              <p>{i.q}</p>
              <button onClick={(e) => countHandler(e, "inc")}>+</button>
            </div>
            <button
              id={index}
              onClick={() => {
                let newData = [...cartData];
                newData.splice(index, 1);
                setCartData(newData);
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </section>
      <section>
        <div>
          <p id="promocode-para">APPLY PROMOCODE / MEESHO SUPERCASH</p>
          <label htmlFor="coupen-code">Apply Promo Code: </label>
          <select name="code" id="coupen-code">
            <option value="">Select a code</option>
            <option value="">MASAI30</option>
            <option value="">CASHBACK100</option>
          </select>
        </div>
        <div id="payment-details">
          <p>PAYMENT DETAILS</p>
          <p>
            MRP Total:{" "}
            <span>
              Rs.{cartData.reduce((acc, cur) => acc + cur.taprice, 0)}
            </span>
          </p>
          <p>
            Meesho Discount:{" "}
            <span>
              Rs.
              {cartData.reduce((acc, cur) => acc + cur.taprice, 0) -
                cartData.reduce((acc, cur) => acc + cur.tsprice, 0)}
            </span>
          </p>
          <p>
            Total Amount:{" "}
            <span>
              Rs.
              {cartData.reduce((acc, cur) => acc + cur.tsprice, 0)}
            </span>
          </p>
          <p>
            Total Amount (MASAI30 Applied):{" "}
            <span>
              RS.{" "}
              {Math.round(
                cartData.reduce((acc, cur) => acc + cur.tsprice, 0) * 0.7
              )}
            </span>
          </p>
          <button>
            PROCEED TO PAY Rs.{" "}
            {Math.round(
              cartData.reduce((acc, cur) => acc + cur.tsprice, 0) * 0.7
            )}
          </button>
        </div>
        <div>
          <p style={{ fontSize: "11px", lineHeight: "145%", color: "#888" }}>
            Meesho is a technology platform to facilitate transaction of
            business. The products and services are offered for sale by the
            sellers. The user authorizes the delivery personnel to be his agent
            for delivery of the goods. For details read{" "}
            <span>Terms &amp; Condition.</span>
          </p>
        </div>
      </section>
    </main>
  );
}
