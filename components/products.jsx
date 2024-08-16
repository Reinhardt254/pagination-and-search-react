"use client";

import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Search from "./search";

const Products = () => {
  const [data, setData] = useState([]); //Data from json API
  const [dataItems, setDataItems] = useState(null); //Search data
  const [currentPage, setCurrentPage] = useState(1); //State for our current page
  const [itemsPerPage] = useState(5); // State for items per page

  //Mock Data for skeleton loader
  const skeletonData = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const dummyData = await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .catch((error) => console.log(error));

      setData(dummyData);
    };

    setTimeout(fetchData, 1000);
  }, []);

  // Search functionality
  function handleSearch(term) {
    const items = data.products?.filter(
      (item) =>
        item.title.toLowerCase().includes(term.toLowerCase()) ||
        item.description.toLowerCase().includes(term.toLowerCase())
    );

    setDataItems(items);
  }

  //implementing pagination
  // Calculate the items to display for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.products?.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(data?.products?.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="bg-slate-100 flex justify-center">
      <div className="max-w-[1200px]">
        <div className="mx-7">
          <div className="w-full pt-4 pb-4 flex justify-center">
            {/* <label className="pr-3">Search</label> */}
            <input
              placeholder="serch item"
              className="p-2 pl-6 rounded-3xl w-80"
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
            />
          </div>
        </div>

        {dataItems ? (
          <div className=" mx-7 ">
            <div>
              {dataItems?.length == 0 ? (
                <div className="w-full flex justify-center align-middle text-center">
                  No compatible items
                </div>
              ) : (
                <div></div>
              )}

              <div className="grid grid-cols-3">
                {dataItems?.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white m-1 rounded-sm p-2 hover:bg-gray-100 transition-shadow cursor-pointer"
                  >
                    <div className="font-semibold text-lg">{item.title}</div>
                    <div className="text-sm line-clamp-3">
                      {item.description}
                    </div>
                    <div className="font-semibold text-sm">{item.category}</div>
                    <div className="font-semibold text-sm">${item.price}</div>
                    <div>{item.brand}</div>
                    <div>{item.rating}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-screen box-border">
            {!currentItems ? (
                <div className="grid grid-cols-3 mx-7 max-sm:grid-cols-1  box-border w-[1000px] max-sm:w-auto max-lg:w-[600px]">
                  {skeletonData.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white m-1 rounded-sm p-2 hover:bg-gray-100 transition-shadow cursor-pointer"
                    >
                      {/* <div className="font-semibold text-lg ">
                        <Skeleton count={1} height={100} width={100} circle />
                      </div> */}
                      <div className="font-semibold text-lg">
                        <Skeleton count={1} height={40}/>
                      </div>
                      <div className="text-sm line-clamp-3 ">
                        <Skeleton count={1} height={20} />
                      </div>
                      <div className="font-semibold text-sm ">
                        <Skeleton count={1} height={20} />
                      </div>
                      <div className="font-semibold text-sm ">
                        <Skeleton count={1} height={20} />
                      </div>
                      <div className="">
                        <Skeleton count={1} height={20} />
                      </div>
                      <div className="">
                        <Skeleton count={1} height={20} />
                      </div>
                    </div>
                  ))}
                </div>
            ) : (
              <div className="grid grid-cols-3 mx-7 max-sm:grid-cols-1 w-auto box-border">
                {currentItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white m-1 rounded-sm p-2 hover:bg-gray-100 transition-shadow cursor-pointer w-auto box-border"
                  >
                    <div className="font-semibold text-lg">{item.title}</div>
                    <div className="text-sm line-clamp-3">
                      {item.description}
                    </div>
                    <div className="font-semibold text-sm">{item.category}</div>
                    <div className="font-semibold text-sm">${item.price}</div>
                    <div>{item.brand}</div>
                    <div>{item.rating}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="w-auto">
            <ul className="flex w-auto h-auto justify-center box-border">
              {pageNumbers.map((number) => (
                <li key={number} className="flex">
                  <a
                    onClick={() => paginate(number)}
                    className="bg-blue-400 mr-2 mt-10 mb-28 px-5 py-3 text-white text-center rounded-sm hover:bg-slate-700 cursor-pointer box-border"
                  >
                    {number}
                  </a>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
