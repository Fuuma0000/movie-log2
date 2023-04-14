import React from "react";

const Modal = ({ modalData, setModalData }) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center'>
      {/* モーダルのコンテンツ */}
      <div className='flex flex-col items-center justify-center w-1/2 p-1 bg-white'>
        <img
          className='h-96 '
          src={`https://image.tmdb.org/t/p/w1280${modalData.poster_path}`}
        ></img>
        <h2>{modalData.release_date}</h2>
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
