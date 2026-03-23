import React from "react";
import ReactDOM from "react-dom/client";
import "../../index.css";
import { Link } from "react-router-dom";

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
const RightCornerElement = () => {
  const [loginbtn, setloginbtn] = React.useState(false);
  return (
    <nav>
      <Link to="/">🏠 Home</Link>
      <Link to="/about">ℹ️ About Us</Link>
      <Link to="/contact">📞 Contact</Link>
      <a href="#" className="cart-btn">
        🛒 Cart <span className="cart-count">3</span>
      </a>
      <button className="chip" onClick={() => setloginbtn(!loginbtn)}>
        🔑 {loginbtn ? "Logout" : "Login"}
      </button>
    </nav>
  );
};

const Header = () => {
  return (
    <header>
      <LeftCornerElement />
      <RightCornerElement />
    </header>
  );
};

export default Header;
