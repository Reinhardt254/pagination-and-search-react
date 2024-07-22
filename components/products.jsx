"use client";

import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Search from "./search";

const Products = () => {
  const [data, setData] = useState([]);
  const [dataItems, setDataItems] = useState(null);

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
    const fetchdata = async () => {
      const x = await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .catch((error) => console.log(error));

      setData(x);

    };

    setTimeout(fetchdata, 2000);
  }, []);

  function handleSearch(term) {
    const items = data.products?.filter((item) => 
      item.title.toLowerCase().includes(term.toLowerCase()) || 
      item.description.toLowerCase().includes(term.toLowerCase()));
    
    console.log(items);
  
    setDataItems(items);
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
            {dataItems?.length == 0 ? <div className="w-full flex justify-center align-middle text-center">No compatible items</div> : <div></div>}

            <div className="grid grid-cols-3">
            {dataItems?.map((item) => (
              <div
                key={item.id}
                className="bg-white m-1 rounded-sm p-2 hover:bg-gray-100 transition-shadow cursor-pointer"
              >
                <div className="font-semibold text-lg">{item.title}</div>
                <div className="text-sm line-clamp-3">{item.description}</div>
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
          <div>
            {!data.products ? (
              <div className="bg-slate-100 w-full">
                <div className="grid grid-cols-3 mx-7">
                  {skeletonData.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white m-1 rounded-sm p-2 hover:bg-gray-100 transition-shadow cursor-pointer"
                    >
                      {/* <div className="font-semibold text-lg ">
                    <Skeleton count={1} height={100} width={100} circle />
                  </div> */}
                      <div className="font-semibold text-lg ">
                        <Skeleton count={1} height={40} />
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
              </div>
            ) : (
              <div className="grid grid-cols-3 mx-7">
                {data.products?.map((item) => (
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
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
