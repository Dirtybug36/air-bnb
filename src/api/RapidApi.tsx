import { useState, useEffect } from "react";
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

const RapidApi = () => {
  const [hotel, setHotel] = useState<Hotel[]>([]);

  useEffect(() => {
    const url =
      "https://airbnb13.p.rapidapi.com/calendar?room_id=18951965&currency=USD&year=2023&month=12&count=1";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a72b3bc51cmshf489db3db5ceda7p1ee458jsnaf89471befa4",
        "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
      },
    };

    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);
        // console.log(response);
        if (!response.ok) {
          throw new Error("Something went wrong while fetching");
        }
        setHotel(result.results);
      } catch (error) {
        console.error("Error fetching data", Error);
      }
    };

    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  return null; // Replace with your component's JSX
};

export default RapidApi;
