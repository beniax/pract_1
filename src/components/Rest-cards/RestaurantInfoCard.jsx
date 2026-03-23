import "../../../index.css";
import { imgurl } from "../../utils/constants";

const RestaurantInfoCard = ({ data }) => {
  console.log(data, "----card data");
  const {
    name,
    cloudinaryImageId,
    locality,
    areaName,
    costForTwo,
    cuisines,
    avgRating,
    avgRatingString,
    totalRatingsString,
    sla,
  } = data;

  const imgUrl = imgurl + cloudinaryImageId;

  return (
    <div className="rest-info-card">
      <div className="ric-img-wrap">
        <img src={imgUrl} alt={name} className="ric-img" />
        <div className="ric-img-overlay" />
      </div>

      <div className="ric-body">
        <div className="ric-top">
          <div>
            <h1 className="ric-name">{name}</h1>
            <p className="ric-cuisines">{cuisines.join(", ")}</p>
            <p className="ric-location">
              📍 {locality}, {areaName}
            </p>
          </div>

          <div className="ric-rating-box">
            <span className="ric-rating-val">⭐ {avgRatingString}</span>
            <span className="ric-rating-total">{totalRatingsString}</span>
          </div>
        </div>

        <div className="ric-divider" />

        <div className="ric-meta">
          <div className="ric-meta-item">
            <span className="ric-meta-val">⏱ {sla.slaString}</span>
            <span className="ric-meta-label">Delivery Time</span>
          </div>
          <div className="ric-meta-sep" />
          <div className="ric-meta-item">
            <span className="ric-meta-val">📍 {sla.lastMileTravelString}</span>
            <span className="ric-meta-label">Distance</span>
          </div>
          <div className="ric-meta-sep" />
          <div className="ric-meta-item">
            <span className="ric-meta-val">💰 {costForTwo}</span>
            <span className="ric-meta-label">Cost for two</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfoCard;
