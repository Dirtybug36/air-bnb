import React from "react";
import { ApiListingDetails } from "./ApiListingDetails";

interface Hotel {
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

interface AirbnbContainerProps {
  hotels: Hotel[]; // Define prop to accept hotel data fetched from Rapid API
}

export const ApiContainer: React.FC<AirbnbContainerProps> = ({ hotels }) => {
  // console.log(hotels);
  const hotelDetail = hotels.map((hotel: Hotel) => (
    <ApiListingDetails key={hotel.id} hotel={hotel} />
  ));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  2xl:grid-cols-6 xl:mx-12 lg:mx-12 md:mx-12 auto-cols-max sm:mx-12 mx-12 gap-3 ">
      {hotelDetail}
    </div>
  );
};
