import React from "react";
import { HotelDetails } from "./HotelDetails";
import CardData from "../../api/CardData";
// eslint-disable-next-line no-lone-blocks
{
  /*
  for rapid api
  // interface hotelProp {
//   id: string;
//   url: string;
//   images: string[];
//   price: {
//     rate: number;
//     currency: string;
//   };
//   rating: number;
//   reviewsCount: number;
//   address: string;
// }

// interface AirbnbContainerProps {
//   hotel: hotelProp[];
// }  */
}

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

export const AirbnbContainer: React.FC = () => {
  const hotelDetail = CardData.map((hotel: dataProps) => (
    <HotelDetails key={hotel.id} hotel={hotel} />
  ));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  2xl:grid-cols-6 xl:mx-12 lg:mx-12 md:mx-12auto-cols-max sm:mx-12 mx-12 gap-3 ">
      {hotelDetail}
    </div>
  );
};
