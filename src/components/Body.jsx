import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "../../index.css";
import RestCards from "./Rest-cards/RestCards";
import { ShimmerCard } from "../utils/ShimerUI";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [isActive, setIsActive] = useState("all");
  const [searchText, setSearchText] = useState("");

  const handleFilter = (btactv, listrestfn) => {
    setIsActive(btactv);
    setFilteredRestaurants(listrestfn());
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://namastedev.com/api/v1/listRestaurants");

      const json = await data.json();
      const rest =
        json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListOfRestaurants(rest);
      setFilteredRestaurants(rest);
    } catch (error) {
      console.log(error);
    }
  };

  //   if (listOfRestaurants.length === 0) return <ShimmerCard />;

  return listOfRestaurants.length === 0 ? (
    <ShimmerCard />
  ) : (
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
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="chip active"
          onClick={() => {
            setFilteredRestaurants(
              listOfRestaurants.filter((rest) => {
                return rest.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              }),
            );
          }}
        >
          Search
        </button>
      </div>

      <div className="filters">
        <button
          className={`chip ${isActive === "all" ? "active" : ""}`}
          onClick={() => handleFilter("all", () => listOfRestaurants)}
        >
          All
        </button>
        <button
          className={`chip ${isActive === "fastdel" ? "active" : ""}`}
          onClick={() =>
            handleFilter("fastdel", () =>
              listOfRestaurants.filter(
                (rest) => rest.info?.sla?.deliveryTime <= 20,
              ),
            )
          }
        >
          ⚡ Fast Delivery
        </button>
        <button
          className={`chip ${isActive === "toprated" ? "active" : ""}`}
          onClick={() =>
            handleFilter("toprated", () =>
              listOfRestaurants.filter((rest) => rest.info?.avgRating >= 4.2),
            )
          }
        >
          ⭐ Top Rated
        </button>
        <button
          className={`chip ${isActive === "offers" ? "active" : ""}`}
          onClick={() =>
            handleFilter("offers", () =>
              listOfRestaurants.filter(
                (rest) => rest.info?.aggregatedDiscountInfoV3?.header !== "",
              ),
            )
          }
        >
          🏷️ Offers
        </button>
        <button
          className={`chip ${isActive === "pureveg" ? "active" : ""}`}
          onClick={() =>
            handleFilter("pureveg", () => {
              return listOfRestaurants.filter(
                (rest) => rest.info?.veg === true,
              );
            })
          }
        >
          🥦 Pure Veg
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
        {filteredRestaurants?.map((r) => (
          <RestCards resData={r} key={r.info?.id} />
        ))}
      </div>
    </main>
  );
};

export default Body;
