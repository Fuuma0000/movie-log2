import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckIcon from "@mui/icons-material/Check";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const SideBar = () => {
  return (
    <div className='fixed  w-48 h-full bg-myGray shadow '>
      <div className='mx-4 my-4 cursor-pointer '>
        <VisibilityIcon sx={{ fontSize: "40px" }} />
        Plan
      </div>
      <div className='mx-4 my-4 cursor-pointer '>
        <CheckIcon sx={{ fontSize: "40px" }} />
        Plan
      </div>
      <div className='mx-4 my-4 cursor-pointer '>
        <CalendarTodayIcon sx={{ fontSize: "40px" }}></CalendarTodayIcon>
        Calender
      </div>
      <div className='mx-4 my-4 cursor-pointer '>
        <SignalCellularAltIcon
          sx={{ fontSize: "40px" }}
        ></SignalCellularAltIcon>
        Log
      </div>
      <div
        className='mx-4 my-2 cursor-pointer '
        style={{ position: "absolute", bottom: 80 }}
      >
        <AddCircleOutlineIcon sx={{ fontSize: "40px" }}></AddCircleOutlineIcon>
        Add
      </div>
    </div>
  );
};

export default SideBar;
