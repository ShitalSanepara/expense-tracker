import React, { useEffect, useContext } from 'react';
import { Button } from 'react-bootstrap';
import MyContext from '../MyContext';
import { ToastContainer, toast } from "react-toastify";

// export default function AddForm(props) {
  export default function AddForm() {

  const { expense, setExpense } = useContext(MyContext);

  // Function to add new entry to the dataset and expense table  
  function addItem() { 
    // let type = itemType.value; 
    let date = document.getElementById("date").value; 
    let descrption = document.getElementById("descrption").value; 
    let amount = document.getElementById("amount").value; 

    console.log("date, ", date);
    console.log("descrption, ", descrption);
    console.log("amount, ", amount);

    setExpense([...expense, {"date": date, "descrption": descrption, "amount": amount}]);
    // localStorage.setItem("MyExpenses", [...expense, {"date": date, "descrption": descrption, "amount": amount}]);

    console.log([...expense, {"date": date, "descrption": descrption, "amount": amount}]);

    toast.success("Add Reacord !", {
        position: toast.POSITION.TOP_RIGHT,
    });

    localStorage.setItem("MyExpenses" , JSON.stringify([...expense, {"date": date, "descrption": descrption, "amount": amount}]));
    //  const cat = localStorage.getItem("MyExpenses");
   
    //  console.log("cat, ", cat);
    
  }

  
  return (
    <div class="input-group">
        <div class="input-group-text mb-3">
           <label>Date<input name="myInput" type="date" id="date"/></label>
           <label>Amount<input name="myInput" type="number" id="amount" /></label>
           <label>Description<input name="myInput" id="descrption"/></label>
           <Button onClick={addItem}>Submit</Button>
        </div>
    </div>
  )
}





