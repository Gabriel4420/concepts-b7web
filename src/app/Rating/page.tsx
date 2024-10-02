"use client";
import RoundInput from "@/components/Input";
import StarEmoji from "@/components/StarEmoji";
import { useState } from "react";

const Rating: React.FC = () => {
  const [rating, setRating] = useState(0);
  return (
    <div className="h-screen bg-gradient-to-tr to-orange-500 from-slate-500 gap-10 flex flex-col items-center justify-center">
      <h1 className="font-bold leading-relaxed text-5xl text-white text-center ">
        ⭐ <br />
        Rating Stars
      </h1>
      <div className="w-full p-2 md:w-1/2">
        <RoundInput
          isSearchOrSender="sender"
          min={0}
          max={5}
          type="number"
          value={rating}
          onChange={(e: any) => setRating(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-center w-full">
        <p className="text-6xl">
          {rating == 0 ? (
            ""
          ) : rating == 1 ? (
            <StarEmoji number={rating} />
          ) : rating == 2 ? (
            <>
              <StarEmoji number={rating - 1} />
              <StarEmoji number={rating} />
            </>
          ) : rating == 3 ? (
            <>
              <StarEmoji number={rating - 2} />
              <StarEmoji number={rating - 1} />
              <StarEmoji number={rating} />
            </>
          ) : rating == 4 ? (
            <>
              <StarEmoji number={rating - 3} />
              <StarEmoji number={rating - 2} />
              <StarEmoji number={rating - 1} />
              <StarEmoji number={rating} />
            </>
          ) : (
            <>
              <StarEmoji number={rating - 4} />
              <StarEmoji number={rating - 3} />
              <StarEmoji number={rating - 2} />
              <StarEmoji number={rating - 1} />
              <StarEmoji number={rating} />
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Rating;
