import React from "react";
import { allProducts } from "../../AllProducts";
import { useParams, useNavigate } from "react-router-dom";

export default function Product() {
  let { id } = useParams();
  let i;
  console.log(id);
  for (i = 0; i < allProducts.length; i++) {
    if (allProducts[i].id === +id) {
      break;
    }
  }
  console.log(allProducts[i]);
  return (
    <section>
      <div>
        <img src={allProducts[i].img} alt="" />
      </div>
    </section>
  );
}
