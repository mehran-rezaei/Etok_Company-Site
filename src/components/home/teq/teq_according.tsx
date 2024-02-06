import { useState } from "react";

function Teq_according() {
  const [select, setselect] = useState(1);
  const [selectitem, setselectitem] = useState(1);
  return (
    <div className="EBF3F9 flex justify-center items-center flex-col mt-10  lg:mb-[600px]  ">
      <div className=" shadow_  hidden lg:block overflow-hidden w-[1000px] px-10 h-[500px]
       rounded-3xl   z-0  ">
        <div
          onClick={() => {
            setselect(3);
          }}
          className={`absolute cursor-pointer left-0 w-[800px] flex justify-center items-center animated h-[450px] z-[1]  ${
            select == 1 ? "bg-[#232636] " : ""
          }${select == 2 ? "bg-[#232636] " : ""}${
            select == 3 ? "bg-white " : ""
          } rounded-3xl `}
        >
          {select == 3 ? (
            <div className=" absolute left-[25px]  top-[5%] h-[90%] w-[750px]">
              <h1 className={`relative    font-semibold  text-[22px] px-3`}>موبایل و دیزاین</h1>
              <div
                className={`border-b-[1px] opacity-1 border-black ${
                  select == 3 ? "opacity-1" : "opacity-0"
                }animated_line`}
              ></div>
              <div className="flex flex-col justify-between w-full h-full">
                <div className="flex justify-evenly py-10">
                  <div className="w-[70px] gap-4 h-[70px] flex   items-center flex-col">
                    <img src="../../../Images/ui_mobile/dart.svg" alt="" />
                    <p className="text-[12px]">Dart</p>
                  </div>
                  <div className="w-[70px] gap-4 h-[70px] flex   items-center flex-col">
                    <img src="../../../Images/ui_mobile/flutter.svg" alt="" />
                    <p className="text-[12px]">Flutter</p>
                  </div>
                  <div className="w-[70px] gap-4 h-[70px] flex   items-center flex-col">
                    <img src="../../../Images/ui_mobile/figma.svg" alt="" />
                    <p className="text-[12px]">Figma</p>
                  </div>
                  <div className="w-[70px] gap-4 h-[70px] flex   items-center flex-col">
                    <img src="../../../Images/ui_mobile/sketch.svg" alt="" />
                    <p className="text-[12px]">Sketch</p>
                  </div>

                  <div className="w-[70px] gap-4 h-[70px] flex   items-center flex-col">
                    <img src="../../../Images/ui_mobile/xd.svg" alt="" />
                    <p className="text-[12px]">Adobe Xd</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2"></div>
            </div>
          ) : (
            <div className="cursor-pointer  animated_t3 -rotate-90 text-white text-[30px] absolute -left-[40px]">
              موبایل و دیزاین
            </div>
          )}
        </div>
        <div
          onClick={() => {
            setselect(2);
          }}
          className={` cursor-pointer absolute left-[100px] flex justify-center items-center animated w-[800px]  h-[450px]  ${
            select == 1 ? "bg-[#444757] " : ""
          }${select == 2 ? "bg-white " : ""}${
            select == 3 ? "bg-[#444757] left-[800px]" : ""
          } rounded-3xl  z-[2] `}
        >
          {select == 2 ? (
            <div className=" absolute left-[25px]  top-[5%] h-[90%] w-[750px]">
              <h1 className="relative  font-semibold text-[22px] px-3">بک اند </h1>
              <div className="border-b-[1px] opacity-1 border-black animated_line"></div>
              <div className="flex justify-evenly pt-10">
                <div className="w-[70px] gap-4 justify-between flex items-center flex-col">
                  <img
                    src="../../../Images/backend/c.svg"
                    className="w-full h-auto"
                    alt=""
                  />
                  <p className="text-[12px]">C#</p>
                </div>
                <div className="w-[70px] gap-4 justify-between  flex  items-center flex-col">
                  <img src="../../../Images/backend/dotnetcore.svg" alt="" />
                  <p className="text-[12px]">.Net Core</p>
                </div>
                <div className="w-[70px] gap-4 justify-between  flex items-center flex-col">
                  <img src="../../../Images/backend/mysql.svg" alt="" />
                  <p className="text-[12px]">My Sql</p>
                </div>

                <div className="w-[70px] gap-4 justify-between  flex items-center flex-col">
                  <img src="../../../Images/backend/mongo.svg" alt="" />
                  <p className="text-[12px]">Mongo Db</p>
                </div>
                <div className="w-[70px] gap-4 justify-between  flex items-center flex-col">
                  <img src="../../../Images/backend/dot-net.svg" alt="" />
                  <p className="text-[12px] text-center">.Net FrameWork</p>
                </div>
              </div>
              {/* <div className="flex justify-evenly py-10">
                <div className="w-[70px] gap-4 h-[70px] flex   items-center flex-col">
                  <img src="../../../Images/next.svg" alt="" />
                  <p className="text-[12px]">Next.js</p>
                </div>
                <div className="w-[70px] gap-4 h-[70px] flex   items-center flex-col">
                  <img src="../../../Images/node.svg" alt="" />
                  <p className="text-[12px]">Node.js</p>
                </div>
                <div className="w-[70px] gap-4 h-[70px] flex   items-center flex-col">
                  <img src="../../../Images/vue.svg" alt="" />
                  <p className="text-[12px]">Vue.js</p>
                </div>

                <div className="w-[70px] gap-4 h-[70px] flex   items-center flex-col">
                  <img src="../../../Images/tailwind.svg" alt="" />
                  <p className="text-[12px]">Tailwind</p>
                </div>
                <div className="w-[70px] gap-4 h-[70px] flex   items-center flex-col">
                  <img src="../../../Images/angular.svg" alt="" />
                  <p className="text-[12px]">Angular</p>
                </div>
              </div> */}
              <div className="flex gap-2"></div>
            </div>
          ) : (
            <div className="cursor-pointer  animated_t2 -rotate-90 text-white text-[30px] absolute left-[15px]">
              بک اند
            </div>
          )}
        </div>
        <div
          onClick={() => {
            setselect(1);
          }}
          className={` cursor-pointer absolute left-[200px] flex justify-center items-center animated w-[800px]  h-[450px] ${
            select == 1 ? "bg-white  rounded-3xl  " : ""
          }${select == 2 ? "bg-[#444757] left-[900px]" : ""}${
            select == 3 ? "bg-[#232636] left-[900px]" : ""
          } rounded-3xl  z-[3] `}
        >
          {select == 1 ? (
            <div className=" absolute left-[25px] top-[5%] h-[90%] w-[750px]">
              <h1 className="relative  font-semibold px-3 text-[22px]">فرانت اند </h1>
              <div className="border-b-[1px] opacity-1 border-black animated_line"></div>
              <div className="w-full h-full flex flex-col gap-10">
                <div className="flex justify-evenly py-10">
                  <div className="w-[70px] gap-4 h-[70px] flex   items-center flex-col">
                    <img src="../../../Images/react.svg" alt="" />
                    <p className="text-[12px]">React</p>
                  </div>
                  <div className="w-[70px] gap-4 h-[70px] flex   items-center flex-col">
                    <img src="../../../Images/ts.svg" alt="" />
                    <p className="text-[12px]">Type Script</p>
                  </div>
                  <div className="w-[70px] gap-4 h-[70px] flex   items-center flex-col">
                    <img src="../../../Images/js.svg" alt="" />
                    <p className="text-[12px]">Java Script</p>
                  </div>

                  <div className="w-[70px] gap-4 h-[70px] flex   items-center flex-col">
                    <img src="../../../Images/css.svg" alt="" />
                    <p className="text-[12px]">Css</p>
                  </div>
                  <div className="w-[70px] gap-4 h-[70px] flex   items-center flex-col">
                    <img src="../../../Images/html.svg" alt="" />
                    <p className="text-[12px]">Html</p>
                  </div>
                </div>
                <div className="flex justify-evenly py-10">
                  <div className="w-[70px] gap-4 h-[70px] flex   items-center flex-col">
                    <img src="../../../Images/next.svg" alt="" />
                    <p className="text-[12px]">Next.js</p>
                  </div>
                  <div className="w-[70px] gap-4 h-[70px] flex   items-center flex-col">
                    <img src="../../../Images/node.svg" alt="" />
                    <p className="text-[12px]">Node.js</p>
                  </div>
                  <div className="w-[70px] gap-4 h-[70px] flex   items-center flex-col">
                    <img src="../../../Images/vue.svg" alt="" />
                    <p className="text-[12px]">Vue.js</p>
                  </div>

                  <div className="w-[70px] gap-4 h-[70px] flex   items-center flex-col">
                    <img src="../../../Images/tailwind.svg" alt="" />
                    <p className="text-[12px]">Tailwind</p>
                  </div>
                  <div className="w-[70px] gap-4 h-[70px] flex   items-center flex-col">
                    <img src="../../../Images/angular.svg" alt="" />
                    <p className="text-[12px]">Angular</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2"></div>
            </div>
          ) : (
            <div className="cursor-pointer  animated_t1 -rotate-90 text-white text-[30px] absolute left-[0px]">
              فرانت اند
            </div>
          )}
        </div>
      </div>
      <div className="relative lg:hidden bg-[#232636] shadow-2xl overflow-hidden  h-[580px] rounded-bl-xl rounded-tl-2xl rounded-tr-2xl rounded-br-2xl flex gap-1 mx-auto w-[335px]">
        <div
          onClick={() => {
            setselectitem(1);
          }}
          className={`
          absolute
          ${selectitem == 1 ? "top-[0%] bg-white" : "top-[0%]"} 
          ${selectitem == 2 ? "bg-[#232636]" : ""} 
          ${selectitem == 3 ? "bg-[#232636]" : ""}  
           w-full  h-[500px] flex flex-col rounded-tr-2xl animated rounded-tl-2xl`}
        >
          <div
            className={`h-[40px] w-full  ${
              selectitem == 1 ? " text-black" : "text-white bg-[#232636]"
            } flex justify-around items-center `}
          >
            <p
              className={`w-[80%] flex justify-center items-center py-2 ${
                selectitem == 1 ? "border-b-[1px]" : ""
              }   border-black`}
            >
              فرانت اند
            </p>
          </div>
          <div className=" w-full h-full flex p-3 flex-col justify-around ">
            <div className="flex justify-around">
              <div className="w-[50px] gap-4 h-[50px] flex   items-center flex-col">
                <img src="../../../Images/react.svg" alt="" />
                <p className="text-[10px]">React</p>
              </div>
              <div className="w-[50px] gap-4 h-[50px] flex   items-center flex-col">
                <img src="../../../Images/ts.svg" alt="" />
                <p className="text-[10px]">Type Script</p>
              </div>
              <div className="w-[50px] gap-4 h-[50px] flex   items-center flex-col">
                <img src="../../../Images/js.svg" alt="" />
                <p className="text-[10px]">Java Script</p>
              </div>
            </div>
            <div className="flex justify-around">
              <div className="w-[50px] gap-4 h-[50px] flex   items-center flex-col">
                <img src="../../../Images/css.svg" alt="" />
                <p className="text-[10px]">Css</p>
              </div>
              <div className="w-[50px] gap-4 h-[50px] flex   items-center flex-col">
                <img src="../../../Images/html.svg" alt="" />
                <p className="text-[10px]">Html</p>
              </div>
              <div className="w-[50px] gap-4 h-[50px] flex   items-center flex-col">
                <img src="../../../Images/next.svg" alt="" />
                <p className="text-[10px]">Next.js</p>
              </div>
            </div>
            <div className="flex justify-around">
              <div className="w-[50px] gap-4 h-[50px] flex   items-center flex-col">
                <img src="../../../Images/node.svg" alt="" />
                <p className="text-[10px]">Node.js</p>
              </div>
              <div className="w-[50px] gap-4 h-[50px] flex   items-center flex-col">
                <img src="../../../Images/vue.svg" alt="" />
                <p className="text-[10px]">Vue.js</p>
              </div>

              <div className="w-[50px] gap-4 h-[50px] flex   items-center flex-col">
                <img src="../../../Images/tailwind.svg" alt="" />
                <p className="text-[10px]">Tailwind</p>
              </div>
            </div>
            <div className="flex justify-around">
              <div className="w-[50px] gap-4 h-[50px] flex   items-center flex-col">
                <img src="../../../Images/angular.svg" alt="" />
                <p className="text-[10px]">Angular</p>
              </div>
            </div>
          </div>
        </div>
        {/* ///////////////////////////////////////////////////////////// */}
        <div
          onClick={() => {
            setselectitem(2);
          }}
          className={`
          absolute
              ${
                selectitem == 1
                  ? "top-[500px] bg-[#444757] h-[40px] rounded-b-3xl "
                  : ""
              }
              ${selectitem == 2 ? "top-[40px] bg-white h-[500px]" : ""}
              ${
                selectitem == 3
                  ? "top-[40px] bg-[#444757] h-[40px] rounded-t-3xl"
                  : ""
              }

           w-full flex flex-col animated `}
        >
          <div
            className={`h-[40px] w-full   ${
              selectitem == 2 ? "text-black" : "text-white"
            } flex justify-around items-center rounded-b-3xl`}
          >
            <p
              className={`w-[80%] flex justify-center items-center py-2 ${
                selectitem == 2 ? "border-b-[1px]" : ""
              }   border-black`}
            >
              سئو
            </p>
          </div>
          <div
            className={`${
              selectitem == 2 ? "" : "hidden"
            } w-full h-full flex p-3 flex-col gap-7 `}
          >
            <div className="flex justify-around ">
              <div className="w-[50px] gap-4 justify-between flex items-center flex-col">
                <img
                  src="../../../Images/backend/c.svg"
                  className="w-full h-auto"
                  alt=""
                />
                <p className="text-[10px]">C#</p>
              </div>
              <div className="w-[50px] gap-4 justify-between  flex  items-center flex-col">
                <img src="../../../Images/backend/dotnetcore.svg" alt="" />
                <p className="text-[10px]">.Net Core</p>
              </div>
              <div className="w-[50px] gap-4 justify-between  flex items-center flex-col">
                <img src="../../../Images/backend/mysql.svg" alt="" />
                <p className="text-[10px]">My Sql</p>
              </div>
            </div>
            <div className="flex justify-around">
              <div className="w-[50px] gap-4 justify-between  flex items-center flex-col">
                <img src="../../../Images/backend/mongo.svg" alt="" />
                <p className="text-[10px]">Mongo Db</p>
              </div>
              <div className="w-[50px] gap-4 justify-between  flex items-center flex-col">
                <img src="../../../Images/backend/dot-net.svg" alt="" />
                <p className="text-[10px] text-center">.Net FrameWork</p>
              </div>
              <div className="w-[50px] gap-4 justify-between  flex items-center flex-col"></div>
            </div>
          </div>
        </div>
        {/* ////////////////////////////////////////////////////////////// */}
        <div
          onClick={() => {
            setselectitem(3);
          }}
          className={`
          absolute
              ${selectitem == 1 ? "top-[540px] " : ""}
              ${selectitem == 2 ? "top-[540px] " : ""}
              ${selectitem == 3 ? "top-[80px] bg-white " : ""}
           w-full h-[500px] flex flex-col animated `}
        >
          <div
            className={`h-[40px] w-full  ${
              selectitem == 3 ? "text-black " : "text-white bg-[#232636]"
            } flex justify-around items-center `}
          >
            <p
              className={`w-[80%] flex justify-center items-center py-2 ${
                selectitem == 3 ? "border-b-[1px]" : ""
              }   border-black`}
            >
              طراحی سایت
            </p>
          </div>
          <div
            className={`${
              selectitem == 3 ? "" : "hidden"
            } w-full h-full flex p-3 flex-col gap-14 `}
          >
            <div className="flex justify-around ">
              <div className="w-[50px] gap-4 h-[50px] flex   items-center flex-col">
                <img src="../../../Images/ui_mobile/dart.svg" alt="" />
                <p className="text-[12px]">Dart</p>
              </div>
              <div className="w-[50px] gap-4 h-[50px] flex   items-center flex-col">
                <img src="../../../Images/ui_mobile/flutter.svg" alt="" />
                <p className="text-[12px]">Flutter</p>
              </div>
              <div className="w-[50px] gap-4 h-[50px] flex   items-center flex-col">
                <img src="../../../Images/ui_mobile/figma.svg" alt="" />
                <p className="text-[12px]">Figma</p>
              </div>
            </div>
            <div className="flex justify-around ">
              <div className="w-[50px] gap-4 h-[50px] flex   items-center flex-col">
                <img src="../../../Images/ui_mobile/sketch.svg" alt="" />
                <p className="text-[12px]">Sketch</p>
              </div>

              <div className="w-[50px] gap-4 h-[50px] flex   items-center flex-col">
                <img src="../../../Images/ui_mobile/xd.svg" alt="" />
                <p className="text-[12px]">Adobe Xd</p>
              </div>
              <div className="w-[50px] gap-4 h-[50px] flex   items-center flex-col"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teq_according;
