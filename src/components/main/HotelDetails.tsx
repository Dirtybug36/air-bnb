import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiOutlineHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
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

  return (
    // must be flex col
    <div className="flex flex-col  overflow-hidden rounded-2xl m-auto w-full gap-2 ">
      {/* for image */}
      <div className="object-fit min-w-full relative w-min">
        <Carousel infiniteLoop autoPlay={false} stopOnHover showThumbs={false}>
          {images}
        </Carousel>
        <div className=" absolute z-10 left-1 top-1">
          {hotel.isNew && (
            <p className=" bg-white rounded-2xl p-1 ">Guest favorite</p>
          )}
        </div>
        <div className="absolute z-10 right-1  top-1 border-none cursor-pointer bg-transparent   text-white duration-[0.2s_all]   active:scale-90  ">
          <AiOutlineHeart size={30} />
        </div>
      </div>
      {/* for text below the image // must be flex row */}
      <div className="flex flex-row  justify-between truncate ">
        {/* for image info */}
        <div className=" line-clamp-3  ">
          <p className="font-bold text-lg ">{hotel.location}</p>
          <p className=" opacity-50">{hotel.days}</p>
          <p>{hotel.price}</p>
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

// eslint-disable-next-line no-lone-blocks
{
  /*
for rapid api
interface hotelProp {
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
  hotel: hotelProp[];
} */
}
