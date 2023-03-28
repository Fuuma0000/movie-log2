import React from "react";
import Default from "./Default";

const HomeScreen = () => {
  return (
    <>
      <Default></Default>
      {/* <div className='group pl-0 pt-16 pr-0 sm:pr-12 sm:pl-14'> */}
      <div className='parentDiv hover:bg-gray-100 pl-0 pt-16 pr-0 sm:pr-12 sm:pl-14'>
        <div className='childDiv opacity-100 hover:opacity-0 transition duration-500 ease-in-out'>
          <p>子の div の文字</p>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
