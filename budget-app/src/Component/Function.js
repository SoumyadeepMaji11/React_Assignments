import React,{useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { setBudget } from '../Action/budgetAction';

function Function(){
  const [budgets,setBudgets]=useState(0);
  const [expenses,setExpenses]=useState(0);
  var rem=budgets-expenses;
  const remaining = useSelector(state => state)
  let dispatch = useDispatch();
  
  return (
    <div className="Function">
      <h1>React Assignment</h1>
      <label htmlFor="budget">Budget: </label>
      <input type='text' id="budget" onChange={(e)=>{setBudgets(e.target.value);dispatch(setBudget(e.target.value,expenses))}}/>&nbsp;&nbsp;
      <label htmlFor="expense">Expenses: </label>
      <input type='text' id='expense' onChange={(e)=>{setExpenses(e.target.value);dispatch(setBudget(budgets,e.target.value))}}/>
      <h2>Remaining Budget:{remaining}</h2>
    </div>
  );
}
    
export default Function;