import React from "react";
import { allProducts } from "../../AllProducts";
import { useParams, useNavigate } from "react-router-dom";

export default function Product() {
  let { id } = useParams();
  window.scrollTo(0, 0);
  let i;
  console.log(id);
  for (i = 0; i < allProducts.length; i++) {
    if (allProducts[i].id === +id) {
      break;
    }
  }
  console.log(allProducts[i]);
  let { img, name, soldBy, similar, sprice, aprice, rating, reviews, details } =
    allProducts[i];
  return (
    <section id="single-product">
      <article>
        <div>
          {similar.map((i) => (
            <img src={i} alt="" />
          ))}
        </div>
        <img src={img} alt="" />
      </article>
      <article>
        <div>
          <p className="product-name">{name}</p>
          <p className="mkt">Sold By: {soldBy}</p>
          <p className="price">
            ₹{sprice} <span className="aprice">₹{aprice}</span>{" "}
            <span className="discount">
              {((1 - sprice / aprice) * 100).toFixed(1)}% off
            </span>
          </p>

          <p className="firstorder">
            <img
              src="https://www.svgrepo.com/show/250311/percentage-discount.svg"
              alt=""
            />
            ₹{Math.floor(Math.random() * 150)} discount on 1st order
          </p>
          <p className="rating">
            <span>
              {rating}{" "}
              <svg
                width="15"
                height="15"
                viewBox="0 0 20 20"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
                ml="4"
                iconsize="10"
                className="Icon-sc-1iwi4w1-0 cePfda"
              >
                <g clip-path="url(#star_svg__clip0)">
                  <path
                    d="M19.54 6.85L13.62 5.5 10.51.29a.596.596 0 00-1.02 0L6.38 5.5.46 6.85a.599.599 0 00-.31.98l3.99 4.57-.55 6.04c-.02.21.07.41.24.54.17.12.39.15.59.07L10 16.64l5.58 2.39c.08.03.16.05.23.05h.01c.3.01.6-.26.6-.6 0-.06-.01-.12-.03-.17l-.54-5.93 3.99-4.57c.14-.16.18-.38.12-.58a.544.544 0 00-.42-.38z"
                    fill="#666"
                  ></path>
                </g>
                <defs>
                  <clipPath id="star_svg__clip0">
                    <path fill="#fff" d="M0 0h20v19.08H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </span>{" "}
            {reviews} Reviews
          </p>
        </div>
        <div>
          <p>Select Size</p>
          <button>Free Size</button>
        </div>
        <div>
          {details.map((i) => (
            <p>{i}</p>
          ))}
        </div>
      </article>
    </section>
  );
}
