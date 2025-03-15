import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../helper/endpoint";

export default function UseCategory() {
  const [category, setCategory] = useState([]);

  const getCategory = async () => {
    try {
      const res = await axios.get(`${BASE_URL.API}/products/categories`);
      setCategory(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return { category, getCategory };
}
