import "../assets/css/MainBody.css";

import Sidebar from "./SideBar";
import Card from "react-bootstrap/Card";
import "../assets/css/Dashboard.css";

import meat_consumption_pie_img_1 from "../assets/photo/meat_consumption_1.png";
import emotion_extraction_img_1 from "../assets/photo/emotion_extraction_1.png";
import weather_img_1 from "../assets/photo/weather_1.jpg";
import rtt_prediction_2 from "../assets/photo/rtt_prediction_2.jpg"


function Dashboard() {
  return (
    <div>
      <Sidebar />

      <div className="mainBody">
        <h4>Dashboard</h4>

        <div className="futurePredictCards">
          <h5 style={{ float: "left", margin: "5%" }}>Analysis</h5>
          
          
          <Card
            border="info"
            style={{
              display: "inline-flex",
              float: "left",
              width: "20%",
              height: "20%",
              color: "white",
              background: "#464543",
              marginTop: "10%",
              marginLeft: "1%",
            }}
          >
            <Card.Img
              variant="top"
              src={rtt_prediction_2}
              alt="Card Image"
              style={{ width: "100%", height: "auto" }}
            />

            <Card.Body>
              <Card.Text style={{ color: "white" }}>Inventory List</Card.Text>
              <Card.Link
                href="/analysis/listshow"
                style={{
                  color: "#64DEFC",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                View Page
              </Card.Link>
            </Card.Body>
          </Card>

          <Card
            border="info"
            style={{
              display: "inline-flex",
              float: "left",
              width: "20%",
              height: "20%",
              color: "white",
              background: "#464543",
              marginTop: "10%",
              marginLeft: "5%",
            }}
          >
            <Card.Img
              variant="top"
              src={emotion_extraction_img_1}
              alt="Card Image"
              style={{ width: "100%", height: "auto" }}
            />

            <Card.Body>
              <Card.Text style={{ color: "white" }}>Report Generation</Card.Text>
              <Card.Link
                href="/analysis/reportgen"
                style={{
                  color: "#64DEFC",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                View Page
              </Card.Link>
            </Card.Body>
          </Card>

          <Card
            border="info"
            style={{
              display: "inline-flex",
              float: "left",
              width: "20%",
              height: "20%",
              color: "white",
              background: "#464543",
              marginTop: "10%",
              marginLeft: "5%",
            }}
          >
            <Card.Img
              variant="top"
              src={weather_img_1}
              alt="Card Image"
              style={{ width: "100%", height: "auto" }}
            />

            <Card.Body>
              <Card.Text style={{ color: "white" }}>BIM 3D Model</Card.Text>
              <Card.Link
                href="/dashboard"
                style={{
                  color: "#64DEFC",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                View Page
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
        
        <div className="dataAnalysisCards">
          <h5 style={{ float: "left", margin: "5%" }}>Machine Learning Models</h5>

          <Card
            border="info"
            style={{
              display: "inline-flex",
              float: "left",
              width: "20%",
              height: "20%",
              color: "white",
              background: "#464543",
              marginTop: "10%",
              marginLeft: "-15%",
            }}
          >
            <Card.Img
              variant="top"
              src={meat_consumption_pie_img_1}
              alt="Card Image"
              style={{ width: "100%", height: "auto" }}
            />

            <Card.Body>
              <Card.Text style={{ color: "white" }}>Conversational LLMs</Card.Text>
              <Card.Link
                href="/dashboard"
                style={{
                  color: "#64DEFC",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                View Page
              </Card.Link>
            </Card.Body>
          </Card>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
