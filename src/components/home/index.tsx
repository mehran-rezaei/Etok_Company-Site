import About_us_list from "./about_us/items";
import About_us from "./about_us";
import According from "./according";
import Contact_us from "./contact_us";
import Customer_satisfaction from "./customer_satisfaction";
import Footer from "./footer";
import Hero from "./hero";
import Hero_blur_shape from "./hero/hero_blur_shape";
import Hero_text from "./hero/hero_text";
import Nav from "./nav/nav";
import News from "./news";
import Our_project from "./our_project";
import Shape1 from "./shape/shape1";
import Shape2 from "./shape/shape2";
import Shape3 from "./shape/shape3";
import Shape4 from "./shape/shape4";
import Shape5 from "./shape/shape5";
import Shape6 from "./shape/shape6";
import Teq_according from "./teq/teq_according";
import Teq_test from "./teq/teq_text";
import TeqMain from "./teq/TeqMain";
import Banner from "./banner/Banner";
import Slider from "react-slick";


function Home_container() {


  return (
    <>
      <div className="relative bg-gray-50 overflow-hidden">

      <div className="relative z-40">
      <Nav />
      </div>
      <div className="relative z-30">
      <Hero />
      </div>
        {/* <Shape1 /> */}
        <div className="md:mt-[30px] lg:mt-[130px] w-full flex justify-center items-center relative">
      <About_us/>
      </div>
        {/* <About_us /> */}
        {/* <Shape4 /> */}
        <According />
        <Shape5 />
        {/* <Shape6 /> */}
        <Banner /> 
        {/* <Teq_according /> */}
        <Our_project />
        {/* Shape4 */}
        {/* <Customer_satisfaction /> */}
        <TeqMain/>
        <Contact_us />
        <News />
        <Footer />
      </div>
    </>
  );
}

export default Home_container;
