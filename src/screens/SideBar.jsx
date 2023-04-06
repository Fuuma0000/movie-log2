import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckIcon from "@mui/icons-material/Check";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const SideBar = ({ openSideBar }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsHovered(!isHovered);
  }, [openSideBar]);

  return (
    <div
      className={`fixed ${openSideBar ? "w-40" : "w-0"} ${
        isHovered ? "sm:w-40" : "sm:w-14"
      } top-16 bottom-0 left-0 bg-sub text-sidebar-letter-Color `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`mx-4 my-4 cursor-pointer flex items-center ${
          openSideBar ? "visited:" : "invisible"
        } sm:visible`}
        onClick={() => navigate("/plan")}
      >
        <VisibilityIcon
          className={`text-iconColor ${
            openSideBar ? "visited:" : "invisible"
          } sm:visible`}
          sx={{ fontSize: "32px" }}
        />
        <div className={`pl-4 opacity-100 ${!isHovered && "sm:opacity-0"}`}>
          Plan
        </div>
      </div>
      <div
        className={`mx-4 my-4 cursor-pointer flex items-center ${
          openSideBar ? "visited:" : "invisible"
        } sm:visible`}
      >
        <CheckIcon
          className={`text-iconColor ${
            openSideBar ? "visited:" : "invisible"
          } sm:visible`}
          sx={{ fontSize: "32px" }}
        />
        <div className={`pl-4 opacity-100 ${!isHovered && "sm:opacity-0"}`}>
          Watched
        </div>
      </div>
      <div
        className={`mx-4 my-4 cursor-pointer flex items-center ${
          openSideBar ? "visited:" : "invisible"
        } sm:visible`}
      >
        <CalendarTodayIcon
          className={`text-iconColor ${
            openSideBar ? "visited:" : "invisible"
          } sm:visible`}
          sx={{ fontSize: "32px" }}
        />
        <div className={`pl-4 opacity-100 ${!isHovered && "sm:opacity-0"}`}>
          Calender
        </div>
      </div>
      <div
        className={`mx-4 my-4 cursor-pointer flex items-center ${
          openSideBar ? "visited:" : "invisible"
        } sm:visible`}
      >
        <SignalCellularAltIcon
          className={`text-iconColor ${
            openSideBar ? "visited:" : "invisible"
          } sm:visible`}
          sx={{ fontSize: "32px" }}
        />
        <div className={`pl-4 opacity-100 ${!isHovered && "sm:opacity-0"}`}>
          Log
        </div>
      </div>
      <div
        className={`mx-4 my-4 cursor-pointer flex items-center ${
          openSideBar ? "visited:" : "invisible"
        } sm:visible`}
        style={{ position: "absolute", bottom: 0 }}
        onClick={() => navigate("/add")}
      >
        <AddCircleOutlineIcon
          className={`text-iconColor ${
            openSideBar ? "visited:" : "invisible"
          } sm:visible`}
          sx={{ fontSize: "32px" }}
        />
        <div className={`pl-4 opacity-100 ${!isHovered && "sm:opacity-0"}`}>
          Add
        </div>
      </div>
    </div>
  );
};

export default SideBar;
