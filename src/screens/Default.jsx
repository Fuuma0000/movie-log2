import React from "react";
import Header from "../screens//Header";
import SideBar from "../screens//SideBar";
import { useState } from "react";
import Movies from "./Movies";
import MiniSideBar from "./MiniSideBar";

const Default = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleSideBarOpen = () => {
    setOpenSideBar(!openSideBar);
  };

  return (
    <div className=' '>
      {/* サイドバーの表示非表示 */}
      <div>{openSideBar ? <SideBar /> : <MiniSideBar />}</div>
      <Header handleSideBarOpen={handleSideBarOpen} className='' />
      <Movies></Movies>
      <button className='absolute bottom-80 right-28 bg-red-700'>
        aaaaaaaaa
      </button>
    </div>
  );
};

export default Default;
