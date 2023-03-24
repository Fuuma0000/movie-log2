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
    <div>
      <Header handleSideBarOpen={handleSideBarOpen} />
      {/* サイドバーの表示非表示 */}
      <div>{openSideBar ? <SideBar /> : <></>}</div>
      <Movies></Movies>
    </div>
  );
};

export default Default;
