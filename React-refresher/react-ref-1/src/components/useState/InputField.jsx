import React, { useState } from 'react';

function InputField() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p className="p-2">You typed: {inputValue}</p>
    </div>
  );
}

export default InputField;
