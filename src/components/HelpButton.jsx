import React from "react";
import HelpIcon from "@mui/icons-material/Help";

const HelpButton = () => {
  return (
    <button>
      <HelpIcon className='text-iconColor' sx={{ fontSize: "32px" }} />
    </button>
  );
};

export default HelpButton;
