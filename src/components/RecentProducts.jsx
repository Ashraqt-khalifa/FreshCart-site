import React, { useEffect, useState } from "react";
import style from "./RecentProducts.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function RecentProducts() {
  const [products, setproducts] = useState([]);

  function getProducts() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products`)
      .then((res) => {
        setproducts(res.data.data);
      })
      .catch((res) => {});
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="row flex  flex-wrap justify-center text-left">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="w-1/6">
              <div className="product p-3 my-2">
              <Link to={`/productdetails/${product.id}/${product.category.name}`}>
              <img src={product.imageCover} className="w-full" alt="" />
                  <h3 className="text-emerald-600">{product.category.name}</h3>
                  <h3 className=" mb-2 font-semibold">
                    {product.title.split(" ").slice(0, 2).join(" ")}
                  </h3>
                  <div className="flex justify-between">
                    <span>{product.price} EGP</span>
                    <span>
                      {" "}
                      <i className="fas fa-star text-yellow-400"></i>
                      {product.ratingsAverage}
                    </span>
                  </div>
                </Link>

                <button className="btn">Add to card</button>
              </div>
            </div>
          ))
        ) : (
          <span className="loader"></span>
        )}
      </div>
    </>
  );
}
