import React from 'react'
import {  useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Home() {

    const datafromredux = useSelector((a) => (a.Login))
    const dataSignup = useSelector((b) => (b.SignUp))
    

    console.log(datafromredux)
    console.log(dataSignup)

   
    

    return (
        <div>
        <h1>Home</h1>
            
            
        </div>
    )
}

export default Home
