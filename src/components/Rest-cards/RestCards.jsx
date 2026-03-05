import React from "react";
import ReactDOM from "react-dom/client";
import "../../../index.css";

const RestCards = (props) => {
  const r = props.resData;
  return (
    <>
      <div className="rest-card">
        <div className="card-img-wrap">
          <img src={r.img} alt={r.name} loading="lazy" />
          {r.offer ? <div className="offer-badge">{r.offer}</div> : ""}
          <div className="rating-badge">⭐ {r.rating}</div>
          <div className="card-overlay">
            <span className="overlay-text">Order Now →</span>
          </div>
        </div>
        <div className="card-body">
          <div className="card-name">{r.name}</div>
          <div className="card-cuisines">{r.cuisines}</div>
          <div className="card-meta">
            <div className="meta-item">
              <svg
                width="13"
                height="13"
                fill="none"
                stroke="#fc8019"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              ${r.time}
            </div>
            <div className="meta-item">
              <svg
                width="13"
                height="13"
                fill="none"
                stroke="#fc8019"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              ${r.price}
            </div>
            <div className="meta-item">
              <svg
                width="13"
                height="13"
                fill="none"
                stroke="#fc8019"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              ${r.location}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestCards;
