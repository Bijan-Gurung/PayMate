import React from 'react'
import { resetUser } from '@/redux/reducers/userSlice'
import { useDispatch } from 'react-redux'

const Users = () => {
  const dispatch = useDispatch()
  return (
    <div><button type="button" onClick={()=>dispatch(resetUser())}>logout</button></div>
  )
}

export default Users