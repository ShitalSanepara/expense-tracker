
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
  // localStorage.setItem("MyExpenses", JSON.stringify([]));
  let data = localStorage.getItem("MyExpenses");

  if (data == null){
    data = [];   // empty
    localStorage.setItem("MyExpenses", JSON.stringify([]));
  }
  else {
    data = JSON.parse(data);
  }

  const [expense, setExpense] = useState(data);
  
  return (
    <BrowserRouter>
    <div className='row from'>
    <div className='col-md-3'>
      <Navbar/>
    </div>
    <div className='col-md-9'>
      <MyContext.Provider value={{ expense, setExpense }}>
        <Routes>
          <Route index element={<AddFrom />} />
          <Route path="table" element={<Table />} />
        </Routes>
      </MyContext.Provider>
      </div>
      <ToastContainer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
