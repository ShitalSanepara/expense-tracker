import React from 'react';
import {createContext} from 'react';
import { useContext } from 'react';

const MyContext = createContext([
  { date: "2023-01-01", descrption: "income", amount: 25000 }, 
  { date: "2023-01-01", descrption: "rent", amount: 18000 }, 
  { date: "2023-01-01", descrption: "food", amount: 5000 }, 
]);



export default MyContext;

