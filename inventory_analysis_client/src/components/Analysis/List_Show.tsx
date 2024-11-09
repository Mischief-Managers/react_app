import React, { useState, useEffect } from 'react';
import Sidebar from "../SideBar";
import '../../assets/css/Table.css';

import { FLASK_API_URL } from '../../constants';


interface TableItem {
  id: number;
  name: string;
  description: string;
  price: number;
}

const flask_api_project_url = FLASK_API_URL;

const ListShow: React.FC = () => {
  const [items, setItems] = useState<TableItem[]>([]);
  const [sortedItems, setSortedItems] = useState<TableItem[]>([]);

  const [sortConfig, setSortConfig] = useState<{ key: keyof TableItem; direction: 'ascending' | 'descending' }>({
    key: 'price',
    direction: 'ascending',
  });

  const [filterText, setFilterText] = useState<string>('');

  useEffect(() => {
    const fetchedItems: TableItem[] = [
      { id: 1, name: 'Item One', description: 'This is the first item', price: 10.5 },
      { id: 2, name: 'Item Two', description: 'This is the second item', price: 20.0 },
      { id: 3, name: 'Item Three', description: 'This is the third item', price: 15.75 },
    ];
    setItems(fetchedItems);
    setSortedItems(fetchedItems);  
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
                <th onClick={() => requestSort('id')}>ID {getSortIcon('id')}</th>
                <th onClick={() => requestSort('name')}>Name {getSortIcon('name')}</th>
                <th onClick={() => requestSort('description')}>Description {getSortIcon('description')}</th>
                <th onClick={() => requestSort('price')}>Price {getSortIcon('price')}</th>
              </tr>
            </thead>
            <tbody>
              {sortedItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>${item.price.toFixed(2)}</td>
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
