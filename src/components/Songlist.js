import React, { useState, useEffect } from 'react'
import axios  from 'axios'

export default function Songlist () {
  useEffect(() => {
    console.log("working");
    axios.get("http://localhost:3001/api/get").then((response) => {
      console.log("okay",response);
      console.log("are you there");
    })
    .catch(error => console.error(error));
    console.log("blahbblah");
  },[])
  return (
    <div className="z-0 bg-black">
        
    </div>
  )
}
