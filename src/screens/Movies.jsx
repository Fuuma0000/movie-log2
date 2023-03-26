import React from "react";
import ReactStarsRating from "react-awesome-stars-rating";

const Movies = () => {
  const movie = (
    <div className='px-6 py-4'>
      {/* 日付 */}
      <p className='font-bold text-gray-700 text-base mb-2 text-center'>
        2022/03/23
      </p>
      {/* 画像 */}
      <img
        className='w-full'
        src='https://cdn-ak.f.st-hatena.com/images/fotolife/p/peasemile/20190320/20190320191612.jpg'
        alt='アイアンマンのポスター'
      ></img>
      {/* タイトル */}
      <p className='font-bold text-gray-700 text-xl mb-2 text-center'>
        アイアンマン
      </p>
      {/* 評価 */}
      <ReactStarsRating
        isEdit={false}
        value={4.5}
        className='flex justify-center'
      ></ReactStarsRating>
    </div>
  );

  return (
    // テスト用に背景を黒くしている
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-black pl-0 pt-16 pr-0 sm:pr-12 sm:pl-14'>
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
  );
};

export default Movies;
