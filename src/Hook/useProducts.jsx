import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../helper/endpoint";

export default function UseProducts() {
  const [products, setProducts] = useState([]);
  const [loadingProduts, setLoadingProducts] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("asc");
  const [query, setQuery] = useState("");
  const limit = 9;

  const getProducts = async () => {
    setLoadingProducts(true);
    try {
      const res = await axios.get(
        `${BASE_URL.API}/products${
          selectedCategory
            ? `/category/${selectedCategory}?`
            : `/search?q=${query.length > 0 ? `${query}` : ""}&`
        }limit=${limit}&skip=${(page - 1) * limit}${
          sortBy && `&sortBy=${sortBy}&order=${order}`
        }`
      );

      // const res = await axios.get(
      //   `https://dummyjson.com/products/search?q=${query}`
      // );
      setProducts(res.data.products);
      setTotalPage(res.data.total);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingProducts(false);
    }
  };
  return {
    products,
    getProducts,
    page,
    setPage,
    loadingProduts,
    totalPage,
    limit,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    order,
    setOrder,
    query,
    setQuery,
  };
}
