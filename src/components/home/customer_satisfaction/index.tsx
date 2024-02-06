import { Button } from "antd";
import CountUp from 'react-countup';
function Customer_satisfaction() {
  return (
    <div className="relative h-[110vh] max-h-[800px] w-full flex items-center gap-20 flex-col my-[70px] md:my-[250px]">
      <div className="md:flex hidden flex-col justify-center gap-10 items-center absolute left-[115px]">
        <div className="number text-[36px]">07</div>
        <div className="border-l-2 border-black h-[85vh] max-h-[800px]"></div>
      </div>
      <h1 className="md:text-[40px] text-[22px]">رضایتمندی مشتریان</h1>
      <div className="md:w-[70%] w-[90%] h-[90vh] shadow_">
        <div className="flex flex-col shape2 rounded-2xl justify-center items-center w-full h-full ">
          <div className="h-[20%] w-full gap-6 lg:gap-12 flex items-center justify-center  lg:grid grid-cols-9 bg-white">
          <div className="col-span-4  lg:gap-10 text-center lg:flex justify-between lg:justify-center items-start">
              <p className=" text-sm lg:text-[32px]">پروژه های انجام شده</p>
              <CountUp className="text-sm lg:text-[32px]" end={27} />
            </div>
            <div className="h-[80%] w-[1%] lg:w-[15%]  border-l-2 border-black "></div>
            <div className="col-span-4  lg:gap-10 text-center lg:flex  justify-center items-start">
              <p className=" text-sm lg:text-[32px]">مشتریان راضی</p>
              <CountUp className="text-sm lg:text-[32px]" end={95} />
            </div>
          </div>
          <div className="h-[100%] md:h-[80%] w-full md:p-20 px-4 py-3 bg-[#E6F2FA]  gap-10 flex justify-start items-center">
            <img
              className="hidden md:block w-[283px] h-[450px]"
              src="../../../Images/Rectangle126.png"
              alt=""
            />
            <div className=" flex flex-col justify-between h-[450px]">
              <h1 className="text-[20px] md:text-[32px]">رضایت مشتریان</h1>
              <p className="mt-3  text-[11px] md:text-base text-justify">
                رضایت مشتریان برای ما در اولویت قرار دارد. در شرکت نرم افزاری
                ما، مشتریان ما را به عنوان هستی وجود می‌دهیم و هدف ما ارائه
                خدماتی است که نه تنها نیازهای آن‌ها را برآورده کند، بلکه از
                انتظاراتشان عبور کند. ما به دقت به نظرات، پیشنهادات و انتقادات
                مشتریانمان گوش می‌دهیم و بهبودهای لازم را اعمال می‌کنیم. تعامل
                دوطرفه و ارتباط صادقانه با مشتریانمان را ارزشمند می‌دانیم و تمام
                تلاشمان را برای ارائه خدماتی با کیفیت، به موقع و حرفه‌ای انجام
                می‌دهیم. مشتریان را به همراه خود در سفری از همکاری بهتر، نتایج
                موفق و رضایت کامل دعوت می‌کنیم
              </p>
              <p className="text-[12px] md:text-sm">
                + پشتیبانی قوی و به موقع: ما تعهد داریم که به مشتریان خود
                پشتیبانی قوی و به موقع ارائه دهیم
              </p>
              <p className="text-[12px] md:text-sm">
                + شفافیت و اعتمادسازی: در تعامل با مشتریانمان، به شفافیت و
                اعتمادسازی توجه می‌کنیم.
              </p>
              <p className="text-[12px] md:text-sm">
                + ارتباط فعال: ما ارتباط فعال با مشتریان خود را بسیار ارزشمند
                می‌دانیم.{" "}
              </p>
              <div className="justify-center flex md:justify-end pl-5 md:pl-0">
                <Button className="bg-[#4355FF] "  type="primary">
                  بیشتر بخوانید
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer_satisfaction;
