import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AddTransactionForm from './AddTransactionForm';
import { setExpense,setIncome } from '../redux/financeSlice';
import useBodyOverflowHidden from '../custom/useBodyOverflowHidden';

const AddTransaction = () => {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  useBodyOverflowHidden(showForm);
  const toggleForm = () => {
    setShowForm(prevShowForm => !prevShowForm);
  };

  const handleAddExpense = (transaction) => {
    dispatch(setExpense(transaction));
  };

  const handleAddIncome = (transaction) => {
    dispatch(setIncome(transaction));
  };

  return (
    <>
      <button 
        onClick={toggleForm} 
        className='bg-[#1b2dac] text-white hover:opacity-90 rounded-lg px-4 py-2 text-lg mb-4'
      >
        Add Transaction
      </button>
      <AddTransactionForm 
        showForm={showForm} 
        toggleForm={toggleForm} 
        addExpense={handleAddExpense} 
        addIncome={handleAddIncome} 
      />
    </>
  );
};

export default AddTransaction;
