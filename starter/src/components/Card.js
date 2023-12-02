import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
  let review = props.review;
  return (
    <div className="flex flex-col md:relative">
      <div className="absolute top-[-7rem] z-[10] mx-auto">
        <img
          className="aspect-square rounded-full w-[140px] h-[140px] z-[25] shadow-xl "
          src={review.image}
        />
        <div className="w-[140px] h-[140px] bg-violet-400 rounded-full absolute top-[-6px] z-[-20] left-[10px] shadow-2xl opacity-70"></div>
      </div>

      <div className="text-center mt-7">
        <h3 className=" font-bold text-2xl capitalize text-violet-950">
          {review.name}
        </h3>
      </div>

      <div className="text-center mt-7">
        <p className=" text-violet-300 uppercase text-lg">{review.job}</p>
      </div>

      <div className=" text-violet-600 mx-auto m-5">
        <FaQuoteLeft />
      </div>

      <div className=" text-center mt-4 text-slate-500">{review.text}</div>

      <div className=" text-violet-600 mx-auto m-5">
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default Card;
