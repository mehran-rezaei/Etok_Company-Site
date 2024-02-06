import Image from 'next/image';
import React from 'react';

const MemberCart = (props:any) => {
    const {name , job , image } = props
    return (
        <div className=" md:w-[330px]  h-[390px] md:h-[440px]  bg-[#fff] text-right drop-shadow-sm lg:drop-shadow-xl border
        border-gray-200 border-opacity-60 px-4 py-3 rounded-[25px] 
        group flex flex-col gap-2 items-start justify-center">
         <div  className="zoom-img rounded-3xl  ">
        <Image
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: '100%' }}
             className="group-hover:scale-125 duration-300   "
             src={image}
             alt=""
           />
         </div>
         <h1 className=" w-full text-[20px] px-4 text-right font-semibold mt-2">{name}</h1>
         <p className=" flex items-start min-h-[90px]  text-[16px] leading-7  2xl:text-right px-4 font-medium">{job}</p>
       </div>
    );
};

export default MemberCart;