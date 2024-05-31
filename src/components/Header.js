import React from 'react'
import AddTransaction from './AddTransaction'

const Header = () => {
  return (
    <div className='flex justify-between px-6 py-4 text-2xl font-semibold'>
        <h1><span className='border-t-4 border-green-800 '>Expense</span> Tracker</h1>
        <AddTransaction/>
    </div>
  )
}

export default Header