import { useState } from "react";

const DataTable = () => {

  const [filterName, setName] = new useState(sampleData);
  const [filterage, setAge] = new useState(sampleData);

  const filterBySearch = (event) => {

    const query = event.target.value;
    var updatedList = [...sampleData];
    updatedList = updatedList.filter((data) => {
      return data.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setName(updatedList);
  };

  return (
    <div className="DataTable">
      <div className="search-header">
        <div className="search-text">Search:</div>
        <input id="search-box" onChange={filterBySearch} />
      </div>
      <div id="data-list">
        <ol>
          {filteredList.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default DataTable
