import { useEffect, useState } from "react";
import "./App.css";
import mainSvg from "./assets/main.svg";
import { TfiInstagram, TfiLocationPin, TfiMobile } from "react-icons/tfi";

const App = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize({ height: window.innerHeight, width: window.innerWidth });
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="main-contianer">
      <div className="modal">
        <div className="modal-title">
          <img src={mainSvg} alt="React Logo" width={windowSize.width * 0.7} />
        </div>
        <div className="modal-container">
          <button
            className="modal-button"
            onClick={() => {
              window.open("https://goo.gl/maps/SeuM1CNcpvJ11QWb9");
            }}
          >
            <TfiLocationPin /> &nbsp;Konumumuz
          </button>
          <button
            className="modal-button"
            onClick={() => window.open("tel:+905010324391")}
          >
            <TfiMobile /> &nbsp;+90 (501) 032 43 91
          </button>
          <button
            className="modal-button"
            onClick={() => {
              window.open("https://www.instagram.com/hey1creative");
            }}
          >
            <TfiInstagram /> &nbsp;Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
