import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckIcon from "@mui/icons-material/Check";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const ClosedSideBar = () => {
  return (
    <div className='fixed w-14 top-16 bottom-0 left-0 bg-myGray invisible sm:visible cursor-pointer'>
      <div className='mx-4 my-4 cursor-pointer '>
        <VisibilityIcon sx={{ fontSize: "32px" }} />
      </div>
      <div className='mx-4 my-4 cursor-pointer '>
        <CheckIcon sx={{ fontSize: "32px" }} />
      </div>
      <div className='mx-4 my-4 cursor-pointer '>
        <CalendarTodayIcon sx={{ fontSize: "32px" }}></CalendarTodayIcon>
      </div>
      <div className='mx-4 my-4 cursor-pointer '>
        <SignalCellularAltIcon
          sx={{ fontSize: "32px" }}
        ></SignalCellularAltIcon>
      </div>
      <div
        className='mx-4 my-2 cursor-pointer '
        style={{ position: "absolute", bottom: 0 }}
      >
        <AddCircleOutlineIcon sx={{ fontSize: "32px" }}></AddCircleOutlineIcon>
      </div>
    </div>
  );
};

export default ClosedSideBar;
