import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Login from './components/login';
import { Route, Router,Routes } from 'react-router-dom';
import TrangChu from './components/trangchu';
function App() {
  const [userr,setUser] = useState(null);
  async function login(user = null){ //login({username : a, password : b})
   const username =  user.username;
   const password = user.password;
      const request = {
        username,
        password,
      }
      console.log(user.username);
      console.log(user.password);
      console.log(request);
      axios.post("http://localhost:4000/userControl/login", request)
      .then(res => {
        if(res.status === 200){
          const user = {
            username : res.data.user.username,
            userId : res.data.user._id,
            admin : res.data.user.admin
          }
          setUser(user);
          console.log("Success");
          console.log(userr);
          return true;
        }
      }).catch(e => {
        console.log(e);
        return false;
      })
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/login" Component={(props) =>
          <Login {...props} login={login} />
        }>
        </Route>
        <Route path='/' element = {(props) => <TrangChu {...props} userr={userr}/>}></Route>
      </Routes>
    </div>
    
  );
}

export default App;
