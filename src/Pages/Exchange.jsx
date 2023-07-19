import React, { useContext } from 'react'
import { myContext } from '../ContextAPI'

const Exchange = () => {
  const contextResponse = useContext(myContext)
  return (
    <div>Exchange</div>
  )
}

export default Exchange