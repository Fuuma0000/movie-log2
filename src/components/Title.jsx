import React from "react";
import { useNavigate } from "react-router-dom";

const Title = () => {
  const navigate = useNavigate();

  return (
    <div
      className='text-gray-300 text-3xl flex-1 py-4'
      onClick={() => navigate("/")}
    >
      MovieLog
    </div>
  );
};

export default Title;
