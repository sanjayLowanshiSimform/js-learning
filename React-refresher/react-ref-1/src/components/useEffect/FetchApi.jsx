import React, { useState, useEffect } from "react";
import axios from "axios"; // Importing Axios

function FetchApi() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from an API
    axios
      .get("https://api.example.com/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default FetchApi;
