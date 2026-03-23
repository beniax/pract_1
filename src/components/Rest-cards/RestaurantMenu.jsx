import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../../index.css";
import RestaurantInfoCard from "./RestaurantInfoCard";
import { imgurl, restApi } from "../../utils/constants";
import { ShimmerCard } from "../../utils/ShimerUI";

const RestaurantMenu = () => {
  const { restId } = useParams();
  const [restCardInfo, setrestCardInfo] = useState(null);
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const resp = await fetch(restApi + restId);
      const data = await resp.json();
      setrestCardInfo(data?.data?.cards[2]?.card?.card?.info);
      let menu = data.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards;
      const menucard = menu
        .filter((m) => m?.card?.card?.title)
        .reduce(
          (acc, curr) => {
            let itmcrd = curr?.card?.card?.itemCards.reduce((acc, curr) => {
              acc.push(curr?.card?.info);
              return acc;
            }, []);
            acc.section.push(curr?.card?.card?.title);
            acc.itmcards.push(itmcrd);
            return acc;
          },
          { section: [], itmcards: [] },
        );
      setRestaurant(menucard);
    } catch (error) {
      console.log(error);
    }
  };
  return restCardInfo === null && restaurant === null ? (
    <ShimmerCard />
  ) : (
    <div className="menu-page">
      {restCardInfo != null && <RestaurantInfoCard data={restCardInfo} />}

      {restaurant?.section.map((section, index) => (
        <div className="menu-section" key={index}>
          <h2>{section}</h2>
          <div className="menu-grid">
            {restaurant?.itmcards[index].map((item) => {
              return (
                <div className="menu-item-card" key={item.id}>
                  <img
                    src={imgurl + item.imageId}
                    alt={item.name}
                    onError={(e) => (e.target.style.display = "none")}
                  />
                  <div className="menu-item-info">
                    <div className="menu-item-name">{item.name}</div>
                    <div className="menu-item-desc">{item.description}</div>
                    <div className="menu-item-bottom">
                      <span className="menu-item-price">
                        ₹{item.price / 100}
                      </span>
                      <button className="add-btn">+ Add</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
