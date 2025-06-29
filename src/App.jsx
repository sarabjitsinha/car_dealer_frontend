import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Suspense, lazy,useContext, useEffect } from "react";
import './App.css'
import Header from "./Components/Header";
import Myprovider from "../utils/Myprovider";
import { mycontext } from "../utils/Myprovider";

const CarList = lazy(() => import("./pages/CarList"));
const CarDetail = lazy(() => import("./pages/CarDetail"));
const Login = lazy(() => import("./pages/Login"));
const Admin = lazy(() => import("./pages/Admin"));

function App() {
  const {user}=useContext(mycontext)

  useEffect(()=>{

  },[user])

  return (
    
    <HelmetProvider>        
      <BrowserRouter>
       <Header/>
        <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Navigate to="/" />} />
            <Route path="/cars" element={<CarList />} />
            <Route path="/cars/:slug" element={<CarDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={user ?<Admin />:<div>Please login to view this page</div>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
