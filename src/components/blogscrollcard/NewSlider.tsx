import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { Card } from "./card";
import useDrag from "./useDrag";
import usePreventBodyScroll from "./usePreventBodyScroll";
import { getRecentblogs } from "@/DataService/BlogPageProvider";
type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;
const elemPrefix = "test";
const getId = (index: number) => `${elemPrefix}${index}`;
const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

function NewSlider() {
  const [items] = React.useState(getItems);
  const { dragStart, dragStop, dragMove, dragging } = useDrag();
  const handleDrag = ({ scrollContainer }: scrollVisibilityApiType) => (
    ev: React.MouseEvent
  ) =>
    dragMove(ev, (posDiff) => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollLeft += posDiff;
      }
    });

  const [selected, setSelected] = React.useState<string>("");
  const handleItemClick = (itemId: string) => () => {
    if (dragging) {
      return false;
    }
    setSelected(selected !== itemId ? itemId : "");
  };
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  const [Data, setData]: any = useState([]);
  useEffect(() => {
    getRecentblogs(2)
      .then((Response) => {
        console.log(Response);
        setData(Response.data.dataList);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <>
      <div className="example bg-[#444757]  h-auto w-[97%] lg:w-[90%] rounded-[20px] py-12 lg:px-6" style={{ paddingTop: "10px" }}>
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
          <ScrollMenu
            RTL={true}
            // LeftArrow={LeftArrow}
            // RightArrow={RightArrow}
            onWheel={onWheel}
            onMouseDown={() => dragStart}
            onMouseUp={() => dragStop}
            onMouseMove={handleDrag}
          >
            {Data.length > 0 && Data.map(( item : any) => (
                  <Card
                  item={item}
                  // itemId={item} // NOTE: itemId is required for track items
                  // key={item}
                  // onClick={handleItemClick(id)}
                  // selected={id === selected}
                />
            ))}
          </ScrollMenu>
        </div>
      </div>
    </>
  );
}
export default NewSlider;

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}
