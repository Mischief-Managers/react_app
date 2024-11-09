import { Link } from "react-router-dom";

import reactLogo from "../assets/logo/react.svg";
import djangoLogo from "../assets/logo/django.svg";
import flaskLogo from "../assets/logo/flask.svg";
import dockerLogo from "../assets/logo/docker.svg";
import awsLogo from "../assets/logo/aws.svg";
import "../assets/css/Home.css";

function Home() {
  return (
    <div className="mainRoot">
      <h1>Inventory Analysis</h1>
      <h3 className="motoLine">Turning Raw Data into Actionable Wisdom</h3>

      <div className="exploreButton">
        <Link to="/dashboard">
          <button className="btn btn-primary">Let's Explore</button>
        </Link>
      </div>

      <p className="hostedBy">
        Hosted By&nbsp;:&nbsp;
        <a href="https://eu.junctionplatform.com/home">Mischief Managers</a>
      </p>

      <div className="poweredByLogo">

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <a href="https://flask.palletsprojects.com/" target="_blank">
          <img src={flaskLogo} className="logo flask" alt="Flask logo" />
        </a>

        <a href="https://www.docker.com/" target="_blank">
          <img src={dockerLogo} className="logo docker" alt="docker logo" />
        </a>

        <a href="https://aws.amazon.com//" target="_blank">
          <img src={awsLogo} className="logo aws" alt="Aws logo" />
        </a>
      </div>
    </div>
  );
}

export default Home;
