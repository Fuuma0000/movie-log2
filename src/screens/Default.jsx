import React from "react";
import Header from "../screens//Header";
import SideBar from "../screens//SideBar";
import { useState } from "react";
import Movies from "./Movies";
import ClosedSideBar from "./ClosedSideBar";

import AddMovieScreen from "../screens/AddMovieScreen";

const Default = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleSideBarOpen = () => {
    setOpenSideBar(!openSideBar);
  };

  return (
    <div className='bg-main'>
      {/* サイドバーの表示非表示 */}
      <div>{openSideBar ? <SideBar /> : <ClosedSideBar />}</div>
      <Header handleSideBarOpen={handleSideBarOpen} />
      {/* テスト用にMoviesは非表示 */}
      {/* <Movies /> */}
      <AddMovieScreen></AddMovieScreen>
    </div>
  );
};

export default Default;
