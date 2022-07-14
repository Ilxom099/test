import React from 'react'
import Login from './Page/LogIn/login'
import Cabinet from "./Page/Cabinet/cabinet";
import {Switch , Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import './App.css'

function App() {
    const [name,setName] = useState('')
    const [surname,setSurname] = useState('')
    return(
        <div>
            <Switch>
                <Route path={'/test'}>
                    <Cabinet name={name} surname={surname} />
                </Route>
                <Route path={'/'}>
                    <Login name={name} names={setName} surname={surname} surnames={setSurname} />
                </Route>
            </Switch>
            <ToastContainer />
        </div>
    )
}

export default App;
