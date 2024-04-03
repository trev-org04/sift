import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import React, { useEffect, useState } from "react";
import ProtectedRoute from '../components/ProtectedRoute';
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function App() {

    const [isSignedIn, setIsSignedIn] = useState(false);
    const [{}, dispatch] = useStateValue();
  
    useEffect(() => {  
      auth.onAuthStateChanged((user) => {  
        if (user) {  
          dispatch({
            type: "SET_USER",
            user: user,
          });
          setIsSignedIn(true);
        } else {
          dispatch({
            type: "SET_USER",
            user: null,
          });
          setIsSignedIn(false);
        }
      });
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/dashboard" element={ <ProtectedRoute isSignedIn={isSignedIn}> <Dashboard /> </ProtectedRoute> } />
            </Routes>
        </BrowserRouter> 
    );
}

export default App;
