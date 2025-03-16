import axios from "axios";
import { useState } from "react";

export default function UseDetailProduct() {
  const [detailProduct, setDetailProduct] = useState({});

  const getDetailProduct = async (id) => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      setDetailProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return { detailProduct, getDetailProduct };
}
