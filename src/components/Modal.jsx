import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Rating from "@mui/material/Rating";

const Modal = ({ modalData, setModalData }) => {
  const [dateValue, setDateValue] = useState(dayjs(modalData.release_date));
  const [rateValue, setRateValue] = useState(5);
  const [nameValue, setNameValue] = useState(modalData.original_title);

  const handleDateChange = (date) => {
    setDateValue(date);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center'>
      {/* モーダルのコンテンツ */}
      <div className='flex flex-col items-center justify-center w-1/2 p-1 bg-modal'>
        <img
          className='h-96'
          src={`https://image.tmdb.org/t/p/w1280${modalData.poster_path}`}
        />
        <ThemeProvider theme={darkTheme}>
          <TextField required label='Required' value={nameValue} />
        </ThemeProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ThemeProvider theme={darkTheme}>
            <DatePicker
              value={dateValue}
              onChange={handleDateChange}
              className='bg-date-picker border-cyan-300'
            />
          </ThemeProvider>
        </LocalizationProvider>
        <ThemeProvider theme={darkTheme}>
          <Rating
            value={rateValue}
            precision={0.5}
            onChange={(event, value) => {
              setRateValue(value);
            }}
          />
        </ThemeProvider>
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
