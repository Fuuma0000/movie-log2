import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const AddMovieButoon = () => {
  return (
    <div
      className='mx-4 my-2 cursor-pointer flex items-center'
      style={{ position: "absolute", bottom: 0 }}
    >
      <AddCircleOutlineIcon
        className='text-iconColor'
        sx={{ fontSize: "32px" }}
      />
      <div className='pl-4'>Add</div>
    </div>
  );
};

export default AddMovieButoon;
