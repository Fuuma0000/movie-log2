import React from "react";
import Header from "../screens//Header";
import SideBar from "../screens//SideBar";
import { useState } from "react";

const Default = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleSideBarOpen = () => {
    setOpenSideBar(!openSideBar);
  };

  return (
    <div>
      <Header handleSideBarOpen={handleSideBarOpen} />
      {openSideBar ? <SideBar /> : <></>}
      <body></body>
    </div>
  );
};

export default Default;
