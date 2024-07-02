import axios from 'axios'
import React, { useEffect } from 'react'

const Profile = () => {


    const fetch = () => {

    }

    useEffect(()=> {
axios.get("https://server-7bk0.onrender.com/profile")
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