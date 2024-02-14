import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiOutlineHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";
import { useState } from "react";
import StarRating from "../modal/StarRating";
interface dataProps {
  id: number;
  locationImages: {
    id: number;
    url: string;
  }[];
  location: string;
  days: string;
  price: string;
  isNew: boolean;
  rating: number;
}

interface HotelDetailsProps {
  hotel: dataProps;
}
export const HotelDetails: React.FC<HotelDetailsProps> = ({ hotel }) => {
  const images = hotel.locationImages.map((image) => {
    return <img alt="bnb" key={image.id} src={image.url} />;
  });
  //change the color of the heart when clicked
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const notify = () =>
    toast("Added to Favorites", {
      duration: 2000,
      position: "top-center",

      // Styling
      style: { color: "red" },
      className: "",

      // Custom Icon
      icon: "👏",

      // Change colors of success/error/loading icon
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },

      // Aria
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });

  const [NumberRating, setNumberRating] = useState<number>(hotel.rating);

  return (
    // must be flex col
    <div className="flex flex-col  overflow-hidden rounded-2xl m-auto w-full gap-2 >">
      {/* for image */}
      <div className="object-fit min-w-full relative ">
        <Carousel infiniteLoop autoPlay={false} stopOnHover showThumbs={false}>
          {images}
        </Carousel>

        <div className=" absolute z-10 left-1 top-1">
          {NumberRating >= 3 && (
            <p
              className={`rounded-2xl p-1 cursor-pointer
               ${isClicked ? "bg-red-400 text-white " : " bg-white  "}`}
            >
              Guest favorite
            </p>
          )}
        </div>
        <div
          onClick={handleClick}
          className="absolute z-10 right-1  top-1 border-none cursor-pointer bg-transparent   text-white duration-[0.2s_all]   active:scale-90   "
        >
          <AiOutlineHeart
            size={30}
            onClick={notify}
            style={{ color: isClicked ? "red" : "white" }}
          />
        </div>
      </div>
      {/* for text below the image // must be flex row */}
      <div className="flex flex-row  justify-between truncate ">
        {/* for image info */}
        <div className=" line-clamp-3  ">
          <p className="font-bold  text-base ">{hotel.location}</p>
          <p className=" opacity-50">{hotel.days}</p>
          <p>€{hotel.price}</p>
        </div>
        {/* for ratings */}
        <div className="flex flex-row gap-1 ">
          <span>
            <StarRating numberofStars={setNumberRating} stars={hotel.rating} />

            {/* <FaStar size={20} /> */}
          </span>
          {/* <span>{NumberRating} </span> */}
        </div>
      </div>
    </div>
  );
};
