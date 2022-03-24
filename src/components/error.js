import React from 'react'
import './error.css'
import { NavLink } from 'react-router-dom'
const Error404 = () => {
    return (
        <div>
            <div id='notfound'>
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>WE ARE SORRY PAGE NOT FOUND</h2>
                    <p>THE PAGE YOU'RE LOOKING FOR HAS BEEN REMOVED OR TEMPORARILY
                        UNAVAILABLE</p>
                    <NavLink to='/'>Back to Home page</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Error404