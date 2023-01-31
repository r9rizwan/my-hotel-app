import { check } from "prettier";
import React,{useState,useEffect} from 'react';
import SearchButton from "./SearchButton";

const SearchBar = (props) => {

  const [searchInput, setSearchInput] = useState("");
 

 
 const handleChange = (e) => {
   e.preventDefault();
   setSearchInput(e.target.value);
 };
 
 if (searchInput.length > 0) {

      props.alldata.filter((firstName) => {
     return firstName.name.match(searchInput);
 });
 }
 
 return <div>
 
 {console.log(props.alldata)}
 <input
    type="search"
    placeholder="Search here"
    onChange={handleChange}
    value={searchInput} />
 
 <table>
   <tr>
     <th>firstName</th>
     <th>surname</th>
   </tr>
 
 {/* {customers.map((firstName, *index*) => {
 
 <div>
   <tr>
     <td>{firstName.name}</td>
     
   </tr>
 </div>
 
 })} */}
 </table>
 
 </div>
 
 
 };
 
 export default SearchBar;
