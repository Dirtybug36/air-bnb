import React from "react";

import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { AirbnbContainer } from "./components/AirbnbContainer";
const App: React.FC = () => {
  return (
    <div className="px-2">
      <Header />
      <Navigation />
      <AirbnbContainer />
    </div>
  );
};

export default App;
/*
const KEY = "a72b3bc51cmshf489db3db5ceda7p1ee458jsnaf89471befa4";

const YourComponent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const url = "https://airbnb13.p.rapidapi.com/search-location";
        const location = "Paris";
        const checkin = "2023-09-16";
        const checkout = "2023-09-17";
        const adults = 1;
        const children = 0;
        const infants = 0;
        const pets = 0;
        const page = 1;
        const currency = "USD";

        const queryParams = new URLSearchParams({
          location,
          checkin,
          checkout,
          adults: String(adults), // Convert to string
          children: String(children), // Convert to string
          infants: String(infants), // Convert to string
          pets: String(pets), // Convert to string
          page: String(page), // Convert to string
          currency,
        });

        const apiUrl = `${url}?${queryParams?.toString()}`;

        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": KEY,
            "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
          },
        };

        const response = await fetch(apiUrl, options);
        const data = await response.json();

        if (!response.ok) {
          throw new Error("Something went wrong while fetching");
        }

        setResult(data);
      } catch (Err) {
        console.error(Err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // empty dependency array means useEffect runs once after initial render

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
};
*/
//Check API Key: Ensure that your RapidAPI key is correct. Double-check for any typos or discrepancies. If you obtained the API key from RapidAPI, make sure it is associated with a valid account and has the necessary permissions.
