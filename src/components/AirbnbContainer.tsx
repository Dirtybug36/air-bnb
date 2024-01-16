import React from "react";
import { HotelDetails } from "./HotelDetails";
import CardData from "./CardData";
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

export const AirbnbContainer: React.FC<{ data: dataProps[] }> = () => {
  const hotelDetail = CardData.map((hotel: any) => (
    <HotelDetails key={hotel.id} hotel={hotel} />
  ));

  return (
    <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 ml-12  sm:grid sm:grid-cols-2 shrink-0">
      {hotelDetail}
    </div>
  );
};
