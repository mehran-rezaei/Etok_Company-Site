import Link from 'next/link';
import React, { useState } from 'react';

const AboutUsCard = (props:any) => {
    const [hoverMoment , setHoverMomment] = useState<any>(false)
    const {title,text1,text2,text3,text4} = props 
    const icons = "../../Images/Group70.svg"
    // const icons2 = "../../Images/Group71.svg"
    const moreRead = "../../Images/Vector109.svg"
    return (
        <div 
        onMouseEnter={() => setHoverMomment(true)} 
        onMouseLeave={() => setHoverMomment(false)}
        className='bg-[#FFF] border border-black  text-[#323232] py-4 text-center
         transition-all ease-in duration-300
          w-[300px] h-[260px] rounded-[25px] shadow-[-7px_7px_1px_1px_#1a202c] 
          hover:mr-1 hover:mt-1 hover:shadow'>
            <div className=' flex flex-col justify-center items-center '>
            <h2 className=' text-center '>{title}</h2>
            <ul className='flex flex-col gap-y-4 mt-4 text-sm list text-right items-start
            '>
                <li className='flex items-center justify-center gap-x-3'> 
                    <img src={icons}  alt="" />  {text1}
                </li>
                <li className='flex items-center justify-center gap-x-3'> 
                    <img src={icons} alt="" />  {text2}
                </li>
                <li className='flex items-center justify-center gap-x-3'> 
                    <img src={icons} alt="" />  {text3}
                </li>
                <li className='flex items-center justify-center gap-x-3'> 
                    <img src={icons} alt="" />  {text4}
                </li>
                <Link href={'/aboutus'} className={`flex text-black   cursor-pointer
             font-semibold items-center  text-right text-sm justify-start gap-x-3
             transition-all ease-in duration-200 
             ${hoverMoment ? 'opacity-100' : 'opacity-0'}`}
             >
                <img src={moreRead} alt="" />
                بیشتر بدانید
            </Link>
            </ul>
       
            </div>
    
            
        </div>
    );
};

export default AboutUsCard;