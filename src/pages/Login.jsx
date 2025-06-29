/* eslint-disable no-unused-vars */
import { useState,useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { mycontext } from "../../utils/Myprovider";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {user,setuser,token,settoken}=useContext(mycontext);

  useEffect(()=>{

  },[user])

  const handleLogin = async () => {
    try {
      const res = await axios.post("/api/auth/login", { username, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("useron",username)
      setuser(username)
      settoken(res.data.token)
      navigate("/admin");
    } 
    catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} className="mb-2 w-full p-2 border" />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="mb-4 w-full p-2 border" />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2">Login</button>
    </div>
  );
}
