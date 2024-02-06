import { Link, Element } from "react-scroll";
function Shape6() {
  return (
    <div className="relative -z-10 md:left-[11%] 2xl:left-[8%] w-[100vw] h-[700px] top-[40px] md:top-[100px] 2xl:mb-10">
      <Element
        name="targetElement2"
        className=" absolute top-[400px]"
      ></Element>
      <img
        className="absolute top-0 w-full h-full"
        src="../../../Images/Shape3.png"
        alt=""
      />
      <div className="flex relative md:right-[15%] w-full md:w-[750px] 2xl:w-[950px] text-justify top-[350px] gap-4 pr-7 flex-col">
        <h1 className="text-[16px] md:text-[48px]">
          تکنولوژی های مورد استفاده
        </h1>
        <p className="text-[11px] md:text-sm 2xl:text-lg pl-20 ">
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
    </div>
  );
}

export default Shape6;
