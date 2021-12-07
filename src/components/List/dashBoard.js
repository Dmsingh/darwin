import React from 'react'
import '../../App.css'
import Cookie from '../../Assets/Cookie.png'
import Error from '../../Assets/Error.png'

function DashBoard() {
    return (
        <div className="App">
        <h1>"detail": "Method \"GET\" not allowed."</h1>
        <h2> "Error status Code: 405 Method Not Allowed"</h2>
        <h3>Backend does not return CSRF Token</h3>

        <img src={Cookie} alt="Cookie"/>
        <img src={Error} alt="Error"/>

            
        </div>
    )
}

export default DashBoard
