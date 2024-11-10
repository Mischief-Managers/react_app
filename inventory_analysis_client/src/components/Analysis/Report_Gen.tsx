import Sidebar from "../SideBar";
import report_1 from "../../assets/photo/report_1.jpg";

function ReportGen() {
  return (
    <div>
      <Sidebar />

      <div className="mainBody">
        <h5>Report Generation</h5>

        <p>Page is under Construction</p>

        <br></br>
        <br></br>

        <img
          src={report_1}
          alt="Targeted"
          style={{ width: '90%', height: '90%' }}
        />

      </div>
    </div>
  );
}

export default ReportGen;
