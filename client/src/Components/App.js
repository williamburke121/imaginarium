import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LogIn from "./Login.js"
import Home from "./Home.js"


function App(){
    const [user, setUser] = useState('');
    function onLogout(){
        setUser(null);
    }

    useEffect(()=> {
        fetch('/me').then((res)=> {
            if(res.ok){
                res.json().then((user)=>setUser(user))
            }
        })
    },[]);
    if(!user) return <LogIn setUser={setUser} />;
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home user={user} onLogout = {onLogout} />} />
                {/* <Home user={user}/> */}
               {/* </Route>  */}
                </Routes>

        </Router>

    )
}

export default App;