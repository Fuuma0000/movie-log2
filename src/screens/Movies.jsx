import React from "react";
import Rating from "@mui/material/Rating";
import SearchButton from "../components/SearchButton";
import SortButton from "../components/SortButton";
import ScrollToTop from "../components/ScrollToTop";
import ScrollToButtom from "../components/ScrollToButtom";

const Movies = () => {
  const movie = (
    <div className='px-6 py-4 z-0'>
      {/* 日付 */}
      <p className='font-bold text-gray-300 text-base mb-2 text-center'>
        2022/03/23
      </p>
      {/* 画像 */}
      <img
        className='w-full'
        src='https://cdn-ak.f.st-hatena.com/images/fotolife/p/peasemile/20190320/20190320191612.jpg'
      ></img>
      {/* タイトル */}
      <p className='font-bold text-white text-xl mb-2 text-center'>
        アイアンマン
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
  );

  return (
    // テスト用に背景を黒くしている
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pl-0 pt-16 pr-0 sm:pr-12 sm:pl-14'>
        {movie}
        {movie}
        {movie}
        {movie}
        {movie}
        {movie}
        {movie}
        {movie}
        {movie}
      </div>
      <SearchButton></SearchButton>
      <SortButton />
      <ScrollToTop />
      <ScrollToButtom />
    </>
  );
};

export default Movies;
