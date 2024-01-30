import React, { useState } from 'react';

function List() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  return (
    <div className="px-2">
      <button onClick={addItem} className="mb-2 px-3 bg-myBlue py-1 rounded-md text-myYellow">Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li className="bg-myYellow p-2 rounded mb-2 last:mb-0" key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
