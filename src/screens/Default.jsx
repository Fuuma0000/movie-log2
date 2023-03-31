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

  return (
    <>
      <SideBar openSideBar={openSideBar} />
      {/* <SmartPhoneSideBar openSideBar={openSideBar} /> */}
      {/* <div>
        {{} ? (
          <SideBar openSideBar={openSideBar} />
        ) : (
          // <SmartPhoneSideBar openSideBar={openSideBar} />
          <></>
        )}
      </div> */}
      <Header handleSideBarOpen={handleSideBarOpen} />
    </>
  );
};

export default Default;
