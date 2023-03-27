import React from "react";
import { useRef, useState } from "react";
import Rating from "@mui/material/Rating";
import SearchIcon from "@mui/icons-material/Search";

const AddMovieScreen = () => {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    //APIURL
    const encoded = encodeURI(ref.current.value);
    const endpointURL = `https://api.themoviedb.org/3/search/movie?api_key=001ad79d51aa6743c0f707406925776e&language=ja-JA&query=${encoded}&page=1&include_adult=false`;
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
    return (
      <div>
        {fetchData.map((data) => (
          <div className='px-6 py-4'>
            {/* 日付 */}
            <p className='font-bold text-gray-300 text-base mb-2 text-center'>
              2022/03/23
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
            {/* 評価 */}
            <div className='flex justify-center'>
              <Rating
                name='half-rating-read'
                defaultValue={5}
                precision={0.5}
                readOnly
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className='pl-0 pt-20 pr-0 sm:pr-12 sm:pl-14'>
      <form onSubmit={(e) => handleSubmit(e)} className='text-center h-20 '>
        <div className='relative rounded-md bg-gray-400 bg-opacity-25 w-2/5 '>
          {/* 横の虫眼鏡 */}
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <SearchIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
          </div>
          <input
            className='block w-3/6 bg-transparent py-2 pl-10 pr-3 text-white placeholder-gray-400 focus:outline-none focus:placeholder-gray-300 focus:ring-0 sm:text-sm'
            type='text'
            placeholder='映画を探す'
            ref={ref}
          />
        </div>
      </form>
      <div className=''>
        {/* <div className='grid grid-cols-1 sm:grid-cols-2 bg-main bottom-0 md:grid-cols-4 gap-4 pl-0 pt-16 pr-0 sm:pr-12 sm:pl-14'> */}
        <Posters fetchData={fetchData} />
      </div>
    </div>
  );
};

export default AddMovieScreen;
