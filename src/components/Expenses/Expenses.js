import React, {useState} from "react";
//import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

  const Expenses = (props) => {
  //console.log("siva comp",props.jp);
  const [filteredYear ,setFilteredYear ] = useState('2020')
  const filterChangeHandler = selectedYear =>{
     setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense=> expense.date.getFullYear().toString()===filteredYear );
  {/*let expensesContent = <p>No expenses found</p>;
  if(filteredExpenses.length > 0){
    expensesContent =  filteredExpenses.map((expense) =>(

      <ExpenseItem key={expense.id}
       title={expense.title}
        amount={expense.amount}
         date={expense.date}
         />
    ))};*/}
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter selected ={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpensesList items={filteredExpenses} />
        <ExpensesChart items={filteredExpenses}/>
        {/*{filteredExpenses.length === 0 &&  <p>No expenses found</p> }
        {filteredExpenses.length > 0 && 
        filteredExpenses.map((expense) =>(

        <ExpenseItem key={expense.id}
         title={expense.title}
          amount={expense.amount}
           date={expense.date}
           />
        ))};
        */}
       {/* {expensesContent}*/}

        {/*<ExpenseItem
          title={props.items[0].title}
          date={props.items[0].date}
          amount={props.items[0].amount}
        />
        <ExpenseItem
          title={props.items[1].title}
          date={props.items[1].date}
          amount={props.items[1].amount}
        />
        <ExpenseItem
          title={props.items[2].title}
          date={props.items[2].date}
          amount={props.items[2].amount}
        />
        <ExpenseItem
          title={props.items[3].title}
          date={props.items[3].date}
          amount={props.items[3].amount}
  />*/}
      </Card>
    </>
  );
};

export default Expenses;
