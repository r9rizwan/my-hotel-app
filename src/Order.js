import React, { useState, useEffect } from 'react';
import Restaurant from './Restaurant';
import RestaurantButton from './RestaurantButton';
import OrderType from './OrderType';

const Order = (props) => {
  // const pizzas = 0;
  const [count, setCount] = useState(0);

   const  orderOne=(()=>{

      setCount(count +1)
   })
  return (
    <><div class="container">
      {console.log(props.orderType)}
  
      <h4>Restaurant Orders</h4>
      <ul>
        <li>
          <p>Pizza in Order component {count} added</p>
          <button className="btn btn-primary btn-sm" onClick={props.orderOne}>Original Add</button>

          {/* <button className="btn btn-secondary btn-sm" onClick={() => setCount((count - 1)>0)}>Remove</button> */}
        </li>
      </ul>
    </div><Restaurant restaurantOrder={orderOne} updateCount={count} />
        <RestaurantButton restaurantOrder={orderOne} updateCount={count} /></>
  );
};

export default Order;

