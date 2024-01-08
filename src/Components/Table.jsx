import React, { useEffect } from 'react'
import { useContext } from 'react';
import MyContext from '../MyContext';

const Table = () => {
  const { expense, setExpense } = useContext(MyContext);

  return (
    
    <div>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th>Sr.NO</th>
                        <th>Name</th>
                        <th>City</th>
                    </tr>
                </thead>
                
                {expense.map((info) => {
                    return (
                      <tr>
                          <td>{info.date}</td>
                          <td>{info.amount}</td>
                          <td>{info.descrption}</td>
                      </tr>
                    )
                })}
            </table>
            
        </div>
  )
}

export default Table;