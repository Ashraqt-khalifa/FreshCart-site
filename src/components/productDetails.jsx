import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Slider from "react-slick";


export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [relatedProducts, setrelatedProducts] = useState([]);

  let { id, category } = useParams();


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };



  function getProduct(id) {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }

  function getAllProduct() {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`).then((res) => {
      let related = res.data.data.filter(
        (product) => product.category.name == category
      );
      setrelatedProducts(related);
    });
  }

  useEffect(() => {
    getProduct(id);
    getAllProduct();
  }, [id, category]);

  return (
    <>
      <div className="row items-center">
        <div className="w-1/4">
        <Slider {...settings}>
{product?.images.map((src) => <img src ={src} className="w-full" />)}
        </Slider>

        </div>

        <div className="w-3/4 p-4 text-left">
          <h3 className="font-semibold text-2xl text-left">{product?.title}</h3>
          <h4 className="text-gray-500 my-4 text-left">
            {product?.description}
          </h4>
          <h4 className="text-gray-700 text-left">{product?.category?.name}</h4>

          <div className="flex justify-between my-4">
            <span className="text-left">{product?.price} EGP</span>
            <span className="text-left">
              <i className="fas fa-star text-yellow-400"></i>
              {product?.ratingsAverage}
            </span>
          </div>

          <button className="btn">Add to cart</button>
        </div>
      </div>

      <div className="row flex  flex-wrap justify-center text-left">
        {relatedProducts.length > 0 ? (
          relatedProducts.map((product) => (
            <div key={product.id} className="w-1/6">
              <div className="product p-3 my-2">
                <Link
                  to={`/productdetails/${product.id}/${product.category.name}`}
                >
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
