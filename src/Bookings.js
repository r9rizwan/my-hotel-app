import React,{useState,useEffect} from 'react';
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('https://cyf-react.glitch.me'

    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      }
      )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          setData(myJson)
        });
    }
    useEffect(()=>{
      getData()
    },[])

  return (
    <div className="App-content">
      {/* {console.log(bookings)} */}
     
      <div className="container">
        <Search  alldata={FakeBookings} />
        {/* <SearchResults results={FakeBookings} /> */}
      </div>
    </div>
  );
};

export default Bookings;
