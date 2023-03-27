import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useNavigate } from "react-router-dom";

const AddMovieButoon = () => {
  const navigate = useNavigate();
  return (
    <div
      className='mx-4 my-2 cursor-pointer flex items-center'
      style={{ position: "absolute", bottom: 0 }}
      onClick={() => navigate("/add")}
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
