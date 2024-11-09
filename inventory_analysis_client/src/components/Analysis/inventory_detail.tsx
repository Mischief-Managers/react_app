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
    building: string;
    maintenance_required: number;
    high_priority: number
    equipment_name: string
};

type ImageData = {
    image: string;
};


const flask_api_project_url = FLASK_API_URL;

const InventoryDetail: React.FC = () => {
    const { record_id } = useParams();
    const [itemData, setItemData] = useState<Data>();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [itemImageStr, setItemImageStr] = useState<ImageData>();


    useEffect(() => {
        const postData = {
            record_id: record_id,
        };

        const apiUrl = `${flask_api_project_url}/get-specific-record`;
        const apiUrl_2 = `${flask_api_project_url}/get-specific-image`;

        axios.post(apiUrl, postData)
            .then((response) => {
                setLoading(false);
                setItemData(response.data)
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });


        axios.post(apiUrl_2, postData)
            .then((response) => {
                setLoading(false);
                setItemImageStr(response.data)
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });


    }, [record_id]);


    console.log(itemImageStr?.image)
    return (
        <div><Sidebar />
            <div className="mainBody">
                <div>
                    <h5>Inventory Details</h5>
                    <h2>{itemData?.equipment_name}</h2>
                </div>
                <div>

                    <br></br>
                    <br></br>
                    <br></br>

                    <h4 style={{ textAlign: 'left', marginLeft: '40px' }} >General Information</h4>

                    <table className="table_2">
                        <thead>
                            <tr>
                                <th style={{ width: '250px' }}>Key</th>
                                <th style={{ width: '250px' }}>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Building</td>
                                <td>{itemData?.building}</td>
                            </tr>

                            <tr>
                                <td>Date Time</td>
                                <td>{itemData?.date_time}</td>
                            </tr>

                            <tr>
                                <td>Comments</td>
                                <td>{itemData?.comments}</td>
                            </tr>

                            <tr>
                                <td>Required Maintenence</td>
                                <td>{itemData?.maintenance_required === 1 ? 'True' : 'False'}</td>
                            </tr>

                            <tr>
                                <td>High Priority</td>
                                <td>{itemData?.high_priority === 1 ? 'True' : 'False'}</td>
                            </tr>
                        </tbody>
                    </table>

                    <br></br>
                    <br></br>
                    <br></br>

                    <h4 style={{ textAlign: 'left', marginLeft: '40px' }} >Primary Information</h4>

                    <table className="table_2">
                        <thead>
                            <tr>
                                <th style={{ width: '250px' }}>Key</th>
                                <th style={{ width: '250px' }}>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemData != null && itemData.attributes.primary &&
                                Object.entries(itemData.attributes.primary).map(([key, value]) => (
                                    <tr key={`primary-${key}`}>
                                        <td>{key}</td>
                                        <td>{value}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                    <br></br>
                    <br></br>
                    <br></br>

                    <h4 style={{ textAlign: 'left', marginLeft: '40px' }} >Secondary Information</h4>

                    <table className="table_2">
                        <thead>
                            <tr>
                                <th style={{ width: '250px' }}>Key</th>
                                <th style={{ width: '250px' }}>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemData != null && itemData.attributes.secondary &&
                                Object.entries(itemData.attributes.secondary).map(([key, value]) => (
                                    <tr key={`secondary-${key}`}>
                                        <td>{key}</td>
                                        <td>{value}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                    <br></br>
                    <br></br>
                    <br></br>

                    <div>
                        <h4 style={{ textAlign: 'left', marginLeft: '40px' }}>Image </h4>

                        <br></br>

                        <img
                            src={itemImageStr?.image ? `data:image/png;base64,${itemImageStr.image}` : ''}
                            alt="Base64 representation"
                            style={{ width: '300px', height: 'auto', textAlign: 'left', marginLeft: '40px' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetail;
