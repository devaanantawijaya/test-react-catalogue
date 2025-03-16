import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import UseProducts from "../../Hook/useProducts";
import UseCategory from "../../Hook/useCategory";
import { IoIosSearch } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HomePage() {
  const {
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
  } = UseProducts();
  const { category, getCategory } = UseCategory();
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    if (setTrigger) {
      getProducts();
      setTrigger(false);
    }
  }, [trigger, page, selectedCategory, sortBy, order]);

  useEffect(() => {
    getCategory();
  }, []);

  const MaxPages = Math.ceil(totalPage / limit);

  function generatePageNumbers(currentPage, totalPage) {
    const pages = [];

    // Tambahkan halaman pertama
    pages.push(1);

    // Tambahkan titik jika halaman sekarang lebih dari 3
    if (currentPage > 2) pages.push("...");

    // Tambahkan 2 halaman sebelum dan sesudah halaman aktif
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPage - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }

    // Tambahkan titik jika halaman sekarang lebih dari totalPage - 3
    if (currentPage < totalPage - 2) pages.push("...");

    // Tambahkan halaman terakhir
    if (totalPage !== 1) pages.push(totalPage);

    return pages;
  }

  return (
    <div>
      <Navbar />

      {/* Fitur Filter, Sort, Search */}
      <div className="items-center justify-between px-5 py-2 mx-10 mt-24 border-2 md:flex my-7 rounded-xl bg-slate-100">
        {/* Search Mobile */}
        <div className="block pb-2 md:pb-0 md:hidden">
          <div className={`flex items-center gap-x-2 `}>
            <button
              className="p-1 bg-white border-2 rounded-lg hover:text-white hover:bg-green-900 hover:border-green-900"
              disabled={query.length === 0}
              onClick={() => {
                setTrigger(true);
                setSelectedCategory("");
              }}
            >
              <IoIosSearch className="text-2xl" />
            </button>
            <div className="relative">
              <input
                type="text"
                placeholder="Find your perfect item"
                className="w-full px-5 py-1 border-2 rounded-xl"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {/* Tombol "X" untuk clear input */}
              {query.length > 0 && (
                <button
                  className="absolute inset-y-0 text-gray-500 right-3 hover:text-red-500"
                  onClick={() => {
                    setQuery("");
                    setTrigger(true);
                  }}
                >
                  ✖
                </button>
              )}
            </div>

            <button
              className="px-3 py-1 bg-white border-2 rounded-lg hover:text-white hover:bg-green-900 hover:border-green-900"
              onClick={() => {
                setQuery("");
                setSelectedCategory("");
                setSortBy("");
                setOrder("");
                setPage(1);
                setTrigger(true);
              }}
            >
              Reset
            </button>
          </div>
        </div>

        {/* Filter Category dan Sort */}
        <div className="flex justify-center md:justify-start md:gap-x-5 gap-x-2">
          <select
            name="category"
            value={selectedCategory}
            className="p-2 text-sm border border-gray-300 rounded-md appearance-none bg-slate-100"
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setQuery("");
              setTrigger(true);
            }}
          >
            <option value="">All Category</option>
            {category.map((item) => (
              <option key={item.id} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
          <select
            name="sort"
            value={sortBy}
            className="p-2 text-sm border border-gray-300 rounded-md appearance-none bg-slate-100"
            onChange={(e) => {
              setSortBy(e.target.value);
              setTrigger(true);
            }}
          >
            <option value="">Sorting</option>
            <option value="price">Price</option>
            <option value="rating">Rate</option>
          </select>
          {sortBy && (
            <select
              name="order"
              value={order}
              className="p-2 text-sm border border-gray-300 rounded-md appearance-none bg-slate-100"
              onChange={(e) => {
                setOrder(e.target.value);
                setTrigger(true);
              }}
            >
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          )}
        </div>

        {/* Search Desktop */}
        <div className="hidden md:block">
          <div className="relative flex items-center gap-x-2">
            <button
              className="p-1 bg-white border-2 rounded-lg hover:text-white hover:bg-green-900 hover:border-green-900"
              disabled={query.length === 0}
              onClick={() => {
                setTrigger(true);
                setSelectedCategory("");
              }}
            >
              <IoIosSearch className="text-2xl" />
            </button>
            <div className="relative">
              <input
                type="text"
                placeholder="Find your perfect item"
                className="w-full px-5 py-1 border-2 rounded-xl"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {/* Tombol "X" untuk clear input */}
              {query.length > 0 && (
                <button
                  className="absolute inset-y-0 text-gray-500 right-3 hover:text-red-500"
                  onClick={() => {
                    setQuery("");
                    setTrigger(true);
                  }}
                >
                  ✖
                </button>
              )}
            </div>
            <button
              className="px-4 py-1 bg-white border-2 rounded-lg hover:text-white hover:bg-green-900 hover:border-green-900"
              onClick={() => {
                setQuery("");
                setSelectedCategory("");
                setSortBy("");
                setOrder("");
                setPage(1);
                setTrigger(true);
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="flex flex-wrap justify-between w-full gap-10 px-10">
        {products.map((product) => (
          <div key={product.id} className="relative group">
            {/* Title */}
            <div className="absolute p-3 transform -translate-x-1/2 bg-white border-2 w-72 rounded-xl bottom-5 left-1/2">
              <Link to={`/detail-product/${product?.id}`}>
                <h1 className="text-sm font-bold truncate">{product.title}</h1>
                <div className="flex items-center gap-x-1">
                  <FaStar className="text-yellow-600" />
                  <p className="text-sm font-bold">{product.rating}</p>
                  <p className="text-sm text-gray-500">{`(${product.minimumOrderQuantity} Reviews)`}</p>
                </div>
                <div className="flex gap-x-2">
                  <p className="font-bold">{`$${product.price}`}</p>
                  <p className="text-gray-500 line-through">{`$${
                    product.discountPercentage + product.price
                  }`}</p>
                </div>
              </Link>
              {/* Add to Cart */}
              <button className="absolute hidden w-full py-2 mt-2 text-center text-white transform -translate-x-1/2 bg-green-900 rounded-lg -bottom-12 left-1/2 group-hover:block hover:bg-green-950">
                Add To Cart
              </button>
            </div>

            {/* Foto */}
            {loadingProduts ? (
              <div className="bg-gray-300 shadow-lg rounded-xl w-80 h-96 animate-pulse"></div>
            ) : (
              <Link to={`/detail-product/${product?.id}`}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full border-2 shadow-lg h-96 md:w-80 rounded-xl bg-slate-100"
                />
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-10 py-10 md:py-20">
        <button
          className="hover:text-green-900 hover:font-bold"
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1, 1)}
        >{`< Previous`}</button>
        {/* Nomor Halaman Desktop*/}
        <div className="hidden md:block">
          <div className="flex gap-x-5">
            {generatePageNumbers(page, MaxPages).map((num, index) => (
              <h1
                key={index}
                className={`cursor-pointer ${
                  page === num ? "border-b-2 border-b-green-900 font-bold" : ""
                }`}
                onClick={() => typeof num === "number" && setPage(num)}
              >
                {num}
              </h1>
            ))}
          </div>
        </div>
        <div className="block md:hidden">{`${page}/${MaxPages}`}</div>
        <button
          className="hover:text-green-900 hover:font-bold"
          disabled={page === MaxPages}
          onClick={() => setPage((next) => next + 1, MaxPages)}
        >{`Next >`}</button>
      </div>
    </div>
  );
}
