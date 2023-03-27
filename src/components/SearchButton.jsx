import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchButton = () => {
  return (
    <div className='fixed top-32 right-5 text-white rounded-full ring-2 ring-white invisible sm:visible'>
      <button className='' onClick={() => console.log("aaa")}>
        <SearchIcon className='text-iconColor' sx={{ fontSize: "32px" }} />
      </button>
    </div>
  );
};

export default SearchButton;
