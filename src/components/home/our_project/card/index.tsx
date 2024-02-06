import Cookies from "js-cookie";
import Link from "next/link";

function Card(props: any) {
  return (
    // <div
    //   className={`absolute animated_1 flex flex-col gap-3 justify-center items-center ${
    //     props.selectitem == props.index
    //       ? "right-[0px]"
    //       : `${props.style}`
    //   }  w-full h-full `}
    // >
    //   <img src={props.src} alt="" />
    //   <h1>{props.title}</h1>
    //   <p className="opacity-75 px-[18px] text-center text-[14px]">
    //     {props.description}
    //   </p>
    // </div>
    <div
    //  className=" bgcard pl-10 pr-8 sm:w-[360px] min-h-[500px] text-center
    //   sm:text-right drop-shadow-md flex items-center sm:items-start 
    //   flex-col pt-10   ">
         className={`absolute
        
         bg-[#fff] text-right  border
       border-gray-200 px-4 py-3 rounded-[25px] 
          animated_1 flex flex-col gap-3 justify-center items-center ${
        props.selectitem == props.index
          ? "right-[0px]"
          : `${props.style}`
      }  w-full h-full `}>



    <img src={props.src} alt="" className="h-fit w-full " />
    <h2 className="w-full mt-4  text-lg font-semibold">
      {props.title}
    </h2>
    <p className="text-xs mt-2 leading-7 sm:leading-6 sm:font-normal  w-full ">
      {props.description}
    </p>
    <Link href={`/project/${props.id}`} 
            onClick={() =>  {
              Cookies.set('id', props.id)
              // Cookies.set('titlepr', data.title) 
            } }
        className="cartButton mt-3  w-full h-[50px]  flex justify-around ">
          {/* <Button
            className=" h-10   border-0 pl-0 hover:pl-3 pr-4 w-[60%]
            flex justify-between items-center hover:bg-[#232636] rounded-[25px] hover:text-white
            transition-all ease-in duration-300 text-sm"
            type="ghost">
            بیشتر بخوانید
              <img src="../../images/Frame123.svg" className="h-9" alt="" />            
          </Button> */}
          
          <button dir="ltr" className="learn-more ">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text text-sm t ">    بیشتر بخوانید</span>
          </button>
        </Link>
    <div className="w-full">
{/* <Link className="flex w-full pr-4" href={'/project'}>
    <Button
className="bg-[#4355FF] hover:bg-[#2036fe] mt-1 lg:mt-3  lg:w-1/3 text-white"
 size="middle">
سفارش
</Button>
</Link> */}

</div>

  </div>
  );
}

export default Card;
