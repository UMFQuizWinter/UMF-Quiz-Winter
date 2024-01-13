import React from 'react'
import './Header.css'
import BackIcon from './back.png';
import Logo from './logo.png'
export const Header = (props) => {
  return (
    <div className="header-container">
      <div className="header-mini">
        <a href="/UMF-Quiz-Winter">
          <div className="back-icon"><img src={BackIcon} alt="back-icon" style={{ width: "20%" }}></img></div>
        </a>
        <div className="logo">
          <img src={Logo} alt="logo" style={{ width: "100%", maxWidth: "300px" }}></img>
        </div>
        {/* <div className="subject">{props.subject === "anato" ? "Anatomie" : "Diabet"}</div> */}
      </div>
    </div>

  )
}

export default Header;
