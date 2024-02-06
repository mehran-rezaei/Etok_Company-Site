import Link from "next/link";
import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

export function Card(props:any) {
  const {item} = props
  console.log(item);
  

  return (
  //  <div  className="w-[300px] h-[350px] mt-6 mx-2 rounded-lg bg-[#fff] border">
  <>
  {item &&
         <div className="scrolimage w-[280px]  md:w-[330px] mx-3 mt-6 h-[420px] md:h-[490px]  bg-[#fff] text-right md:drop-shadow-xl border
       border-gray-200 px-4 py-3 rounded-[25px] 
       group flex flex-col gap-2 items-center justify-between">
        <div  className="zoom-img rounded-3xl flex justify-center items-start   ">
          <img
            className="group-hover:scale-105 duration-300  rounded-xl  "
            src={item.image}
            alt=""
            
          />
        </div>
        <h1 className=" w-full text-[16px] lg:text-[18px]  px-4 text-right font-semibold ">
          {item.title}</h1>
        <p className="text-[12px] lg:text-[13px]  2xl:text-right px-4 font-medium lg:min-h-[80px] lg:max-h-[80px]
        ">
         {item.description}
         </p>
        <Link href={`/blog/${item.id}`} 
        className="cartButton mt-3  w-full h-[50px]  flex justify-start ">      
          <button dir="ltr" className="learn-more ">
            <span className="circle bg-[#232636]" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text text-sm text-black ">    بیشتر بخوانید</span>
          </button>
        </Link>
      </div>
       }
      </>

  );
}
