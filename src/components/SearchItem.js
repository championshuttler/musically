import React from "react";
import { Link } from "react-router-dom";

export default function SearchItem({ src: { mbid, name } }) {
  return (
    <div>
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-9">
            <h4>Name: {name}</h4>
          </div>
          <div className="col-md-3">
            <Link to={`/artist/${mbid}`} className="btn btn-secondary">
              Artist Details
            </Link>
            <br />
            <br />
            <Link to={`/album_details/${mbid}`} className="btn btn-secondary">
              Album Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
