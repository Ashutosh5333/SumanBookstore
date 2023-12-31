import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate,useNavigate } from 'react-router-dom';

const Privateroute = ({children}) => {
 const navigate = useNavigate()

 const isAuth = useSelector(store =>store.AuthReducer.isAuth)
  const token = JSON.parse(localStorage.getItem("usertoken"))

  if(!token){
    return <Navigate  to="/login" />
  }

return children
  
}

export default Privateroute