import React from "react";

import App from "./components/App";
import Credit from "./components/Credit";
import Header from "./components/Header";

function Apps() {
    return (
        <>
            <Header />
            <App />
            <Credit />
        </>
        // <div style={{ textAlign: "center", padding: "50px", color: "white", background: "#282c34" }}>
        //     <h1>Chào bạn!</h1>
        //     <p>Đây là giao diện thời tiết demo</p>
        // </div>

    )
}

export default Apps
