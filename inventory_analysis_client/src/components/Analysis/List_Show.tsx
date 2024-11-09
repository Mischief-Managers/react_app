import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Sidebar from "../SideBar";
import '../../assets/css/Table.css';

import { FLASK_API_URL } from '../../constants';


interface TableItem {
  record_id: string;
  date_time: Date;
  equipment_name: string;
  building: string;
  high_priority: number;
  maintenance_required: Number;
}

const flask_api_project_url = FLASK_API_URL;

const ListShow: React.FC = () => {
  const [items, setItems] = useState<TableItem[]>([]);
  const [sortedItems, setSortedItems] = useState<TableItem[]>([]);

  const [sortConfig, setSortConfig] = useState<{ key: keyof TableItem; direction: 'ascending' | 'descending' }>({
    key: 'date_time',
    direction: 'descending',
  });

  const [filterText, setFilterText] = useState<string>('');

  useEffect(() => {

    const fetchData = async () => {
      try {
        const apiUrl = `${flask_api_project_url}/get-records`;

        const response = await fetch(apiUrl, {
          headers: { 'Content-Type': 'application/json', 'ngrok-skip-browser-warning' : 'skip-browser-warning' }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data: TableItem[] = await response.json();
        setItems(data);
        setSortedItems(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);


  const requestSort = (key: keyof TableItem) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedItemsData = () => {
    let sortableItems = [...items];


    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }


    if (filterText) {
      sortableItems = sortableItems.filter((item) => {
        return Object.values(item)
          .join(' ')
          .toLowerCase()
          .includes(filterText.toLowerCase());
      });
    }

    return sortableItems;
  };

  useEffect(() => {
    setSortedItems(sortedItemsData());
  }, [items, sortConfig, filterText]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  const getSortIcon = (column: keyof TableItem) => {
    if (!sortConfig || sortConfig.key !== column) return '';
    return sortConfig.direction === 'ascending' ? '▲' : '▼';
  };

  return (
    <div><Sidebar />
      <div className="mainBody">
        <h5>Inventory List</h5>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={handleFilterChange}
          style={{ marginBottom: '2px', marginLeft: '-600px', marginTop: '20px', padding: '8px', width: '30%' }}
        />

        {sortedItems.length === 0 ? (
          <p>No items found.</p>
        ) : (
          <table className="table_2">
            <thead>
              <tr>
                <th onClick={() => requestSort('date_time')}>Date time {getSortIcon('date_time')}</th>
                <th onClick={() => requestSort('building')}>Address {getSortIcon('building')}</th>
                <th onClick={() => requestSort('equipment_name')}>Equipment {getSortIcon('equipment_name')}</th>
                <th onClick={() => requestSort('maintenance_required')}>Maintenance{getSortIcon('maintenance_required')}</th>
                <th onClick={() => requestSort('high_priority')}> Priority {getSortIcon('high_priority')}</th>
              </tr>
            </thead>
            <tbody>
              {sortedItems.map((item) => (
                <tr key={item.record_id}>
                  <td><Link to={`/inventory/item/${item.record_id}`}>{item.date_time.toString()}</Link></td>
                  <td><Link to={`/inventory/item/${item.record_id}`}>{item.building}</Link></td>
                  <td><Link to={`/inventory/item/${item.record_id}`}>{item.equipment_name}</Link></td>
                  <td><Link to={`/inventory/item/${item.record_id}`}>{item.maintenance_required === 1 ? 'True' : 'False'}</Link></td>
                  <td><Link to={`/inventory/item/${item.record_id}`}>{item.high_priority === 1 ? 'True' : 'False'}</Link></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};


export default ListShow;
