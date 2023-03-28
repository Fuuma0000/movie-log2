import React from "react";
import { useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Default from "./Default";

const AddMovieScreen = () => {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();
  //Postersを表示するかどうかの判定
  const [submited, setSubmited] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmited(true);

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

  const Posters = ({ fetchData }) => {
    {
      if (fetchData.length === 0) {
        return (
          <div className='fixed top-36 bottom-0 left-0 right-0 sm:pr-12 sm:left-14 bg-main'>
            {" "}
            <p className='text-center text-white text-2xl'>No Data</p>{" "}
          </div>
        );
      }
    }

    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 bg-main bottom-0 md:grid-cols-4 gap-4 pl-0 pt-16 pr-0 sm:pr-12 sm:pl-14'>
        {fetchData.map((data) => (
          <div className='px-6 py-4'>
            {/* 日付 */}
            <p className='font-bold text-gray-300 text-base mb-2 text-center'>
              {data.release_date}
            </p>
            {/* 画像 */}
            <img
              className='w-full'
              src={`https://image.tmdb.org/t/p/w1280${data.poster_path}`}
            ></img>
            {/* タイトル */}
            <p className='font-bold text-white text-xl mb-2 text-center'>
              {data.original_title}
            </p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <Default></Default>
      <div className='pl-0 pt-16 pr-0 sm:pr-12 sm:pl-14 z-0 bg-main'>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className='h-20 flex flex-col justify-center items-center'
        >
          <div className='relative rounded-md bg-gray-400 bg-opacity-25 w-2/5'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <SearchIcon className='h-5 w-5 text-gray-400' />
            </div>
            <input
              className='w-full bg-transparent py-2 pl-10 pr-3 text-white placeholder-gray-300 focus:outline-none focus:placeholder-gray-400 focus:ring-0 sm:text-sm'
              type='text'
              placeholder='映画を探す'
              ref={ref}
            />
          </div>
        </form>
        {/* SubMitedならPosetersを表示させる処理 */}
        {submited ? (
          <Posters fetchData={fetchData} />
        ) : (
          <div className='fixed top-36 bottom-0 left-0 right-0 sm:pr-12 sm:left-14 bg-main'></div>
        )}
      </div>
    </>
  );
};

export default AddMovieScreen;
