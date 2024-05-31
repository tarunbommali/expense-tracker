import React, { useState } from 'react';
import { incomeItems, expenseItems } from '../helper/data';
import { IoMdClose } from "react-icons/io";

const AddTransactionForm = ({ showForm, toggleForm, addExpense, addIncome }) => {
  const [type, setType] = useState('income');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = { amount: parseFloat(amount), description };

    if (type === 'income') {
      addIncome(transaction);
    } else {
      addExpense(transaction);
    }

    // Clear the form inputs
    setDescription('');
    setAmount('');

    toggleForm(); // Close the modal after submission
  };

  const className = showForm ? "fixed inset-0 flex justify-center items-center z-50" : "hidden";

  const items = type === 'income' ? incomeItems : expenseItems;

  return (
    <div className={className}>
      <div className='relative p-4 w-[400px] h-[600px] overflow-auto bg-white px-4 rounded-lg shadow-lg'>
        <button 
          onClick={toggleForm} 
          className='absolute top-2 right-2  text-[#d1d5db] hover:text-black rounded px-4 py-2'
        >
          <IoMdClose className='text-2xl '/>
        </button>
        <form onSubmit={handleSubmit} className='mt-12 text-sm'>
          <div className='mb-4'>
            <label className='block mb-2 '>Type</label>
            <select 
              value={type}
              onChange={(e) => setType(e.target.value)}
              className='w-full p-2 rounded outline-none border'
            >
              <option value='income'>Income</option>
              <option value='expense'>Expense</option>
            </select>
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Amount</label>
            <input 
              type='number' 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className='w-full p-2 rounded outline-none border'
              required
            />
          </div>
          <div className='flex overflow-x-auto space-x-4 p-2   rounded mb-4'>
            {items.map((item, index) => (
              <div 
                key={index} 
                className='flex-shrink-0 px-4 py-2 bg-gray-200 rounded cursor-pointer hover:bg-gray-300'
                onClick={() => setDescription(item)}
              >
                {item}
              </div>
            ))}
          </div>

          <div className='mb-4'>
            <label className='block mb-2'>Description</label>
            <input 
              type='text' 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='w-full p-2 rounded outline-none border'
              required
            />
          </div>
          
          <button 
            type='submit' 
            className='w-full bg-blue-500 text-white rounded px-4 py-2'
          >
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransactionForm;
