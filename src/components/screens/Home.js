import React from 'react'
import HomePage from '../home/HomePage'

export const Home = ({user, spendings, todaysTotal}) => {
  return (
    <div>
      <HomePage user={user} spendings={spendings} todaysTotal={todaysTotal} />
    </div>
  )
}
