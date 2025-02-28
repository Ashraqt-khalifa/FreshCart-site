import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://ecommerce.routemisr.com/api/v1/categories")
      .then((res) => {
        setCategories(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
        setLoading(false);
      });
  }, []);

  function getCategoryProducts(categoryId) {
    axios.get("https://ecommerce.routemisr.com/api/v1/products").then((res) => {
      let related = res.data.data.filter(
        (product) => product.category._id === categoryId
      );
      setFilteredProducts(related);
    });
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-emerald-600">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading ? (
          <span className="loader"></span>
        ) : categories.length > 0 ? (
          categories.map((category) => (
            <div
              key={category._id}
              className="category border p-3 text-center shadow-md bg-white relative overflow-hidden rounded-lg"
            >
              <Link to={`/categoryproducts/${category._id}`}>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-32 object-cover mb-2 rounded-md cursor-pointer"
                />
              </Link>
              <h3
                className="text-lg font-semibold"
              >
                {category.name}
              </h3>

              <Link to={`/categoryproducts/${category._id}`}>
                <button className="btn bg-emerald-600 text-white px-4 py-2 mt-2 rounded-md hover:bg-emerald-700 transition">
                  Show Products
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No categories found</p>
        )}
      </div>

      {filteredProducts.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold my-4 text-blue-600">
            Products in this Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                className="border p-3 text-center shadow-md bg-white rounded-lg"
              >
                <img
                  src={product.imageCover}
                  alt={product.title}
                  className="w-full h-40 object-cover mb-2 rounded-md"
                />
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-700 font-medium">{product.price} EGP</p>
                <Link to={`/product/${product._id}`}>
                  <button className="btn bg-blue-600 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-700 transition"onClick={() => getCategoryProducts(category._id)}>
                  {category.name}
                    View Product
                  </button>{" "}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
