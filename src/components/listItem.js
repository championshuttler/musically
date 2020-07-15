import React from "react";

export default function listItem({ src: { id, title, date } }) {
  return (
    <div>
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-9">
            <h4>Title: {title}</h4>
          </div>
          <div className="col-md-3">
            <h5>Date: {date}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
