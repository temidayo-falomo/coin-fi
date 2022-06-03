import React from "react";
import "./Navbar.css";


function Navbar() {
  return (
    <nav>
      <div className="nav_left nav_flex">
        <p>
          CryptoCurrencies: <span>13,000+</span>
        </p>
        <p>
          Exchanges: <span>600+</span>
        </p>
      </div>

      <div className="nav_center nav_flex">
        <p>
          Market Cap: <span>$2 trillion</span>
        </p>
        <p>
          Volume: <span> $88.92B</span>
        </p>
      </div>

      <div className="nav_right nav_flex">
        <p>
          BTC Dominance: <span>null</span>
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
