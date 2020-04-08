import React from "react";

const About = () => {
  return (
    <div>
      <center>
        <p style={{ color: "Blue" }} className="h1">
          <b>
            {" "}
            <i>About this App =></i>{" "}
          </b>
        </p>
        <br></br>
        <p >
          Well,this is the simple Fullstack application<br></br>
          with <b>React-js</b> is the Frontend and<br></br>
          <b>Node-js</b>,<b>Express-js</b> at the Backend,<br></br>
          This website helps us to maintain our contacts means<br></br>
          we can ADD,UPDATE,DELETE,DISPLAY our contacts.<br></br>
        </p>
        <p style={{ color: "Blue" }} className="h1">
          <b>
            {" "}
            <i>About Me ! =></i>{" "}
          </b>
        </p>
        <div className="card" style={{width:"18rem"}}>
          <img src="https://avatars1.githubusercontent.com/u/40388618?s=460&v=4" className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
             I am an Engineering Student from Shantilal Shah Engineering College.<br></br>
             My email id: ashishfatnani3@gmail.com
            </p>
            <a href="https://github.com/ashishfatnani/contact-keeper" className="btn btn-primary">
              Github code.
            </a>
          </div>
        </div>
      </center>
    </div>
  );
};

export default About;
