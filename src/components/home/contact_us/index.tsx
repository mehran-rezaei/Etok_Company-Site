import { Button, Space } from "antd";
import { blue, grey } from "@mui/material/colors";
import { Input } from "antd";
import { Checkbox } from "antd";
import { sendForm } from "@/DataService/ContactUsProvider";
import { useState } from "react";
const { TextArea } = Input;
import toast, { Toaster } from "react-hot-toast";
import { notify } from "../../helper/toust";
import { Link, Element } from "react-scroll";
import ContactUsModal from "./ContactUsModal";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Contact_us() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState<any>({
    name: "",
    number: "",
    message: "",
    email: "",
  });
  // const [checkBoxItem , setCheckBoxItem] = useState<any>(false)
  console.log(data);

  const sendData = () => {
    if(data.name.length > 0 && data.number.length > 0){
    sendForm(data)
      .then((Response) => {
        console.log(Response.data.isSuccess);
        if(Response.data.isSuccess = true){
          handleOpen()
          setData({
            name: "",
            number: "",
            message: "",
            email: "",
          })
        }else{
        notify("err", "درخواست شما ارسال نشد");
        }
        // notify("success", "درخواست شما ارسال شد");
      })
      .catch((error: any) => {
        console.log(error);
        notify("err", "درخواست شما ارسال نشد");
      });
    } else{
      notify("err", "نام و شماره خود را به درستی وارد کنید");
    }
    console.log("YES");
  };
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
 
    transition={ { ease : 'circIn' }}
      id="targetElement"
      className="relative w-full md:h-[800px] lg:h-[700px] 2xl:h-[700px] min-h-[600px] mt-[620px] md:mt-[600px]  lg:mt-[300px] mb-[100px] md:mb-[0px] "
    >
      
        <div className="">
          <ContactUsModal open={open} setOpen={setOpen} handleOpen={handleOpen} 
          handleClose={handleClose} />
        </div>
  
      <div className=" flex    
       justify-center items-center flex-col">
   
           <div className='bgheadersmall lg:bgheader  text-center text-white text-lg  lg:text-2xl
         flex justify-center items-center w-[360px] overflow-hidden  m z-10 lg:w-[600px] h-[60px] mb-[465px] lg:mb-[500px]'>
            <h2 className='w-full '>ارتباط با ما</h2>
        </div>
        <div className="flex  flex-col lg:flex-row items-center bg-[#EBF3F9] justify-between absolute lg:rounded-[35px] mt-[99px]
        drop-shadow-lg w-[100%]
         md:-top-10 md:w-[60%] gap-y-3 lg:gap-14 py-6 lg:py-14 px-5 lg:px-10">
          <form
            action=""
            className="flex flex-col items-center gap-y-4 lg:gap-5 w-[100%] lg:w-[45%]"
          >
         
            <div className="flex text-sm leading-7 flex-col lg:gap-10 lg:pr-2  mb-2 lg:mb-4 font-medium 
            2xl:text-base text-center ">
              <p className="">
                در صورتی که شما نیاز به برقراری ارتباط با ما دارید، ما آماده ایم
                تا شما را در هر موضوعی که نیاز دارید، یاری رسانی کنیم.
              </p>
            </div>
            <Input
              className="bg-[#232636] text-white p-2"
              placeholder="نام و نام خانوادگی :"
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <Input
              className="bg-[#232636] text-white p-2"
              placeholder="شماره تلفن :"
              onChange={(e) => setData({ ...data, number: e.target.value })}
            />
            <Input
              className="bg-[#232636] text-white p-2"
              placeholder="ایمیل :"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <TextArea
              className="bg-[#232636]  text-white p-2 block lg:hidden"
              style={{ resize: "none", minHeight: 120, maxHeight: 200 }}
              placeholder="چگونه میتوانیم کمکتان کنیم ؟"
              onChange={(e) => setData({ ...data, message: e.target.value })}
            />
             <TextArea
              className="bg-[#232636]  text-white p-2 hidden lg:block"
              style={{ resize: "none", minHeight: 160, maxHeight: 200 }}
              placeholder="چگونه میتوانیم کمکتان کنیم ؟"
              onChange={(e) => setData({ ...data, message: e.target.value })}
            />
          </form>
          <div className="flex items-center flex-col gap-y-10 w-0 lg:w-[45%] ">
            <img
              className="w-[380px] hidden lg:block h-[330px]"
              src="../../../Images/Rectangle420@.svg"
              alt=""
            />
            <Button    
             onClick={() => sendData()}
                         type='ghost'
                         className='text-sm lg:text-base text-white bg-[#3AD685]
                         transition-all ease-in duration-200
                          hover:-bottom-[13px]
                          rounded-[35px] hover:-mr-1.5  h-12  w-36 lg:w-44  flex justify-center items-center 
                           text-center  -bottom-2.5 '
                        //  size='large'
                         >
                                        ارسال درخواست
                         </Button>
          </div>
        </div>
      </div>
      <Toaster />
    </motion.div >
  );
}

export default Contact_us;
