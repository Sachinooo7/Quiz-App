import React from 'react';
import {Navigate, Route, Routes, useLocation} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import MyResultPage from './pages/MyResultPage.jsx';


function RequiredAuth({children}){
    const isLoggedIn=Boolean(localStorage.getItem("authToken"));
    const location=useLocation();

    if(!isLoggedIn){
      return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }

    return children;
}



const App = () => {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
       <Route path="/signup" element={<Signup/>} />
       <Route path="/result" element={
        <RequiredAuth>
        <MyResultPage/>
        </RequiredAuth>}
        />
     </Routes>
      
    </div>
  )
}

export default App;
