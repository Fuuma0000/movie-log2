import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckIcon from "@mui/icons-material/Check";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const MiniSideBar = () => {
  return (
    <div className='fixed  w-16 expect-header bg-myGray'>
      <div className='mx-4 my-4 cursor-pointer '>
        <VisibilityIcon sx={{ fontSize: "40px" }} />
      </div>
      <div className='mx-4 my-4 cursor-pointer '>
        <CheckIcon sx={{ fontSize: "40px" }} />
      </div>
      <div className='mx-4 my-4 cursor-pointer '>
        <CalendarTodayIcon sx={{ fontSize: "40px" }}></CalendarTodayIcon>
      </div>
      <div className='mx-4 my-4 cursor-pointer '>
        <SignalCellularAltIcon
          sx={{ fontSize: "40px" }}
        ></SignalCellularAltIcon>
      </div>
      <div
        className='mx-4 my-2 cursor-pointer '
        style={{ position: "absolute", bottom: 0 }}
      >
        <AddCircleOutlineIcon sx={{ fontSize: "40px" }}></AddCircleOutlineIcon>
      </div>
    </div>
  );
};

export default MiniSideBar;
