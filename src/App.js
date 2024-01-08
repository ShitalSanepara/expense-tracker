
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Navbar from './Components/Navbar';
import AddFrom from './Components/AddFrom';
import Table from './Components/Table';
import React,{useState} from 'react';
import MyContext from "./MyContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [expense, setExpense] = useState([
    { date: "2023-01-01", descrption: "income", amount: 25000 }, 
    { date: "2023-01-01", descrption: "rent", amount: 18000 }, 
    { date: "2023-01-01", descrption: "food", amount: 5000 }, 
  ]);

  return (
    <BrowserRouter>
      <Navbar/>
      <MyContext.Provider value={{ expense, setExpense }}>
        <Routes>
          <Route index element={<AddFrom />} />
          <Route path="table" element={<Table />} />
        </Routes>
      </MyContext.Provider>
      <ToastContainer />
    </BrowserRouter>
    
  );
}

export default App;
