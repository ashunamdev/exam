import React, { useState } from "react";
// import axios from "axios";
import PropTypes from 'prop-types';
// import './login.css'
import './Login.css';
import Admin from "layouts/Admin.js";
import LoginPng from "../assets/img/login.png"
import RTL from "layouts/RTL.js";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";



// async function loginUser(credentials) {
//  return fetch('http://3.139.234.205/login/', {
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json'
//    },
//    body: JSON.stringify(credentials)
//  })
//    .then(data => data.json())
//    console.log(data,"data");
// }

export default function Login({setToken}) {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
const [ tokenId , setTokenId] = useState();

  const setForm = (event) => {
    let { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setTokenId("dummy Token");
    // console.log(tokenId);
    setToken(tokenId)
    // axios
    //   .post("http://3.139.234.205/login/", loginData)
    //   .then((res) => {
    //     console.log("RESPONSE ==== : ", res);
    //   })
    //   .catch((err) => {
    //     console.log("ERROR: ====", err);
    //   });
      if (tokenId) {
        ReactDOM.render(
          <BrowserRouter>
            <Switch>
              {/* <Route path="/App" component={App} /> */}
              <Route path="/admin" component={Admin} />
              <Route path="/rtl" component={RTL} />
              <Redirect from="/" to="/admin" />
            </Switch>
          </BrowserRouter>,
          document.getElementById("root")
        );
      }
  };

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   const token = await loginUser({
  //     username,
  //     password
  //   });
  //   setToken(token);
  // }

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <img className="ImageLogin" src={LoginPng} alt="LoginPng" />
      <form className="formParent" onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            type="text"
            name="username"
            placeholder="Enter User Name"
            onChange={(e) => setForm(e)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={(e) => setForm(e)}
          />
        </label>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};
