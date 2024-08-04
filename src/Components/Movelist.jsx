import { useEffect, useState } from "react";
import Move from "./Move";

export default function Movelist() {
  const Api =
    "https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=5b6d2f21c07b6b480b047d8a71c3824d";
  const [movies, setmove] = useState([]);

  const GetallMovies = () => {
    fetch(Api)
      .then((response) => response.json())
      .then((data) => {
        setmove(data.results);
      });
  };

  useEffect(() => {
    GetallMovies();
  }, []);

  return (
    <>
      <>
        <h2 className="text-center p-2 mb-5 mt-5">Our Movies</h2>
        <div className="container">
          <div className="d-flex justify-content-center"></div>
          <div className="row">
            {movies.map((move) => {
              return (
                <>
                  {
                    <div className="col mb-2">
                      <Move move={move} showbutton={true} key={move.id} />
                    </div>
                  }
                </>
              );
            })}
          </div>
        </div>
      </>
    </>
  );
}
