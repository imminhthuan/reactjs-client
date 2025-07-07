import React from "react";
import "../Header.css";

function Header() {
    return (
        <header className="header">
            <div className="logo">☁️ WeatherApp</div>
            <nav>
                <ul>
                    <li><a href="/">Trang Chủ</a></li>
                    <li><a href="/du-bao">Dự Báo</a></li>
                    <li><a href="/lien-he">Liên Hệ</a></li>
                    <li></li>
                </ul>
            </nav>
        </header>
    )
}


export default Header