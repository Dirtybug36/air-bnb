import { useEffect, useState } from "react";

interface ratingStarProps {
  starRating?: number;
  colorClass?: string;
  sizeClass?: string;
  message?: string[];
  defaultRating?: number;
  onTestRating?: (star: number) => void;
  numberofStars: (star: number) => void;
  stars: number;
}
const StarRating: React.FC<ratingStarProps> = ({
  // default color,starRating and size
  starRating = 5,
  colorClass = "text-red-400",
  sizeClass = "text-lg",
  message = [],

  numberofStars,
  onTestRating = () => {},
  stars,
}) => {
  const [star, setStar] = useState<number>(stars);
  useEffect(() => {
    numberofStars(star);
    console.log(star, "star");
  }, [star, numberofStars]);

  const [tempStar, setTempStar] = useState<number>(0);

  useEffect(() => {
    onTestRating(star);
  }, [star, onTestRating]);
  return (
    <div
      className={`flex gap-1 items-center align-top ${colorClass} ${sizeClass} `}
    >
      <div className="flex gap-1">
        {Array.from({ length: starRating }, (_, i) => (
          <Star
            key={i}
            rateStar={() => setStar(i + 1)}
            full={tempStar ? tempStar >= i + 1 : star >= i + 1}
            hoverOver={() => setTempStar(i + 1)}
            hoverOut={() => setTempStar(0)}
            colorClass={colorClass}
            sizeClass={sizeClass}
          />
        ))}
      </div>
      <p className="">
        {/* imp !! we are checking if the length is equal to starRating and displaying the message accordingly */}
        {message.length === starRating
          ? message[tempStar ? tempStar - 1 : star - 1]
          : tempStar || star || ""}
      </p>
    </div>
  );
};
interface starProp {
  rateStar: () => void;
  hoverOver: () => void;
  hoverOut: () => void;
  full: boolean;
  colorClass: string;
  sizeClass: string;
}
const Star: React.FC<starProp> = ({ rateStar, full, hoverOver, hoverOut }) => {
  return (
    <span
      className={`h-5 w-4 block `}
      onClick={rateStar}
      onMouseEnter={hoverOver}
      onMouseLeave={hoverOut}
      role="button"
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor" // Use "currentColor" for dynamic color, use to inherit parents color
          stroke="currentColor" // Use "currentColor" for dynamic color
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#000"
          stroke="#000"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )}
    </span>
  );
};

export default StarRating;
