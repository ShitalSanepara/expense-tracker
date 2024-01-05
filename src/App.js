
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

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route index element={<AddFrom />} />
      <Route path="table" element={<Table />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
