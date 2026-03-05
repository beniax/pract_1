import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "../../index.css";
import ALL_RESTAURANTS from "../utils/mock_data_";
import RestCards from "./Rest-cards/RestCards";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(ALL_RESTAURANTS);
  const [isActive, setIsActive] = useState("all");

  const handleFilter = (btactv, listrestfn) => {
    setIsActive(btactv);
    setListOfRestaurants(listrestfn());
  };

  return (
    <main>
      <div className="search-wrap">
        <svg
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          id="searchInput"
          placeholder="Search for restaurants or cuisines..."
        />
      </div>

      <div className="filters">
        <button
          className={`chip ${isActive === "all" ? "active" : ""}`}
          onClick={() => handleFilter("all", () => ALL_RESTAURANTS)}
        >
          All
        </button>
        <button
          className={`chip ${isActive === "fastdel" ? "active" : ""}`}
          onClick={() =>
            handleFilter("fastdel", () =>
              ALL_RESTAURANTS.filter((rest) => rest.time <= "20 min"),
            )
          }
        >
          ⚡ Fast Delivery
        </button>
        <button
          className={`chip ${isActive === "toprated" ? "active" : ""}`}
          onClick={() =>
            handleFilter("toprated", () =>
              ALL_RESTAURANTS.filter((rest) => rest.rating > 4),
            )
          }
        >
          ⭐ Top Rated
        </button>
        <button
          className={`chip ${isActive === "offers" ? "active" : ""}`}
          onClick={() =>
            handleFilter("offers", () =>
              ALL_RESTAURANTS.filter((rest) => rest.offer !== ""),
            )
          }
        >
          🏷️ Offers
        </button>
        <button
          className={`chip ${isActive === "pureveg" ? "active" : ""}`}
          onClick={() =>
            handleFilter("pureveg", () => {
              const pureVegRest = ALL_RESTAURANTS.filter((rest) =>
                rest.tags.includes("pure veg"),
              );

              return pureVegRest;
            })
          }
        >
          🥦 Pure Veg
        </button>
        <button
          className={`chip ${isActive === "under200" ? "active" : ""}`}
          onClick={() =>
            handleFilter("under200", () => {
              const under200Rest = ALL_RESTAURANTS.filter((rest) =>
                rest.tags.includes("under 200"),
              );
              return under200Rest;
            })
          }
        >
          💸 Under ₹200
        </button>
      </div>

      <div className="restaurants-grid" id="grid"></div>
      <div className="loader" id="loader" style={{ display: "none" }}>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      {/* cards */}
      <div className="restaurantsCard">
        {listOfRestaurants?.map((r) => (
          <RestCards resData={r} key={r.id} />
        ))}
      </div>
    </main>
  );
};

export default Body;
