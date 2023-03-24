import Title from "../components/Title";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import MenuIcon from "@mui/icons-material/Menu";

import SearchIcon from "@mui/icons-material/Search";

const Header = ({ handleSideBarOpen }) => {
  return (
    <>
      <header className='bg-d9'>
        <nav className='flex'>
          <button onClick={handleSideBarOpen} className='px-4'>
            <MenuIcon sx={{ fontSize: "32px" }} className='cursor-pointer' />
          </button>
          <div className='flex-1 py-4'>
            <Title />
          </div>
          <div className='space-x-4 pt-5 pr-4 sm:p-4'>
            <button onClick={() => console.log("aaa")}>
              <SearchIcon sx={{ fontSize: "32px" }} />
            </button>
            <button>
              <HelpIcon sx={{ fontSize: "32px" }} />
            </button>
            <button>
              <SettingsIcon sx={{ fontSize: "32px" }} />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
