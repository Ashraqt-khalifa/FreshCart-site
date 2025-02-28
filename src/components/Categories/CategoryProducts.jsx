import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CategoryProducts() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products?category=${id}`)
      .then((res) => {
        setProducts(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching category products:", err);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-emerald-600">Category Products</h2>

      {loading ? (
        <p className="loader"></p>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-3 text-center shadow-md bg-white">
              <img src={product.imageCover} alt={product.title} className="w-full h-32 object-cover mb-2" />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p>{product.price} EGP</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products available</p>
      )}
    </div>
  );
}
