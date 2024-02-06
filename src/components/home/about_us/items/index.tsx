function Items(props:any) {
  return (
    <div className="About_us_item pl-[15px] md:my-0 text-justify  flex py-8 flex-col items-center gap-6">
      <img className="w-[200px] md:w-[280px] " src={props.url} alt="" />
      <h1 className=" text-[21px] font-bold">{props.title}</h1>
      <p className="text-[14px] px-5 w-[250px]">{props.description}</p>
    </div>
  );
}

export default Items;
