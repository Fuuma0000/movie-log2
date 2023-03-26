import React from "react";
import InfoIcon from "@mui/icons-material/Info";

const InfoButton = () => {
  return (
    <button onClick={() => console.log("aaa")}>
      <InfoIcon className='text-iconColor' sx={{ fontSize: "32px" }} />
    </button>
  );
};

export default InfoButton;
