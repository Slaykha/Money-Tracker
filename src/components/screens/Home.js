import React from 'react'
import { HomePage } from '../home/HomePage'

export const Home = ({user}) => {
  return (
    <div>
      <HomePage user={user} />
    </div>
  )
}
