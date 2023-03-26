import React from "react";
import Header from "../screens//Header";
import SideBar from "../screens//SideBar";
import { useState } from "react";
import Movies from "./Movies";
import ClosedSideBar from "./ClosedSideBar";
import SortButton from "../components/SortButton";
import ScrollTopButton from "../components/ScrollTopButton";
import ScrollButtomButoon from "../components/ScrollButtomButoon";

const Default = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleSideBarOpen = () => {
    setOpenSideBar(!openSideBar);
  };

  return (
    <>
      {/* サイドバーの表示非表示 */}
      <div>{openSideBar ? <SideBar /> : <ClosedSideBar />}</div>
      <Header handleSideBarOpen={handleSideBarOpen} />
      <Movies />
      <SortButton />
      <ScrollTopButton />
      <ScrollButtomButoon />
    </>
  );
};

export default Default;
