import React, { useEffect } from 'react';
import Teq_according from './teq_according';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TeqMain = () => {
  const squareVariants = {
    visible: { y:1 , opacity: 1, scale: 1, transition: { duration: 0.8  } },
    hidden: { opacity: 0, scale: 1, y : 100 }
  };
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
        <motion.div 
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
        // className="square"
        // animate={{ y : 0,scale : 1 }} 
        // initial={{ y : -100,  scale : 0.01}} 
        transition={ { ease : 'circIn' }}
           className='flex justify-center square items-center flex-col mt-[105px] md:mt-[300px] lg:mb-[150px]  '>
            <div className='bg-[#EBF3F9] lg:px-16 py-5 w-full lg:w-[1100px]
              h-[60vh] lg:h-[550px]  rounded-[50px] shadow-md  '>
            <div className="flex flex-col justify-center items-center text-center ">
        <h1 id='targetElement2' className="text-[16px] md:text-[28px] pt-3 font-semibold">
          تکنولوژی   
        </h1>
        <p className="text-sm mt-3 px-3 leading-7">
        در شرکت ما، از تکنولوژی‌های پیشرفته و مدرن در تمامی فرآیندهای توسعه
          نرم‌افزار استفاده می‌کنیم. تیم ما از توانمندی‌های فنی برجسته در
          زمینه‌های مختلف مانند طراحی و توسعه وب، برنامه‌نویسی موبایل، هوش
          مصنوعی و ابر، پایگاه داده و غیره برخوردار است. با بهره‌گیری از این
          تکنولوژی‌ها، به مشتریانمان راهکارهای نوآورانه و پیشرو در حوزه
          نرم‌افزار ارائه می‌دهیم. هدف ما استفاده از بهترین و جدیدترین
          تکنولوژی‌ها است تا به مشتریانمان راهکارهایی با عملکرد بالا، امنیت قوی
          و قابلیت انعطاف‌پذیری فراهم کنیم.          
                </p>
      </div>
        <Teq_according/>
            </div>
            
        </motion.div  >
    );
};

export default TeqMain;