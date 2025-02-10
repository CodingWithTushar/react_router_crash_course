import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
   const {userId} = useParams()
  return (

    <div className='text-5xl text-center font-semibold'>User:{userId}</div>
  )
}

export default User