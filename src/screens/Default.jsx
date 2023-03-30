import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { useState, useEffect } from "react";
import SmartPhoneSideBar from "./SmartPhoneSideBar";

const Default = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleSideBarOpen = () => {
    setOpenSideBar(!openSideBar);
  };

  const [isSmartPhone, setIsSmartPhone] = useState(false);

  return (
    <>
      <SideBar openSideBar={openSideBar} />
      {/* <SmartPhoneSideBar openSideBar={openSideBar} /> */}
      {/* <div>
        {isSmartPhone ? (
          <SmartPhoneSideBar openSideBar={openSideBar} />
        ) : (
          <SideBar openSideBar={openSideBar} />
        )}
      </div> */}
      <Header handleSideBarOpen={handleSideBarOpen} />
    </>
  );
};

export default Default;
