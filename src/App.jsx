import { useEffect, useState } from "react";
import LoadingState from "./components/subs/LoadingState";
import { Tours } from "./components/Tours";

const apiURL = "https://course-api.com/react-tours-project";

function App() {
  const [loadingState, setLoadingState] = useState(true);
  const [tours, setTours] = useState([]);

  const FetchTours = async () => {
    setLoadingState(true);

    try {
      const resp = await fetch(apiURL);
      const toursData = await resp.json();
      setTours(toursData);
    } catch (error) {
      console.log(error);
    }

    setLoadingState(false);
  };

  const removeTourFunc = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    FetchTours();
  }, []);

  if (loadingState) {
    return (
      <main className="main">
        <LoadingState />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main className="main">
        <h1>not tours left</h1>
        <button
          className="btn"
          onClick={() => {
            FetchTours();
          }}
        >
          Refetch
        </button>
      </main>
    );
  }

  return (
    <main className="main">
      <Tours tours={tours} removeTour={removeTourFunc} />
    </main>
  );
}

export default App;
