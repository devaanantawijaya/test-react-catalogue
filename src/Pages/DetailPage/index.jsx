import { Link, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import UseDetailProduct from "../../Hook/useDetailProduct";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";

export default function DetailProductPage() {
  const { id } = useParams();
  const { detailProduct, getDetailProduct } = UseDetailProduct();

  useEffect(() => {
    if (id) getDetailProduct(id);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex px-10 mt-24 mb-5 gap-x-2">
        <Link to="/" className="font-bold hover:text-green-900">
          Home
        </Link>
        <h1>/</h1>
        <h1 className="font-bold">{detailProduct.title}</h1>
      </div>
      <div className="grid grid-cols-2 px-10 gap-x-10">
        <div>
          <img
            src={detailProduct.images?.[0]}
            alt={detailProduct.title}
            className="border-2 border-gray-500 rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="mb-5 text-4xl font-bold">{detailProduct.title}</h1>
            <h1 className="mb-5">{`Brand: ${detailProduct.brand}`}</h1>
            <p className="mb-5">{detailProduct.description}</p>
            <div className="flex items-center mb-5 gap-x-2">
              <div className="flex items-center gap-x-1">
                <p className="font-bold">{detailProduct.stock}K+</p>
                <p className="text-gray-500">Sold</p>
              </div>
              <div className="text-xs">●</div>
              <div className="flex items-center gap-x-1">
                <FaStar className="text-yellow-600" />
                <div className="flex items-center gap-x-1">
                  <p>{detailProduct.rating}</p>
                  <p className="text-gray-500">{`(${detailProduct.minimumOrderQuantity} Reviews)`}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-3">
              <h1 className="text-5xl font-bold">${detailProduct.price}</h1>
              <h1 className="text-xl text-red-600 line-through">
                ${detailProduct.discountPercentage + detailProduct.price}
              </h1>
            </div>
          </div>
          <button className="py-4 text-xl font-semibold text-white bg-green-900 rounded-lg hover:bg-green-950">+ Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
