import Title from "../components/Title";
import MenuIcon from "@mui/icons-material/Menu";
import HelpButton from "../components/HelpButton";
import SearchButton from "../components/SearchButton";
import SetiingButton from "../components/SettingButton";

const Header = ({ handleSideBarOpen }) => {
  return (
    <>
      <header className='bg-d9'>
        <nav className='flex'>
          <button onClick={handleSideBarOpen} className='px-4'>
            <MenuIcon sx={{ fontSize: "32px" }} className='cursor-pointer' />
          </button>
          <Title />
          <div className='space-x-4 pt-5 pr-4 sm:p-4'>
            <SearchButton></SearchButton>
            <HelpButton></HelpButton>
            <SetiingButton></SetiingButton>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
