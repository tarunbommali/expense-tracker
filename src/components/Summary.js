import React from 'react'
import { useSelector } from 'react-redux';

const Summary = () => {
  const { expense, income} = useSelector((state) => state.finance);

  return (
    <div className='flex flex-col items-center py-6 w-[100vw] h-[400px] my-4  rounded-lg shadow-md'>
<div className='flex text-4xl font-semibold text-center py-2'>
  My Balance {income-expense < 0 ? <span className='text-[#777777]'><span className="ml-2 px-1">₹</span>{income-expense}</span> : <span><span className="ml-2 px-1">₹</span>{income-expense}</span>}
</div>

        <div className='flex flex-col items-center  bg-[#f7f9fb]  py-4 w-full'>
            <h1 className='text-3xl font-semibold py-4'><span className="px-1">₹</span>{income}</h1>
            <p className='text-[#777777]'>Total Income</p>
        </div>

        <div className='flex flex-col items-center  bg-[#f7f9fb] py-6 w-full'>
            <h1 className='text-3xl font-semibold py-4'><span className="px-1">₹</span>{expense}</h1>
            <p className='text-[#777777]'>Total Expense</p>
        </div>
    </div>
  )
} 

export default Summary