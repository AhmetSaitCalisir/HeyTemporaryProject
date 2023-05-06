import { useEffect, useState } from "react";
import "./App.css";
import mainSvg from "./assets/main.svg";

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
          <img
            src={mainSvg}
            alt="React Logo"
            style={{ maxWidth: windowSize.width, width: "100%" }}
          />
        </div>
        <div className="modal-container">
          <div className="modal-col">
            <div className="col-title">İletişim Bilgilerimiz</div>
          </div>
          <div className="modal-col">
            <div className="col-title">Adresimiz</div>
            <div className="google-address-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3122.869449249637!2d27.726468276444002!3d38.49065427060046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b9a7dd42c0aaf7%3A0xe335b48f3cca703e!2sHEY*21%20CREATIVE%20Reklam%20Ajans%C4%B1!5e0!3m2!1sen!2str!4v1683218132982!5m2!1sen!2str"
                loading="lazy"
                className="google-address"
              />
            </div>
            <div className="adress">
              HEY! CREATIVE Reklam Ajansı, Ergenekon, Yavuz Sultan Selim Sokak
              No:18 2/C D:304, 45400 Turgutlu/Manisa
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
