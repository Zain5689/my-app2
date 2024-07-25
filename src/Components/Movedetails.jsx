import { useParams } from "react-router-dom";
import Move from "./Move";
import { useEffect, useState } from "react";

export default function Movedetails() {
  const [move, setmove] = useState([]);
  const param = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${param.moveId}?api_key=5b6d2f21c07b6b480b047d8a71c3824d`
    )
      .then((response) => response.json())
      .then((data) => setmove(data));
  }, []);

  return (
    <>
      <div className="container m-5">
        <div className="card p-3">
          <div className="d-flex justify-content-center m-2">
            <img
              src={`https://image.tmdb.org/t/p/w500${move.poster_path}`}
              className="card-img-top m-1"
              alt="..."
              style={{
                width: "350px",
                height: "250px",
              }}
            />
            <img
              src={`https://image.tmdb.org/t/p/w500${move.backdrop_path}`}
              className="card-img-top m-1"
              alt="..."
              style={{
                width: "350px",
                height: "250px",
              }}
            />
          </div>
          <div
            className="card-body mb-5 p-3 text-center"
            style={{ height: "100%" }}
          >
            <h4 className="card-title p-2 text-danger">{move.title}</h4>
            <h4 className="card-title p-2 text-center">id: {move.id}</h4>
            <p className="card-text  text-center">
              release_date: {move.release_date}
            </p>
            <p className="card-text  text-center">
              vote_count: {move.vote_count}
            </p>
            <p className="card-text p-2 text-center">{move.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}
