import Title from "./Title";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className='bg-d9 p-4'>
      <nav className='flex justify-between mx-auto container'>
        <div className='flex items-center'>
          <MenuIcon
            sx={{ fontSize: "40px" }}
            onClick={handleMenuOpen}
            className='cursor-pointer'
          />
          <Title />
        </div>
        <div className='space-x-12 flex justify-center items-center'>
          <SettingsIcon sx={{ fontSize: "40px" }} />
          <HelpIcon sx={{ fontSize: "40px" }} />
        </div>
      </nav>
      {openMenu && (
        <div className='absolute top-16 left-0 w-48 bg-white shadow rounded py-2'>
          <div className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>
            Menu Item 1
          </div>
          <div className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>
            Menu Item 2
          </div>
          <div className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>
            Menu Item 3
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
