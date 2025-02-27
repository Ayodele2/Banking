import React from 'react'
import HeaderBox from '../componets/HeaderBox'
import TotalBalanceBox from '../componets/TotalBalanceBox';
import RightSideBar from '../componets/RightSideBar';

const Home = () => {
    const loggedIn = {firstName: 'Mayowa', lastName: 'Akinteye', email: 'akinteyemayowa28@gmail.com'};


  return (
    <section className='home'>
            <div className='home-content'>
                <header className="home-header">
                    <HeaderBox 
                    type="greeting" 
                    title="Welcome"
                    user={loggedIn ?.firstName || 'guest'}
                    subtext="Access and manage your account effectivly"
                    />


                    <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={2500.99}
                    />
                </header>
                RECENT TRANSACTIONS
            </div>

            <RightSideBar 
            user={loggedIn}
            transactions={[]}
            banks={[{currentBalance: 123.50}, {currentBalance: 500.50}]}/>

    </section>
  )
}

export default Home