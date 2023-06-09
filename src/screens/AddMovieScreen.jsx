import React from "react";
import { useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Modal from "../components/Modal";
import ClearIcon from "@mui/icons-material/Clear";

const AddMovieScreen = () => {
  const [fetchData, setFetchData] = useState([]);
  const [modalData, setModalData] = useState(null);
  const ref = useRef();

  //フォームを送信した時のイベント
  const handleSubmit = (e) => {
    e.preventDefault();

    //APIURL
    const encoded = encodeURI(ref.current.value);
    const endpointURL =
      `https://api.themoviedb.org/3/search/movie?api_key=` +
      process.env.React_APP_MOVIE_API_KEY +
      `&language=ja-JA&query=${encoded}&page=1&include_adult=false`;
    //APIをたたく(データフェッチンぐ)
    fetch(endpointURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFetchData(data.results);
        console.log(data.results);
      });
  };

  //ポスターをクリックした時にModalを開く
  const posterClick = (data) => {
    setModalData(data);
  };

  const fromClear = () => {
    ref.current.value = "";
  };

  //ポスターのコンポーネント
  const Posters = ({ fetchData }) => {
    //データがない時の処理
    {
      if (fetchData.length === 0) {
        return (
          <div className='fixed top-36 bottom-0 left-0 right-0 sm:pr-12 sm:left-14'>
            <p className='text-center text-white text-2xl'>No Data</p>
          </div>
        );
      }
    }

    //データがある時の処理
    return (
      <>
        <div className='grid grid-cols-1 sm:grid-cols-2 bottom-0 md:grid-cols-4 gap-4 pl-0 pt-16 pr-0 sm:pr-12 sm:pl-14'>
          {fetchData.map((data) => (
            <div className='px-6 py-4 flex flex-col justify-between h-full'>
              {/* 日付 */}
              <p className='font-bold text-gray-300 text-base mb-2 text-center'>
                {data.release_date}
              </p>
              {/* 画像 */}
              <div className='flex justify-center items-center'>
                <img
                  className='w-auto h-auto max-h-full'
                  src={`https://image.tmdb.org/t/p/w1280${data.poster_path}`}
                  alt={data.original_title}
                />
              </div>
              {/* タイトル */}
              <p className='font-bold text-gray-200 text-xl mb-2 text-center'>
                {data.original_title}
              </p>
              {/* ポスターをクリックした時のイベント */}
              <button
                onClick={() => posterClick(data)}
                className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full w-full mt-auto'
              >
                登録する
              </button>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      <div className='pl-0 pt-16 pr-0 sm:pr-12 sm:pl-14 '>
        {/* 検索フォーム */}
        <form
          onSubmit={(e) => handleSubmit(e)}
          className='h-20 flex flex-col justify-center items-center'
        >
          <div className='relative rounded-md bg-gray-400 bg-opacity-25 w-2/5'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <SearchIcon className='h-5 w-5 text-gray-400' />
            </div>
            {/* 検索フォームの入力欄 */}
            <input
              className='w-full bg-transparent py-2 pl-10 pr-3 text-white placeholder-gray-400 focus:outline-none focus:placeholder-gray-500 focus:ring-0 sm:text-sm'
              type='text'
              placeholder='映画を探す'
              ref={ref}
            />
            <div
              className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer'
              onClick={() => fromClear()}
            >
              <ClearIcon className='h-5 w-5 text-gray-400' />
            </div>
          </div>
        </form>
        <Posters fetchData={fetchData} />

        {/* モーダル */}
        {modalData !== null && (
          <Modal modalData={modalData} setModalData={setModalData} />
        )}
      </div>
    </>
  );
};

export default AddMovieScreen;
