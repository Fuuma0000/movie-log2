import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";

const SettingButton = () => {
  return (
    <button>
      <SettingsIcon className='text-iconColor' sx={{ fontSize: "32px" }} />
    </button>
  );
};

export default SettingButton;
