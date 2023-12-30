import React from "react";
import { HotelDetails } from "./HotelDetails";

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

interface AirbnbContainerProps {
  hotel: hotelProp[];
}

export const AirbnbContainer: React.FC<AirbnbContainerProps> = ({ hotel }) => {
  return (
    <>
      <HotelDetails hotel={hotel} />
    </>
  );
};
