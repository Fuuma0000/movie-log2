import Title from "./Title";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import MenuIcon from "@mui/icons-material/Menu";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckIcon from "@mui/icons-material/Check";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import { stagger, animate } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <header className='bg-d9 p-4'>
        <nav className='flex'>
          <MenuIcon
            sx={{ fontSize: "40px" }}
            onClick={handleMenuOpen}
            className='cursor-pointer'
          />
          <div className='flex-1 pl-4'>
            <Title />
          </div>
          <div className='space-x-4'>
            <HelpIcon sx={{ fontSize: "40px" }} />
            <SettingsIcon sx={{ fontSize: "40px" }} />
          </div>
        </nav>
      </header>
      {openMenu && (
        <div className='absolute left-0 w-48 bg-d9 shadow rounded'>
          <div className='mx-4 my-2 cursor-pointer bg-white'>
            <VisibilityIcon sx={{ fontSize: "40px" }} />
            Plan
          </div>
          <div className='px-4 py-2  cursor-pointer'>
            <CheckIcon sx={{ fontSize: "40px" }}></CheckIcon>
            Watched
          </div>
          <div className='px-4 py-2  cursor-pointer'>
            <CalendarTodayIcon sx={{ fontSize: "40px" }}></CalendarTodayIcon>
            Calender
          </div>
          <div className='px-4 py-2  cursor-pointer'>
            <SignalCellularAltIcon
              sx={{ fontSize: "40px" }}
            ></SignalCellularAltIcon>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
