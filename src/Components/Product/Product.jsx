import React from "react";
import { allProducts } from "../../AllProducts";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/action.js";
import {
  FaShoppingCart,
  FaStar,
  FaShopify,
  FaAngleRight,
} from "react-icons/fa";
import { Section } from "./Styled-Product";
import ratingImg from "./rating.png";
import "./product.css";
let i;
let discount = Math.floor(Math.random() * 150);
export default function Product() {
  let allImages = [
    "https://source.unsplash.com/random/?cloths",
    "https://source.unsplash.com/random/?shoes",
    "https://source.unsplash.com/random/?kids",
    "https://source.unsplash.com/random/?motivation",
    "https://source.unsplash.com/random/?nature",
  ];
  let { id } = useParams();
  let [state, setState] = React.useState("Add to Cart");
  let [image, setImage] = React.useState("");
  let cart = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  console.log(id);
  for (i = 0; i < allProducts.length; i++) {
    if (allProducts[i].id === +id) {
      break;
    }
  }
  if (cart.includes(+id)) state = "Already in the Cart";

  const clcHandler = (e) => {
    dispatch(addToCart(e.target.id));
    if (state === "Add to Cart") setState("Already in the Cart");
  };

  console.log(allProducts[i], i);
  let { img, name, soldBy, similar, sprice, aprice, rating, reviews, details } =
    allProducts[i] || allProducts[0];
  React.useEffect(() => {
    setImage(img);
    window.scrollTo(0, 0);
  }, [img]);
  return (
    <Section id="single-product">
      <article id="product-article-1">
        {allImages.map((i) => (
          <img src={i} alt="" onClick={() => setImage(i)} />
        ))}
      </article>
      <article id="product-article-2">
        <img src={image} alt="" id="main-img" />
        <p className="more">+ {Math.floor(Math.random() * 7) + 1} More</p>
        <button id={+id} onClick={clcHandler}>
          <FaShoppingCart /> {state}
        </button>
        <hr />
        <p>3 Similar products</p>
        <div>
          {similar.map((i) => (
            <img src={i} alt="" onClick={() => setImage(i)} />
          ))}
        </div>
      </article>
      <article id="product-article-3">
        <div id="price">
          <h2>{name}</h2>
          <h3 className="price">
            ₹{sprice} <span className="aprice">₹{aprice}</span>{" "}
            <span className="discount">
              {((1 - sprice / aprice) * 100).toFixed(1)}% off
            </span>
          </h3>
          <h4 className="rating">
            <span>
              {rating} <FaStar />
            </span>{" "}
            {reviews} Reviews
          </h4>

          <h5 className="firstorder">
            <img
              src="https://www.svgrepo.com/show/250311/percentage-discount.svg"
              alt=""
            />
            ₹{discount} discount on 1st order
          </h5>
          <p>Free Delivery</p>
        </div>
        <div id="size">
          <p>Select Size</p>
          <button>Free Size</button>
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
        </div>
        <div id="details">
          <p>Product Details</p>
          {details.map((i) => (
            <p>{i}</p>
          ))}
          <p>Sizes: </p>
          <p>S (Chest Size : 38 in, Length Size: 27 in)</p>{" "}
          <p>M (Chest Size : 40 in, Length Size: 27.5 in) </p>
          <p>L (Chest Size : 42 in, Length Size: 28 in)</p>
          <p>XL (Chest Size : 44 in, Length Size: 28.5 in)</p>
          <p>Country of Origin : India</p>
          <p>More Information</p>
        </div>
        <div id="soldBy">
          <p>Sold By</p>
          <article>
            <FaShopify />
            <span>{soldBy}</span>
            <button>View Shop</button>
          </article>
          <h6>
            <span>{Math.round(Math.random() * 400 + 50)}</span> Products{" "}
            <span>{Math.floor(Math.random() * 5000 + 100)}</span> Followers
          </h6>
        </div>
        <div id="rating-img">
          <p>Product Rating &amp; Reviews</p>
          <img src={ratingImg} alt="" />
        </div>
        <div id="information">
          <p>
            View All Reviews <FaAngleRight />
          </p>
          <button>Lowest Price</button>
          <button>7-day Returns</button>
          <button>Cash on Delivery</button>
        </div>
        <div id="meesho-logo">
          <svg
            width="62"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            iconsize="20"
            className="Icon-sc-1iwi4w1-0 fjCWSO"
          >
            <path fill="#fff" d="M0 0h62v24H0z"></path>
            <path
              d="M10.6 6.085a2 2 0 012-2H60a2 2 0 012 2V17.27a2 2 0 01-2 2H12.6a2 2 0 01-2-2V6.085z"
              fill="#FDE9F2"
            ></path>
            <path
              d="M27.294 7.008h-5.876v1.204h2.313v6.824h1.261V8.212h2.302V7.008zM27.278 9.611v5.425h1.195v-2.534c0-1.274.587-1.79 1.384-1.79.143 0 .298.023.398.07V9.576a.929.929 0 00-.41-.08c-.62 0-1.162.367-1.427.986h-.022v-.872h-1.118zM35.764 15.036V9.611h-1.207v3.12c0 .814-.542 1.388-1.228 1.388-.631 0-.996-.448-.996-1.285V9.611h-1.195v3.475c0 1.32.708 2.122 1.837 2.122.741 0 1.339-.367 1.627-.895h.055v.723h1.107zM39.173 15.208c1.24 0 2.08-.688 2.08-1.789 0-2.168-2.866-1.204-2.866-2.397 0-.356.266-.642.786-.642.475 0 .863.286.918.688l1.118-.241c-.188-.826-1.007-1.388-2.07-1.388-1.162 0-1.947.665-1.947 1.675 0 2.167 2.866 1.204 2.866 2.397 0 .459-.299.768-.852.768-.543 0-.985-.298-1.118-.78l-1.096.23c.255.929 1.063 1.48 2.18 1.48zM44.62 15.15c.387 0 .719-.068.896-.16l-.133-.998a1.086 1.086 0 01-.531.115c-.565 0-.841-.264-.841-1.066v-2.375h1.45V9.611h-1.45V7.88l-1.207.24v1.491h-.952v1.055h.952v2.58c0 1.412.742 1.905 1.815 1.905zM51.09 13.717l-1.008-.31c-.232.494-.664.769-1.228.769-.841 0-1.417-.62-1.527-1.525H51.3v-.31c-.022-1.87-1.162-2.902-2.59-2.902-1.538 0-2.6 1.25-2.6 2.902 0 1.64 1.117 2.867 2.733 2.867 1.051 0 1.815-.516 2.246-1.49zm-2.358-3.314c.675 0 1.262.435 1.317 1.399h-2.711c.133-.895.63-1.4 1.394-1.4zM52.165 12.33c0 1.708 1.04 2.878 2.446 2.878.697 0 1.394-.298 1.737-.998h.033v.826h1.107V7.008h-1.206v3.303c-.277-.505-.864-.872-1.65-.872-1.405 0-2.467 1.159-2.467 2.89zm1.206 0c0-1.021.564-1.801 1.483-1.801.907 0 1.46.745 1.46 1.8 0 1.044-.553 1.778-1.46 1.778-.896 0-1.483-.757-1.483-1.778z"
              fill="#F43397"
            ></path>
            <path
              d="M18.036 3.783L9.612.07a.813.813 0 00-.659 0L.53 3.783a.915.915 0 00-.53.843v7.43c0 6.214 3.538 8.89 8.958 11.239.208.09.441.09.65 0 5.42-2.35 8.957-5.025 8.957-11.24v-7.43a.915.915 0 00-.53-.842z"
              fill="#F7A8CA"
            ></path>
            <path
              d="M17.188 4.548L9.58 1.194a.735.735 0 00-.595 0L1.377 4.548a.826.826 0 00-.479.761v6.71c0 5.614 3.196 8.03 8.091 10.152a.735.735 0 00.587 0c4.895-2.122 8.09-4.538 8.09-10.152V5.31a.826.826 0 00-.478-.761z"
              fill="#F43397"
            ></path>
            <path
              d="M11.669 7.54c.906.008 1.67.327 2.3.954.636.631.95 1.384.943 2.274l-.026 4.18a.917.917 0 01-.928.9.91.91 0 01-.915-.907l.026-4.18a1.305 1.305 0 00-.413-.994 1.346 1.346 0 00-.998-.409 1.38 1.38 0 00-1.039.434c-.26.266-.387.631-.39 1l-.023 4.12a.926.926 0 01-.94.912.926.926 0 01-.928-.922l.025-4.145a1.409 1.409 0 00-.376-.986 1.388 1.388 0 00-1.035-.441 1.385 1.385 0 00-1.006.398 1.35 1.35 0 00-.416.986l-.026 4.177a.918.918 0 01-.932.904.915.915 0 01-.918-.914l.026-4.164a3.142 3.142 0 01.804-2.1c.676-.74 1.51-1.109 2.479-1.102.925.008 1.715.334 2.347.997.651-.66 1.434-.975 2.359-.972z"
              fill="#fff"
            ></path>
          </svg>
          <span>Best Quality Products from Trusted Supplier</span>
        </div>
      </article>
    </Section>
  );
}
