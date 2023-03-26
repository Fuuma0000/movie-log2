import React from "react";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

const ScrollButtomButoon = () => {
  return (
    <div className='fixed bottom-8 right-6 text-white invisible sm:visible'>
      <button onClick={() => console.log("aaa")}>
        <ArrowCircleDownIcon sx={{ fontSize: "32px" }} />
      </button>
    </div>
  );
};

export default ScrollButtomButoon;
