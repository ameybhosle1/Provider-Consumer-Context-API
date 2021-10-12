import axios from 'axios';
import React , { useState } from 'react'

function Login() {

  const [uname , setUname] = useState('')
  const [pass , setPass] = useState('')

  async function onSubmit(event) {
      event.preventDefault();
      await axios.post('http://localhost:4000/login',{
          uname:uname,
          pass:pass
      }).then(response =>{
          console.log(response);
          if(response.data.token){
              localStorage.setItem('userID',response.data.token);
              window.location = '/dashboard';
          }else{
              alert("Please Check Your Name or Password");
          }
      })
  }

  return (
    <div>
        <form onSubmit={onSubmit}>
            <label> USERNAME
                <input name="uname" value={uname} onChange={e => setUname(e.target.value)} />
            </label><br />
            <label>PASSWORD
                <input name="pass" value={pass} onChange={e => setPass(e.target.value)} />
            </label>
            <button>Submit</button>
        </form>
    </div>
  );
}

export default Login;