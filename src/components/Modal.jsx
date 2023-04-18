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
      <div className='flex w-3/4 h-3/4 p-1 bg-modal justify-center'>
        <div className='flex w-full h-full justify-center'>
          <img
            className='h-full'
            src={`https://image.tmdb.org/t/p/w1280${modalData.poster_path}`}
          />
        </div>
        <div className='flex flex-col justify-between w-full h-full'>
          <ThemeProvider theme={darkTheme}>
            <TextField required label='Title' value={nameValue} />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={dateValue}
                label='Date'
                onChange={handleDateChange}
                className='bg-date-picker border-cyan-300'
              />
            </LocalizationProvider>
            <Rating
              value={rateValue}
              //TODO: 上に文字を表示させる
              name='Rate'
              precision={0.5}
              onChange={(event, value) => {
                setRateValue(value);
              }}
            />
            <TextField
              label='Comment'
              multiline
              rows={4}
              defaultValue='Default Value'
            />
          </ThemeProvider>
          <button
            className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full'
            onClick={() => setModalData(null)}
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
