import React from "react";
import "./style.css";

function Header(props) {
  return (
    // <div className="hero text-center">
    //     {/* style={{ backgroundImage: `url(${props.backgroundImage})` }} */}
    //     THIS IS A HEADER
    //   {props.children}
    // </div>
    <header className="jumbotron jumbotron-fluid mt-0 py-3">
        <div className="container">
            <div className="row">
                {/* <!--text--> */}
                <div className="col-md-8 border rounded border-white d-flex justify-content-end mb-3 my-1" id="greeting-div">
                    <h1 className="display-1 py-1"><span id="greeting">Hello</span><br></br>I'm glad you stopped by</h1>
                </div>
                {/* <!--image--> */}
                <div className="col-md-4" id="image-div">
                    <img src="../assets/images/myphoto.jpg" className="img-thumbnail img-responsive" alt="my photo"/>
                </div>

            </div>
        </div>
    </header>
  );
}

export default Header;