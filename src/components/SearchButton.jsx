import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchButton = () => {
  return (
    <button onClick={() => console.log("aaa")}>
      <SearchIcon className='text-iconColor' sx={{ fontSize: "32px" }} />
    </button>
  );
};

export default SearchButton;
