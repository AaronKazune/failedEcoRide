import axios from 'axios'
import React from 'react'
import{useEffect} from 'react'
import {useState} from 'react'
import axios from 'axios'

export const users = () => {
  const [users,setUsers] = useState([])

  useEffect(()=>{
    const fetchAllUsers = async ()=>{
      try{
        const res = await axios.get("http:localhost:3001/users")
        console.log(res)
      }catch(err){
        console.log(err)
      }
    }
    fetchAllUsers()
  },[])
  return (
    <div>users</div>
  )
}

export default users
