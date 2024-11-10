import "../assets/css/MainBody.css";

import Sidebar from "./SideBar";
import Card from "react-bootstrap/Card";
import "../assets/css/Dashboard.css";

import inventory_list_1 from "../assets/photo/inventory_list_1.jpg"
import report_gen_1 from "../assets/photo/report_gen_1.jpg"
import bim_model_1 from "../assets/photo/bim_model_1.jpg"


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
              src={inventory_list_1}
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
              src={report_gen_1}
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
              src={bim_model_1}
              alt="Card Image"
              style={{ width: "100%", height: "auto" }}
            />

            <Card.Body>
              <Card.Text style={{ color: "white" }}>BIM Model</Card.Text>
              <Card.Link
                href="/analysis/bmi_model"
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
