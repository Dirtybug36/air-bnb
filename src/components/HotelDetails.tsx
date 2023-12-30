import React from "react";
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
}
export const HotelDetails: React.FC<HotelDetailsProps> = ({ hotel }) => {
  console.log(hotel);
  // const images = hotel.map(e=>e.images.map())
  return (
    <div className="grid grid-cols-4 ml-12">
      {hotel.map((hotelItems) => (
        <div
          key={hotelItems.id}
          className="flex flex-col border w-[300px] h-[300px] mt-4 rounded-2xl"
        >
          <div className=" border-none h-[320px] ">
            <img
              className="object-cover h-full w-full rounded-2xl overflow-hidden"
              src={hotelItems.images[5]}
              alt="rooms"
            />
          </div>
          <div className="flex flex-row justify-between pl-4 pt-3">
            <div>
              <p>{hotelItems.address}</p>
              <p></p>
              <p>
                {hotelItems.price.currency} {hotelItems.price.rate}
              </p>
            </div>
            <div> {hotelItems.rating} </div>
          </div>
        </div>
      ))}
    </div>
  );
};
//applying carousal effect on image and try that on header too
