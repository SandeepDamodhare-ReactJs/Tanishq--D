import axios from 'axios'
import React, { useEffect } from 'react'

const Profile = () => {


    const fetch = () => {

    }

    useEffect(()=> {
axios.get("http://localhost:8080/user/login")
.then((res)=> {
    console.log("res", res)
})
.catch((error)=> {
    console.log(error);
})
    },[])
  return (
    <div>Profile</div>
  )
}

export default Profile