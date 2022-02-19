import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { register, login } from "../../config/firebase";
import { useNavigate } from "react-router-dom";



function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const onSignin = () => {
    if (email.length == 0) {
      alert("Please enter your email");
      return;
    }
    if (password.length == 0) {
      alert("Please enter your password");
      return;
    }
    login(email, password,props);
    
  };

  return (
    <>
      <div class="loginParentDiv text-center w-35 mx-auto my-4 p-4">
        <svg
          width="150px"
          height="150px"
          viewBox="0 0 1024 1024"
          data-aut-id="icon"
          fill-rule="evenodd"
        >
          <path
            class="rui-77aaa"
            d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
          ></path>
        </svg>
        <div class="mb-2">
          <h3>Login</h3>
          <label class="float-left">Email</label>

          <input
            onChange={(e) => setEmail(e.target.value)}
            class="input form-control mb-2"
            type="email"
            name="email"
            required
          />
          <label class="float-left">Password</label>
          <input
            required
            onChange={(e) => setPassword(e.target.value)}
            class="input form-control mb-2"
            type="password"
            name="password"
          />
          <button onClick={onSignin}>Login</button>
        </div>
        <p onClick={() => navigate('/register')}>Signup</p>
      </div>
    </>
  );
}

export default Login;
