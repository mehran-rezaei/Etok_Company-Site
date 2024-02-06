import Image from 'next/image';
import React from 'react';

const AboutUsHero = () => {
    return (
        <div className='flex items-center flex-col w-full'>
        <header className='bgheadersmall2
         mt-[20px] lg:mt-[10px]  text-center text-white text-lg  lg:text-2xl
             flex justify-center items-center w-[330px] overflow-hidden  z-10 lg:w-[600px] h-[60px]'>
          <h2 className='w-full '>درباره ما</h2>
        </header>
          <section className=' rounded-[15px] text-center 
             leading-8 text-sm  sm:text-xl font-semibold
             bg-[#232636] text-white h-[170px] w-[95%] lg:w-[80%]
             flex flex-col items-center justify-center '>         
            باما به سوی دنیای دیجیتال حرکت کن !
          </section>
          <section className='w-[90%] lg:w-[75%] flex justify-between flex-col lg:flex-row 
          items-center mt-8 gap-y-3 lg:gap-y-0'>
            <div className='w-[97%] lg:w-[59%] lg:px-5'>
                <h2 className='font-semibold text-2xl mb-3 text-center lg:text-right'>ایتوک</h2>
                <h3 className='text-center lg:text-right text-sm leading-7'>
                ما یک شرکت نرم‌افزاری
                 پیشرو هستیم. تخصص ما در زمینه فناوری اطلاعات و توسعه نرم‌افزارهای
                 نوآورانه است. تیم ما از افراد با تجربه و متخصص تشکیل شده
                 است که به ارائه راهکارهای برتر و بهبود عملکرد سازمان‌ها
                 از طریق فناوری اطلاعات متعهدند. ما با همت و انگیزه بالا،
                 مشتریانمان را در تمام مراحل پروژه‌هایشان همراهی می‌کنیم و
                 تضمین می‌کنیم که نیازها و اهداف آن‌ها محقق می‌شوند
                </h3>
            </div>   
            <div className='flex justify-end items-end lg:w-[41%]'>
               <Image 
              //  className='w-full h-[280px]' 
              width={280}
              height={280}
               src="../../Images/Rectangle458.svg"
                alt="" />
             </div>       
          </section>
        </div>
    );
};

export default AboutUsHero;