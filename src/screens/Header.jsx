import Title from "../components/Title";
import MenuIcon from "@mui/icons-material/Menu";
import HelpButton from "../components/HelpButton";
import SearchButton from "../components/SearchButton";
import SetiingButton from "../components/SettingButton";
import InfoButton from "../components/InfoButton";

const Header = ({ handleSideBarOpen }) => {
  return (
    <>
      <header className='bg-myGray fixed w-full h-16'>
        <nav className='flex'>
          <button onClick={handleSideBarOpen} className='px-4'>
            <MenuIcon
              sx={{ fontSize: "32px" }}
              className='cursor-pointer text-iconColor'
            />
          </button>
          <Title />
          <div className='space-x-0 sm:space-x-4 pt-5 pr-4'>
            <SearchButton></SearchButton>
            <InfoButton></InfoButton>
            <HelpButton></HelpButton>
            <SetiingButton></SetiingButton>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
