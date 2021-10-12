import axios from 'axios';
import React, { useEffect, useState } from 'react'

function DashBoard() {
  const dat = [{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  }]
  var [arrayOfData , setArrayOfData] = useState(dat);
  useEffect(()=>{
    axios.get("http://localhost:4000/todos").then(response =>{
      console.log(response.data.DATA);
      setArrayOfData([...response.data.DATA]);
      console.log(arrayOfData);
    })
  },[])
  return (
    // <div>
    //     {arrayOfData.map((data)=>{
    //       return(
    //         <div>
    //           <li>USER ID IS {data.userId}</li>
    //           <li>TITLE IS {data.title}</li>
    //         </div>
    //       );
    //     })}
    // </div>
    <h1>dbbsdbhs</h1>
  );
}

export default DashBoard;
