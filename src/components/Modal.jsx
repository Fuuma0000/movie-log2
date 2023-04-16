import React from "react";
import { useState } from "react";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Modal = ({ modalData, setModalData }) => {
  const [value, setValue] = useState(dayjs(modalData.release_date));

  const handleDateChange = (date) => {
    setValue(date);
  };

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center'>
      {/* モーダルのコンテンツ */}
      <div className='flex flex-col items-center justify-center w-1/2 p-1 bg-sub'>
        <img
          className='h-96'
          src={`https://image.tmdb.org/t/p/w1280${modalData.poster_path}`}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker value={value} onChange={handleDateChange} />
        </LocalizationProvider>

        <h2>{modalData.original_title}</h2>
        <button
          className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full'
          onClick={() => setModalData(null)}
        >
          close
        </button>
      </div>
    </div>
  );
};

export default Modal;
