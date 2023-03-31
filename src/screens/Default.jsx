import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { useState, useEffect } from "react";

const Default = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleSideBarOpen = () => {
    setOpenSideBar(!openSideBar);
  };

  return (
    <>
      <SideBar openSideBar={openSideBar} />
      <Header handleSideBarOpen={handleSideBarOpen} />
    </>
  );
};

export default Default;
