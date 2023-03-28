import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { useState, useEffect } from "react";
import SmartPhoneSideBar from "./SmartPhoneSideBar";
import { isMobile } from "react-device-detect";

const Default = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleSideBarOpen = () => {
    setOpenSideBar(!openSideBar);
  };

  console.log(process.env.React_APP_MOVIE_API_KEY);

  return (
    <>
      {/* <SideBar openSideBar={openSideBar} /> */}
      {/* <SmartPhoneSideBar openSideBar={openSideBar} /> */}
      <div>
        {{ isMobile } ? (
          <SideBar openSideBar={openSideBar} />
        ) : (
          // <SmartPhoneSideBar openSideBar={openSideBar} />
          <></>
        )}
      </div>
      <Header handleSideBarOpen={handleSideBarOpen} />
    </>
  );
};

export default Default;
