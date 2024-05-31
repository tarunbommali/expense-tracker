import React from 'react'
import Header from '../components/Header'
import Summary from '../components/Summary'
import PIChart from '../components/Chart'
import TransactionHistory from '../components/TransactionHistory'

const Home = () => {
  return (
    <div className='flex flex-col'>
        <Header/>
        <div className='flex flex-col min-h-full  bg-[#f5f7f8]'>
            <div className='flex items-center px-6 mx-6'>
                <Summary/>
                <PIChart/>
            </div>
            <div>
                <TransactionHistory/>
            </div>
        </div>
        
    </div>
  )
}

export default Home