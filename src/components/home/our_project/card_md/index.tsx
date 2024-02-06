import { Button } from "antd";
import Cookies from "js-cookie";
import Link from "next/link";
function Card_md(props: any) {
  const { data , id } = props;
  return (
    <>
      <div dir="rtl" className=" md:w-[330px]  h-[390px] md:h-[470px]  bg-[#fff] text-right md:drop-shadow-xl border
       border-gray-200 px-4 py-3 rounded-[25px] 
       group flex flex-col gap-2 items-center justify-center">
        <Link href={`/project/${id}`}  className="zoom-img rounded-3xl  ">
          <img
            className="group-hover:scale-125 duration-300   "
            src={data.url}
            alt=""
          />
        </Link>
        <h1 className=" w-full text-[20px] px-4 text-right font-semibold mt-2">{data.title}</h1>
        <p className="text-[13px]  2xl:text-right px-4 font-medium">{data.description}</p>
        <Link href={`/project/${id}`} 
            onClick={() =>  {
              Cookies.set('id', id)
              // Cookies.set('titlepr', data.title) 
            } }
        className="cartButton mt-3  w-full h-[50px]  flex justify-start ">      
          <button dir="ltr" className="learn-more ">
            <span className="circle bg-[#232636] " aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text text-sm text-black ">    بیشتر بخوانید</span>
          </button>
        </Link>
      </div>
    </>
  );
}

export default Card_md;
