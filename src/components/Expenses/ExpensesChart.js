import React from 'react'
import Chart from '../Chart/Chart'

const ExpensesChart = (props) => {

    console.log(props)
    const chartDatapoints =[
        {label:'jan' , value :0},
        {label:'Feb' , value :0},
        {label:'March' , value :0},
        {label:'April' , value :0},
        {label:'May' , value :0},
        {label:'june' , value :0},
        {label:'july' , value :0},
        {label:'Auguest' , value :0},
        {label:'Sep' , value :0},
        {label:'Oct' , value :0},
        {label:'Nov' , value :0},
        {label:'Dec' , value :0},
    ];
   
    props.items.forEach(expenses => {
        const expenseMonth = expenses?.date?.getMonth();
        chartDatapoints[expenseMonth].value = expenses.amount;
        
    });
  return (
    <Chart  dataPoints={chartDatapoints}/>
  )
}

export default ExpensesChart
