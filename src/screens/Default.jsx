import React from "react";
import Header from "../screens//Header";
import SideBar from "../screens//SideBar";
import { useState } from "react";
import Movies from "./Movies";

const Default = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleSideBarOpen = () => {
    setOpenSideBar(!openSideBar);
  };

  return (
    <div className='flex container'>
      {/* サイドバーとヘッダーが被らないようにするためのdiv */}
      <div className=''>
        {/* サイドバーの表示非表示 */}
        <div>{openSideBar ? <SideBar className='' /> : <></>}</div>
        <Header handleSideBarOpen={handleSideBarOpen} className='' />
      </div>
      <Movies className='flex-1'></Movies>
      {/* <button className='absolute bottom-80 right-28 bg-red-700'>
        aaaaaaaaa
      </button> */}
    </div>
  );
};

export default Default;
