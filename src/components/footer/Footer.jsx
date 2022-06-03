import React from "react";
import "./Footer.css";
// import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {FaPassport} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <h2>Welcome, User 🥳</h2>
        <p>Built By TemidayoFalomo with ReactJs, CSS, Axios, CoinGeckoApi.</p>
      </div>

      <ul className="footer-right">
        {/* <li><a href="https://github.com/temidayo-falomo"><AiFillGithub/>Github</a></li>
        <li><a href="https://temidayo-falomo.netlify.app/"><FaPassport/>Portfolio</a></li>
        <li><a href="https://www.linkedin.com/in/temidayo-falomo-b706b3223/"><AiFillLinkedin/>Linkedin</a></li> */}
      </ul>
    </footer>
  );
}

export default Footer;
