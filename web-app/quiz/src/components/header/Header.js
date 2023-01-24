import React from 'react'
import './Header.css'
import BackIcon from './back.png';
export const Header = (props) => {
  return (
    <div className="header-container">
      <a href="/UMF-Quiz-Winter">
        <div className="back-icon"><img src={BackIcon} alt="back-icon" style={{width: "10%"}}></img></div>
      </a>
      <div className="subject">{props.subject === "anato" ? "Anatomie": "Diabet"}</div>
    </div>
    
  )
}

export default Header;
