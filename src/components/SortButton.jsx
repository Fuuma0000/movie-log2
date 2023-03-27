import React from "react";
import SortIcon from "@mui/icons-material/Sort";

const SortButton = () => {
  return (
    <div className='fixed top-20 right-5 text-white rounded-full ring-2 ring-white invisible sm:visible'>
      <button className='' onClick={() => console.log("aaa")}>
        <SortIcon className='text-iconColor' sx={{ fontSize: "32px" }} />
      </button>
    </div>
  );
};

export default SortButton;
