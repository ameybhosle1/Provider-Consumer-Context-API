import React , { useEffect } from 'react'

function Logout() {
  useEffect(()=>{
      localStorage.removeItem('userID');
  },[])
  return (
    <div>
        Plaese LOGIN AGAIN USING THIS ROUTE
    </div>
  );
}

export default Logout;
