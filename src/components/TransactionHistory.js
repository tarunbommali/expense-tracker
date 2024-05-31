import React from "react";
import { useSelector } from "react-redux";
import TransactionItem from "./TransactionItem";

const TransactionHistory = () => {
  const { incomeStatement, expenseStatement } = useSelector((state) => state.finance);

  const hasIncome = incomeStatement && incomeStatement.length > 0;
  const hasExpense = expenseStatement && expenseStatement.length > 0;

  return (
    <div className="flex w-full min-h-[400px] px-6 my-6 py-2">
      {hasIncome || hasExpense ? (
        <>
          <div className="w-1/2 py-2 px-6 bg-white mx-2 border-2 rounded-sm border-[#e6e6e6]">
            <h1 className="text-xl font-semibold text-blue-950">Income</h1>
            <ul>
              {hasIncome ? (
                incomeStatement.map((transaction, index) => (
                  <TransactionItem
                    key={index}
                    date={transaction.date}
                    description={transaction.description}
                    amount={transaction.amount}
                    isIncome
                  />
                ))
              ) : (
                <li>Yet to be added income transaction</li>
              )}
            </ul>
          </div>
          <div className="w-1/2 py-2 px-6 bg-white mx-2 border-2 rounded-sm border-[#e6e6e6]">
            <h1 className="text-xl font-semibold text-blue-950">Expense</h1>
            <ul>
              {hasExpense ? (
                expenseStatement.map((transaction, index) => (
                  <TransactionItem
                    key={index}
                    date={transaction.date}
                    description={transaction.description}
                    amount={transaction.amount}
                  />
                ))
              ) : (
                <li>Yet to be added expense transaction</li>
              )}
            </ul>
          </div>
        </>
      ) : (
        <div className="w-full py-2 px-6 bg-white mx-2 border-2 rounded-sm border-[#e6e6e6]">
          No transactions added yet
        </div>
      )}
    </div>
  );
};

export default TransactionHistory;
