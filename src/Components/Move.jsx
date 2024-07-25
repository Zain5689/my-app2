import { Link } from "react-router-dom";

export default function Move(props) {
  console.log(props);
  const { move, showbutton } = props;
  return (
    <>
      <div className="card p-1">
        <img
          src={`https://image.tmdb.org/t/p/w500${move.poster_path}`}
          className="card-img-top"
          alt="..."
          style={{
            width: "350px",
            height: "250px",
            margin: "auto",
          }}
        />
        <div className="card-body mb-5 p-3" style={{ height: "100%" }}>
          <h4 className="card-title p-2">{move.id}</h4>
          <h5 className="card-title p-2 text-danger">{move.title}</h5>
          <p className="card-text p-2 mb-5">{move.overview.slice(0, 100)}</p>
          {showbutton && (
            <Link to={`/move/${move.id}`} className="btn btn-primary">
              Details
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
