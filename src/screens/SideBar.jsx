import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckIcon from "@mui/icons-material/Check";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const SideBar = () => {
  return (
    <div className='fixed w-40 top-16 bottom-0 left-0 bg-myGray text-sidebar-letter-Color'>
      <div className='mx-4 my-4 cursor-pointer flex items-center'>
        <VisibilityIcon className='text-iconColor' sx={{ fontSize: "32px" }} />
        <div className='pl-4'>Plan</div>
      </div>
      <div className='mx-4 my-4 cursor-pointer flex items-center'>
        <CheckIcon className='text-iconColor' sx={{ fontSize: "32px" }} />
        <div className='pl-4'> Watched</div>
      </div>
      <div className='mx-4 my-4 cursor-pointer flex items-center'>
        <CalendarTodayIcon
          className='text-iconColor'
          sx={{ fontSize: "32px" }}
        />
        <div className='pl-4'>Calender</div>
      </div>
      <div className='mx-4 my-4 cursor-pointer flex items-center'>
        <SignalCellularAltIcon
          className='text-iconColor'
          sx={{ fontSize: "32px" }}
        />
        <div className='pl-4'>Log</div>
      </div>
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
    </div>
  );
};

export default SideBar;
