import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

// import { LeftArrow, RightArrow } from "./arrows";
import { Card } from "./card";
// import { Footer } from "./footer";
// import { Header } from "./header";


import useDrag from "./useDrag";
import usePreventBodyScroll from "./usePreventBodyScroll";
import { getAllblogs } from "@/DataService/BlogPageProvider";

// NOTE: embrace power of CSS flexbox!
// import "./hideScrollbar.css";
// import "./firstItemMargin.css";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = "test";
const getId = (index: number) => `${elemPrefix}${index}`;

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

function SubjectBlogs() {
  const [items] = React.useState(getItems);

  // NOTE: for drag by mouse
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
    getAllblogs(2)
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
      <div className="example " style={{ paddingTop: "10px" }}>
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
export default SubjectBlogs;

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
