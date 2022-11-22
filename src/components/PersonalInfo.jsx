import React from "react"
import logo from "../assets/anonymous.png"

const PersonalInfo = () => {
   const data = {
    fullName : "Rashad Guluzadeh",
    age : "20",
    gender : "male",
    mail : "rashadquluzade@gmail.com",
    phoneNumber : "+994558990700" 
   };
   return (
    <div>
        <h2>Personal Info</h2>
        <img  class="logo" src={logo}/>
        <p>Name : {data.fullName}</p>
        <p>Age : {data.age}</p>
        <p>Gender : {data.gender}</p>
        <p>Mail : {data.mail}</p>
        <p>Phone : {data.phoneNumber}</p>
    </div>
   )
}

export default PersonalInfo