import React from "react";
import Header from "../screens//Header";
import SideBar from "../screens//SideBar";

const Default = () => {
  return (
    <>
      {/* サイドバーの表示非表示 */}
      <SideBar />
      <Header />
    </>
  );
};

export default Default;
