import React, { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { AirbnbContainer } from "./components/AirbnbContainer";

import { SlideIcon } from "./components/SlideIcon";

const App: React.FC = () => {
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
  const [hotel, setHotel] = useState<Hotel[]>([]);
  useEffect(() => {
    const url =
      "https://airbnb13.p.rapidapi.com/search-location?location=porto&checkin=2024-12-22&checkout=2024-12-23&adults=1&children=0&infants=0&pets=0&page=1&currency=Euro";
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

  return (
    <div className="px-2">
      <Header />
      <SlideIcon />
      <AirbnbContainer hotel={hotel} />
    </div>
  );
};

export default App;
