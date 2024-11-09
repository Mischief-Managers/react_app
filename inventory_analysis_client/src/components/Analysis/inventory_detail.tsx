import Sidebar from "../SideBar";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import axios from 'axios';

import { FLASK_API_URL } from '../../constants';

type Attributes = {
    primary: {
      [key: string]: string;
    };
    secondary: {
      [key: string]: string;
    };
  };
  
  type Data = {
    attributes: Attributes;
    date_time: string;
    comments: string;
    building: string
  };
  
  interface TableProps {
    data: Data;
  }


const flask_api_project_url = FLASK_API_URL;

const InventoryDetail: React.FC = () => {
    const { record_id } = useParams();
    const [itemData, setItemData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const postData = {
            record_id: record_id,
        };

        const apiUrl = `${flask_api_project_url}/get-specific-record`;

        axios.post(apiUrl, postData)
            .then((response) => {
                console.log(response)
                setLoading(false);
                setItemData(response.data)
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
        
    }, [record_id]);


    return (
        <div><Sidebar />
            <div className="mainBody">
                <div>
                    <h5>Inventory Details</h5>
                    <pre>{JSON.stringify(itemData, null, 2)}</pre>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default InventoryDetail;
