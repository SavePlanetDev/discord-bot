import axios from 'axios'
import { useEffect, useState } from "react";


export const Testapi = () => {
  const [customerOrders, setCustomerOrders] = useState([]);


  useEffect(() => {
    const getOrders = () => {
      axios
        .get(`http://localhost:3001/v1/subscription/plan/1`)
        .then((response) => {
          setCustomerOrders(...customerOrders, response.data);
          console.log(response.data)})
        .catch((error) => {
                    if( error.response ){
                        console.log(error.response.data)
                    }
        });
        
    };

    getOrders();
    
  }, []);
   
  
};







