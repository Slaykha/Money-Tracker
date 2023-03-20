import React from 'react'
import { HomePage } from '../home/HomePage'

export const Home = ({user, spendings}) => {
  return (
    <div>
      <HomePage user={user} spendings={spendings} />
    </div>
  )
}
