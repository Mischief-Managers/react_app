import Sidebar from "../SideBar";
import React, { useState, useEffect } from 'react';
import ImageWithDots_2 from "../Common/ImageWithDots_2";
import ScrollableDropdown from "../Common/ScrollableDropdown";

import { FLASK_API_URL } from '../../constants';
const flask_api_project_url = FLASK_API_URL;

import "../../assets/css/BMI_Model.css";


const fetchRedDots = async (
  buildingId: string
) => {

  const postData = {
    building: buildingId,
  };

  const apiUrl = `${flask_api_project_url}/get-building-coordinates`;

  try {
    const response = await fetch(apiUrl, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(postData) 
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const network_rtt_prediction_data = await response.json();
    return network_rtt_prediction_data;
  } catch (error: any) {
    throw new Error(`Error fetching data from the API: ${error.message}`);
  }
};


function BMI_Model() {

  const buildingOption = [
    { key: "", value: "" },
    { key: "Building 1", value: "Building 1" },
    { key: "Building 2", value: "Building 2" },
    { key: "Building 3", value: "Building 3" },
    { key: "Building 4", value: "Building 4" },
  ];

  const [redDotX, setRedDotX] = useState<number[]>([]);
  const [redDotY, setRedDotY] = useState<number[]>([]);

  const [coordinates, setCoordinates] = useState<any>([]);

  const [selectedBuildingID, setSelectedBuildingID] = useState<
    { key: string; value: string } | undefined
  >({ key: '', value: '' });

  const handleSelectedBuildingID = async (selectedBuildingID: {
    key: string;
    value: string;
  }) => {
    await setSelectedBuildingID(selectedBuildingID);
    const building_red_dot_api = await fetchRedDots(String(selectedBuildingID?.key));
    const record_id = building_red_dot_api.map((item: any) => item.record_id);
    const x_dots = building_red_dot_api.map((item: any) => item.x);
    const y_dots = building_red_dot_api.map((item: any) => item.y);
    setRedDotX(x_dots);
    setRedDotY(y_dots);

    const coordinates = building_red_dot_api.map((item: any) => ({ x: item.x, y: item.y, record_id: item.record_id }));
    setCoordinates(coordinates);
  };

  return (
    <div>
      <Sidebar />

      <div className="mainBody">
        <h5>BIM Models</h5>

        <br></br>
        <br></br>

        <div className="selectBuildingDropdown">
          Building :
          <ScrollableDropdown
            options={buildingOption}
            onSelect={handleSelectedBuildingID}
          />
        </div>
        <div>

          <br></br>
          <br></br>

          <div style={{ width: '10px', height: '10px', position: 'relative', textAlign: 'center', marginLeft: '170px', marginTop: '50px' }}>
            <ImageWithDots_2 coordinates={coordinates} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default BMI_Model;
