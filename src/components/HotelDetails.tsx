import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
    <div className="flex flex-col my-6 w-[350px]  border-none rounded-2xl relative ">
      <div className="flex flex-row justify-between absolute z-10">
        <div>Guest favorite</div>
        <div>like</div>
      </div>
      <div className=" border-none mb-2 object-fill overflow-hidden rounded-2xl  ">
        <Carousel infiniteLoop autoPlay={false} stopOnHover showThumbs={false}>
          {images}
        </Carousel>
      </div>
      <div className="flex flex-row justify-between ">
        <div>
          <p className="font-bold text-lg">{hotel.location}</p>
          <p className=" opacity-50">{hotel.days}</p>
          <p>{hotel.price}</p>
        </div>

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
