// ShimmerGrid.jsx
const ShimmerCard = () => (
  <div className="shimmer-card">
    <div className="shimmer-card-img sh" />         {/* image placeholder */}
    <div className="shimmer-card-body">
      <div className="shimmer-card-meta">
        <div className="sh-pill sh" />              {/* time */}
        <div className="sh-pill sh" />              {/* price */}
        <div className="sh-pill sh" />              {/* location */}
      </div>
    </div>
  </div>
);

const ShimmerGrid = () => (
  // ✅ use exact same wrapper class as real cards
  <div className="restaurantsCard">
    {Array(8).fill("").map((_, i) => (
      <ShimmerCard key={i} />
    ))}
  </div>
);

export { ShimmerCard, ShimmerGrid };