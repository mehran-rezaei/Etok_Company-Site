import React from 'react';
import Link from "next/link";
import { useEffect, useState } from "react";
import { getRecentblogs } from "@/DataService/BlogPageProvider";

const NewsBlog = () => {
    const [Data, setData]: any = useState([]);
    useEffect(() => {
      getRecentblogs(2)
        .then((Response) => {
          console.log(Response);
          setData(Response.data.dataList);
        })
        .catch(err => {
          console.log(err);
        })
  
    }, []);
    return (
    <>
        {Data.length > 0 ? (
        <div className='w-full flex items-center flex-col '>
                   <div className=" gap-x-10 hidden lg:flex justify-center items-center h-[70vh] 2xl:h-[70vh]">
            <div className="     w-[650px]  h-[413px]">
              <div className=" w-full h-full border-2 border-[#31374D]  rounded-xl flex justify-start
               px-5 items-center   shadow-[-7px_7px_1px_1px_#1a202c]">
                <img
                  className="w-[270px] rounded-xl border-[#31374D] border-2  h-[360px] object-cover"
                  src={Data[0].image}
                  alt=""
                />
                <div className=" w-full h-[340px] py-1 px-10 flex flex-col justify-between">
                  <div className="flex flex-col mt-4 gap-5">
                    <h1 className="text-[21px] font-bold">
                      {Data[0].title}
                    </h1>
                    <p className="text-[14px] font-medium leading-7">
                      {Data[0].description}
                    </p>
                  </div>
                  <Link href={`/blog/${Data[0].id}`}
                    className=" cartButton mt-3  w-full h-[50px]  flex justify-around ">
                    {/* <Button
                      className="bg-[#4355FF] "
                      size="large"
                      type="primary"
                    >
                      بیشتر بخوانید
                    </Button> */}
                    <button dir="ltr" className="learn-more ">
                      <span className="circle bg-[#3D64F0]" aria-hidden="true">
                        <span className="icon arrow"></span>
                      </span>
                      <span className="button-text text-sm  ">    بیشتر بخوانید</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="  w-[356px] h-[413px]">
              <div className=" w-full h-full  flex py-5 items-center  flex-col border-2 border-[#31374D] 
               rounded-xl shadow-[-7px_7px_1px_1px_#1a202c] ">
                <img
                  className="w-[270px] rounded-xl  border-2 h-[130px]"
                  src={Data[1].image}
                  alt=""
                />
                <div className="items-center pt-4  px-3 h-full flex justify-between  flex-col">
                  <div className="flex gap-3 items-center text-center flex-col">
                    <h1 className="px-2 text-[20px] font-bold">{Data[1].title}</h1>
                    <p className=" px-2 text-[13px] leading-6">
                      {Data[1].description}
                    </p>
                  </div>
                  <Link href={`/blog/${Data[1].id}`}
                    className="  cartButton mt-3  w-full h-[50px] flex justify-around ">
                         <button dir="ltr" className="learn-more ">
                      <span className="circle bg-[#3D64F0]" aria-hidden="true">
                        <span className="icon arrow"></span>
                      </span>
                      <span className="button-text text-sm  ">    بیشتر بخوانید</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" gap-x-10 hidden lg:flex justify-center flex-row-reverse items-center h-[70vh] 2xl:h-[70vh]">
            <div className="     w-[650px]  h-[413px]">
              <div className=" w-full h-full border-2 border-[#31374D]  rounded-xl flex justify-start
               px-5 items-center   shadow-[-7px_7px_1px_1px_#1a202c]">
                <img
                  className="w-[270px] rounded-xl border-[#31374D] border-2  h-[360px] object-cover"
                  src={Data[2].image}
                  alt=""
                />
                <div className=" w-full h-[340px] py-1 px-10 flex flex-col justify-between">
                  <div className="flex flex-col mt-4 gap-5">
                    <h1 className="text-[21px] font-bold">
                      {Data[2].title}
                    </h1>
                    <p className="text-[14px] font-medium leading-7">
                      {Data[2].description}
                    </p>
                  </div>
                  <Link href={`/blog/${Data[2].id}`}
                    className=" cartButton mt-3  w-full h-[50px]  flex justify-around ">
                    {/* <Button
                      className="bg-[#4355FF] "
                      size="large"
                      type="primary"
                    >
                      بیشتر بخوانید
                    </Button> */}
                    <button dir="ltr" className="learn-more ">
                      <span className="circle bg-[#3D64F0]" aria-hidden="true">
                        <span className="icon arrow"></span>
                      </span>
                      <span className="button-text text-sm  ">    بیشتر بخوانید</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="  w-[356px] h-[413px]">
              <div className=" w-full h-full  flex py-5 items-center  flex-col border-2 border-[#31374D] 
               rounded-xl shadow-[-7px_7px_1px_1px_#1a202c] ">
                <img
                  className="w-[270px] rounded-xl border-[#31374D] border-2 h-[150px]"
                  src={Data[3].image}
                  alt=""
                />
                <div className="items-center pt-4  px-3 h-full flex justify-between  flex-col">
                  <div className="flex gap-3 items-center text-center flex-col">
                    <h1 className="px-2 text-[20px] font-bold">{Data[3].title}</h1>
                    <p className=" px-2 text-[13px] leading-6">
                      {Data[3].description}
                    </p>
                  </div>
                  <Link href={`/blog/${Data[3].id}`}
                    className="  cartButton mt-3  w-full h-[50px] flex justify-around ">
                         <button dir="ltr" className="learn-more ">
                      <span className="circle bg-[#3D64F0]" aria-hidden="true">
                        <span className="icon arrow"></span>
                      </span>
                      <span className="button-text text-sm  ">    بیشتر بخوانید</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        ) : null}
    </>

    );
};

export default NewsBlog;