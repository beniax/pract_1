import React from "react";
import ReactDOM from "react-dom/client";
import "../../index.css";

const LeftCornerElement = () => {
  return (
    <a href="#" className="brand">
      <div className="brand-icon">🍔</div>
      <span className="brand-name">
        Food<span>Rush</span>
      </span>
    </a>
  );
};
const rightCornerElement = (
  <nav>
    <a href="#">🏠 Home</a>
    <a href="#">ℹ️ About Us</a>
    <a href="#">📞 Contact</a>
    <a href="#" className="cart-btn">
      🛒 Cart <span className="cart-count">3</span>
    </a>
  </nav>
);

const Header = () => {
  return (
    <header>
      <LeftCornerElement />
      {rightCornerElement}
    </header>
  );
};

export default Header;
