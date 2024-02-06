import React from 'react';

const ServicesSlider = () => {
    return (
        <div className='pl-12'>
         
            <div className='relative h-[500px]   mt-10 flex justify-center '>
            <div className='absolute  -top-10 z-0 right-20'>
                <img  className='h-[610px]' src="../../meh/servicesnluebg.png" alt="" />
            </div>
            <div className=' absolute mr-0 mt-3 top-10 left-2.5 bgsliderservicesblack w-[1000px] h-[500px] mb-64  '>                
            </div>
            <div className='absolute top-8 mr-12  bgsliderservices w-[1000px] overflow-hidden h-[500px]  '>
            </div>
            <div className='absolute  bgblack2 w-[95px] h-[500px] ml-7  left-0 top-[550px] '>

            </div>
            </div>
        </div>
    );
};
export default ServicesSlider;