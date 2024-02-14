import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiOutlineHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";
interface dataProps {
  id: string;
  url: string;
  images: string[];
  price: {
    rate: number;
    currency: string;
  };
  rating: number;
  reviewsCount: number;
  address: string;
}

interface HotelDetailsProps {
  hotel: dataProps;
}
export const ApiListingDetails: React.FC<HotelDetailsProps> = ({ hotel }) => {
  const images = hotel.images.map((image) => {
    return <img alt="bnb" />;
  });

  const notify = () =>
    toast("Added to Favorites", {
      duration: 2000,
      position: "top-center",

      // Styling
      style: {},
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
  return (
    // must be flex col
    <div className="flex flex-col  overflow-hidden rounded-2xl m-auto w-full gap-2 ">
      {/* for image */}
      <div className="object-fit min-w-full relative w-min">
        <Carousel infiniteLoop autoPlay={false} stopOnHover showThumbs={false}>
          {images}
        </Carousel>
        <div className=" absolute z-10 left-1 top-1">
          {hotel.reviewsCount && (
            <p className=" bg-white rounded-2xl p-1 ">Guest favorite</p>
          )}
        </div>
        <div className="absolute z-10 right-1  top-1 border-none cursor-pointer bg-transparent   text-white duration-[0.2s_all]   active:scale-90   ">
          <AiOutlineHeart size={30} onClick={notify} />
        </div>
      </div>
      {/* for text below the image // must be flex row */}
      <div className="flex flex-row  justify-between truncate ">
        {/* for image info */}
        <div className=" line-clamp-3  ">
          <p className="font-bold text-lg ">{hotel.address}</p>
          <p className=" opacity-50"></p>
          <p></p>
        </div>
        {/* for ratings */}
        <div className="flex flex-row gap-1 ">
          <span>
            <FaStar size={20} />
          </span>
          <span>{hotel.rating} </span>
        </div>
      </div>
    </div>
  );
};
