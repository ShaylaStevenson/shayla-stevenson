import React from "react";
import "./style.css";
// get our fontawesome imports

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    // <footer className="footer">
    //   <span>Add Links Here 😎😉🤞</span>
    // </footer>
    <footer className="container-fluid custom-footer fixed-bottom p-1">
    <div className="row">
        <div className="col-3">
            <a href="https://www.facebook.com/shayla.stevenson.165" target="_blank" rel="noreferrer">
                <FontAwesomeIcon className="icon"icon={faFacebook} />
            </a>
        </div>

        <div className="col-3">
            <a href="https://www.instagram.com/shayla711/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon className="icon" icon={faInstagram} />
            </a>
        </div>

        <div className="col-3">
            <a href="https://github.com/ShaylaStevenson" target="_blank" rel="noreferrer">
                <FontAwesomeIcon className="icon"icon={faGithub} />
            </a>
        </div>

        <div className="col-3">
            <a href="https://www.linkedin.com/in/shayla-stevenson-806143200/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="icon"icon={faLinkedin} />
            </a>
        </div>
        
    </div>
</footer>



  );
}

export default Footer;

// <!--Footer-->
    <footer className="container-fluid custom-footer fixed-bottom p-1">
        <div className="row">
            <div className="col-3">
                <a href="https://www.facebook.com/shayla.stevenson.165" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
            </div>

            <div className="col-3">
                <a href="https://www.instagram.com/shayla711/" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>

            <div className="col-3">
                <a href="https://github.com/ShaylaStevenson" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                </a>
            </div>

            <div className="col-3">
                <a href="https://www.linkedin.com/in/shayla-stevenson-806143200/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
            
        </div>
    </footer>