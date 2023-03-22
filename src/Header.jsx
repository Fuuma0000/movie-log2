import Title from "./Title";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import MenuIcon from "@mui/icons-material/Menu";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckIcon from "@mui/icons-material/Check";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { stagger, animate } from "framer-motion";
import { useState } from "react";
import { padding } from "@mui/system";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <header className='bg-d9 p-4 '>
        <nav className='flex'>
          <MenuIcon
            sx={{ fontSize: "40px" }}
            onClick={handleMenuOpen}
            className='cursor-pointer'
          />
          <div className='flex-1 pl-4'>
            <Title />
          </div>
          <div>
            <form class='flex w-full gap-2 md:max-w-md'>
              <input
                placeholder='Email'
                class='w-full flex-1 rounded border border-white bg-indigo-400 px-3 py-2 text-white placeholder-indigo-100 outline-none ring-indigo-300 transition duration-100 focus:ring'
              />

              <button class='inline-block rounded bg-white px-8 py-2 text-center text-sm font-semibold text-indigo-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:text-indigo-600 md:text-base'>
                Send
              </button>
            </form>
          </div>
          <div className='space-x-4 '>
            <HelpIcon sx={{ fontSize: "40px" }} />
            <SettingsIcon sx={{ fontSize: "40px" }} />
          </div>
        </nav>
      </header>
      {openMenu && (
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
            <AddCircleOutlineIcon
              sx={{ fontSize: "40px" }}
            ></AddCircleOutlineIcon>
            Add
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
