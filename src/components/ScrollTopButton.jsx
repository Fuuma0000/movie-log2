import React from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const ScrollTopButton = () => {
  return (
    <div className='fixed bottom-20  right-6 text-white invisible sm:visible'>
      <button onClick={() => console.log("aaa")}>
        <ArrowCircleUpIcon sx={{ fontSize: "32px" }} />
      </button>
    </div>
  );
};

export default ScrollTopButton;
