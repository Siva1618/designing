//import logo from './logo.svg';
import React, {useState} from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

const App = (props) => {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 94.67,
      date: new Date(2020, 7, 14),
    },

    { id: "e2", title: "New Tv", amount: 799.47, date: new Date(2021, 5, 16) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },

    {
      id: "e4",
      title: "New desk(Modern)",
      amount: 98.67,
      date: new Date(2022, 3, 25),
    },
  ];
  const[expenses,setExpenses]=useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense =>{
    setExpenses(prevExpenses=>{
      return[expense,...prevExpenses]
    })
    /*console.log("In app.js");
  
    console.log(expenses);*/

  }
  return (
    <>
      <center>
        <h2>Let's get started </h2>
      </center>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}  />
    </>
  );
};
export default App;
