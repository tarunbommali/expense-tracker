import React from 'react';
import useFormattedDate from '../custom/useFormattedDate';

const TransactionItem = ({ date, amount, description, isIncome }) => {
  const { formatDateTime } = useFormattedDate();
  const { formattedDate, formattedTime } = formatDateTime(date);

  const className = isIncome ? "bg-[#e3eff5] border-[1px] border-[#9ca4a8]" : "bg-[#ff9f97] border-[1px] border-[#7d3d38]";

  return (
    <div className={`flex flex-col py-2 px-2 my-2 rounded-md ${className}`}>
      <div className='flex justify-between text-lg font-semibold'>
        <p>{description}</p>
        <h1><span className="px-1">₹</span>{amount}</h1>
      </div>
      <h1>{formattedTime} {formattedDate}</h1>
    </div>
  );
};

export default TransactionItem;
