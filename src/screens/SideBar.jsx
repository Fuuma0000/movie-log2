import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckIcon from "@mui/icons-material/Check";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const SideBar = ({ openSideBar }) => {
  return (
    <div className='flex flex-col w-48 h-screen bg-d9 shadow rounded'>
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
        style={{ position: "absolute", bottom: 0 }}
      >
        <AddCircleOutlineIcon sx={{ fontSize: "40px" }}></AddCircleOutlineIcon>
        Add
      </div>
    </div>
  );
};

export default SideBar;
