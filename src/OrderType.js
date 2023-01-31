// import React, { useState, useEffect } from 'react';
// import Order from './Order';
// import Restaurant from './Restaurant';
// import RestaurantButton from './RestaurantButton';

// const OrderType = () => {
//     // const pizzas = 0;
//     const [pizza, setPizza] = useState(0);
//     const [salad, setSalad] = useState(0);
//     const [cake, setCake] = useState(0);
  
//     //  const  orderPizza=(()=>{
  
//     //     setPizza(count +1)
//     //  })

//     //  const  orderSalad=(()=>{
  
//     //     setSalad(count +1)
//     //  })

//     //  const  orderCake=(()=>{
  
//     //     setCake(count +1)
//     //  })

//     return (
//       <><div class="container">
  
//         <h4>Restaurant Orders</h4>
//         <ul>
//           <li>
//             <p>Pizza in Order component {pizza} added</p>
//             <button className="btn btn-primary btn-sm" onClick={orderPizza}>Original Pizza Add</button>
//             <p>Pizza in Order component {salad} added</p>
//             <button className="btn btn-primary btn-sm" onClick={orderSalad}>Original Salad Add</button>
//             <p>Pizza in Order component {cake} added</p>
//             <button className="btn btn-primary btn-sm" onClick={orderCake}>Original Cake Add</button>
  
//             {/* <button className="btn btn-secondary btn-sm" onClick={() => setCount((count - 1)>0)}>Remove</button> */}
//           </li>
//         </ul>
//       </div><Order restaurantOrder={orderOne} updateCount={count} /></>
//     );
//   };
  
//   export default OrderType;