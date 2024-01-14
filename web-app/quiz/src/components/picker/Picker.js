import Logo from './logo.png';
import Simbol from './logo_simbol.png';
import { Link } from "react-router-dom";
import "./Picker.css";


export const Picker = () => {
  return (
    <>
      <div className="main-container">
        <div className="image-container">
          <img src={Logo} alt="logo" style={{}}></img>
        </div>

        <div className="page">
          <button className="subject-button">
            <Link to="/UMF-Quiz-Winter/card/anato">
              Anatomie
            </Link>
          </button>
          <button className="subject-button">
            <Link to="/UMF-Quiz-Winter/card/diabet">
              Diabet
            </Link>
          </button>
          <button className="subject-button">
            <Link to="/UMF-Quiz-Winter/card/fizio">
              Fiziologie
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Picker;
