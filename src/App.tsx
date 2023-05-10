import { useEffect, useState } from "react";
import "./App.css";
import mainSvg from "./assets/main.svg";
import leftLogo from "./assets/leftLogo.svg";
import rightLogo from "./assets/rightLogo.svg";
import {
  FiInstagram,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhoneCall,
} from "react-icons/fi";
import { Helmet } from "react-helmet";

const App = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [title, setTitle] = useState("HEY! Reklam Ajansı");

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize({ height: window.innerHeight, width: window.innerWidth });
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitle((previous) =>
        previous === "Çok Yakında!" ? "HEY! Reklam Ajansı" : "Çok Yakında!"
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-contianer">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="top-logos">
        <img
          src={leftLogo}
          alt="HEY REKLAM AJANSI"
          width={windowSize.width * 0.12}
          className="mini-logos"
        />
        <img
          src={rightLogo}
          alt="UÇMAK İÇİN HAZIRIZ"
          width={windowSize.width * 0.12}
          className="mini-logos"
        />
      </div>
      <div className="main-logo-container">
        <img
          src={mainSvg}
          alt="HEY REKLAM AJANSI"
          width={
            windowSize.width > 700
              ? windowSize.width * 0.45
              : windowSize.width * 0.9
          }
          className="main-logo"
        />
      </div>
      <div className="buttons-container">
        <button
          className="button"
          onClick={() => {
            window.open("https://goo.gl/maps/SeuM1CNcpvJ11QWb9");
          }}
        >
          <FiMapPin /> &nbsp;Konumumuz
        </button>

        <button
          className="button"
          onClick={() => {
            window.open("https://www.instagram.com/heyreklamajansi/");
          }}
        >
          <FiInstagram /> &nbsp;Instagram
        </button>
        <button
          className="button"
          onClick={() => {
            window.open("https://www.instagram.com/hey1creative");
          }}
        >
          <FiMessageCircle /> &nbsp;WhatsApp
        </button>
        <button
          className="button"
          onClick={() => {
            window.open("mailto:info@heyreklamajansi.com");
          }}
        >
          <FiMail /> &nbsp;Mail
        </button>
        <button
          className="button"
          onClick={() => window.open("tel:+905010324391")}
        >
          <FiPhoneCall /> &nbsp;+90 (501) 032 43 91
        </button>
      </div>
    </div>
  );
};

export default App;
