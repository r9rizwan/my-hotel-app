import { check } from "prettier";
import React, { useState, useEffect } from "react";
import SearchButton from "./SearchButton";

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const filteredData = props.alldata.filter((item) =>
    item.firstName.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="container">
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />

      <table class="table table-bordered">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Sur Name</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check In Date</th>
          <th>Check Out Date</th>
          <th>Number of Nights</th>
        </tr>
        {filteredData.map((item) => (
          <tr key={item.firstName}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.firstName}</td>
            <td>{item.surname}</td>
            <td>{item.email}</td>
            <td>{item.roomId}</td>
            <td>{item.checkInDate}</td>
            <td>{item.checkOutDate}</td>
            <td>{item.NumberofNights}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default SearchBar;
