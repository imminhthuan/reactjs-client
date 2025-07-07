import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchEngine from "./SearchEngine";
import Forecast from "./Forecast";

import "../styles.css";
import "../weatherLayout.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div className="App">
      <div className="weather-container">
        <div className="left-column">
          <div className="weather-info">
            <h2>31°C 🌧️</h2>
            <p>RealFeel®: 38°C</p>
            <p>Mưa nhỏ – Chất lượng không khí: Vừa phải</p>
          </div>

          <div className="weather-info">
            <h2>30°C 🌤️</h2>
            <p>RealFeel®: 37°C</p>
            <p>Nắng nhẹ – Chất lượng không khí: Tốt</p>
          </div>

          <div className="weather-info">
            <h2>29°C 🌧️</h2>
            <p>RealFeel®: 35°C</p>
            <p>Mưa rào – Chất lượng không khí: Kém</p>
          </div>

            <div className="weather-info">
            <h2>29°C 🌧️</h2>
            <p>RealFeel®: 35°C</p>
            <p>Mưa rào – Chất lượng không khí: Kém</p>
          </div>

            <div className="weather-info">
            <h2>29°C 🌧️</h2>
            <p>RealFeel®: 35°C</p>
            <p>Mưa rào – Chất lượng không khí: Kém</p>
          </div>

            <div className="weather-info">
            <h2>29°C 🌧️</h2>
            <p>RealFeel®: 35°C</p>
            <p>Mưa rào – Chất lượng không khí: Kém</p>
          </div>
        </div>

        <div className="weather-ads">
          <img src="/images.jpg" alt="Quảng cáo" />
          <div>
            <h3>Mua Điện Thoại Được Khuyến Mãi</h3>
            <p>Tại sao phải mua điện thoại này trong khi đó không mua điện thoại xịn hơn</p>
          </div>
          <img src="/anh-quang-cao-facebook-la-gi.jpg" alt="Quảng cáo" />
          <div>
            <h3>Facebook</h3>
            <p>Tại sao bạn pahir sử dụng facebook ?</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
