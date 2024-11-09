import React, { useState, useEffect } from 'react';
import Sidebar from "../SideBar";
import '../../assets/css/Table.css';

import { FLASK_API_URL } from '../../constants';


interface TableItem {
  record_id: number;
  equipment_name: string;
  street_address: string;
  age: number;
}

const flask_api_project_url = FLASK_API_URL;

const ListShow: React.FC = () => {
  const [items, setItems] = useState<TableItem[]>([]);
  const [sortedItems, setSortedItems] = useState<TableItem[]>([]);

  const [sortConfig, setSortConfig] = useState<{ key: keyof TableItem; direction: 'ascending' | 'descending' }>({
    key: 'record_id',
    direction: 'ascending',
  });

  const [filterText, setFilterText] = useState<string>('');

  useEffect(() => {

    const fetchData = async () => {
      try {
        const apiUrl = `${flask_api_project_url}/get-records`;
        
        console.log(apiUrl)
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log(await response.json())
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
          placeholder="Filter by any attribute..."
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
                <th onClick={() => requestSort('record_id')}>ID {getSortIcon('record_id')}</th>
                <th onClick={() => requestSort('equipment_name')}>Name {getSortIcon('equipment_name')}</th>
                <th onClick={() => requestSort('street_address')}>Description {getSortIcon('street_address')}</th>
                <th onClick={() => requestSort('age')}>Price {getSortIcon('age')}</th>
              </tr>
            </thead>
            <tbody>
              {sortedItems.map((item) => (
                <tr key={item.record_id}>
                  <td>{item.record_id}</td>
                  <td>{item.equipment_name}</td>
                  <td>{item.street_address}</td>
                  <td>${item.age}</td>
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
