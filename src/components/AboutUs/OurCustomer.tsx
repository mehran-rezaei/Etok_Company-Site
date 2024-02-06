import Image from 'next/image';
import React from 'react';

const OurCustomer = () => {
    return (
        <div className='w-[95%] lg:w-[70%] mt-0 mb-14 lg:mb-28'>
        <div className='flex justify-between items-center  flex-col-reverse  lg:flex-row'>
             <section className='w-full px-2 lg:px-0 lg:w-1/2'>
                <div>
                    <h2 className='font-semibold text-lg mb-3'>رضایت مشتریان </h2>
                    <h3 className='font-medium text-sm leading-7'>ما یک شرکت نرم‌افزاری پیشرو هستیم. تخصص ما در زمینه فناوری اطلاعات 
                        و توسعه نرم‌افزارهای نوآورانه است. تیم 
                        ما از افراد با تجربه و متخصص تشکیل شده است که به ارائه راه
                        کارهای برتر و بهبود عملکرد سازمان‌ها از طریق فناوری
                         اطلاعات متعهدند. ما با همت و انگیزه بالا.
                    </h3>
                    <div className=' w-full lg:w-2/3 pt-4 border-black border-t flex items-center justify-between lg:justify-start mt-6 mb-12 gap-x-9'> 
                        <span>25 + سفارش </span>
                        <span className='bg-[#3D64F0] text-white py-2 px-6 rounded-xl'>25 + رضایتمندی </span>
                    </div>
                </div>
             </section>
             <section className='  lg:w-1/2  z-10 flex justify-end '>
                <Image src="/Images/customerPhoto.png" alt=""
                //  className=' lg:object-cover h-[400px]' 
                height={400}
                width={400}
                />
             </section>
        </div>
        <div className='grid grid-cols-2 justify-items-center gap-y-7 lg:gap-y-0 lg:flex items-center justify-between 
        -mt-8 z-50 relative bg-[#fff]
        shadow-[rgba(0,0,0,_0.13)_0px_0px_16px] rounded-3xl py-6 px-6 lg:px-12'>
            <div className='text-sm font-semibold  text-center'>
                <img  className=' h-10 xl:h-14  lg:mb-3 mb-4' src="../../Images/logo/nobitok.svg" alt="" />
               نوبیتوک
            </div>
            <div className='text-sm font-semibold  text-center'>
                <img  className=' h-10 xl:h-14  lg:mb-3 mb-4' src="../../Images/logo/jiba.svg" alt="" />
                جیبا
            </div>
            <div className='text-sm font-semibold  text-center'>
                <img  className=' h-10 xl:h-14  lg:mb-3 mb-4' src="../../Images/logo/titanium.svg" alt="" />
              تیتانیوم
            </div>
            <div className='text-sm font-semibold  text-center'>
                <img  className='h-10 xl:h-14  lg:mb-3 mb-4' src="../../Images/logo/status.ico" alt="" />
               طب کار
            </div>
          
        </div>
        
        </div>

    );
};

export default OurCustomer;