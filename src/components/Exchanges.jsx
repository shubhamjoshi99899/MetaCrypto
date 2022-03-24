import React from 'react'
import { NavLink } from 'react-router-dom'
import './error.css'
const Exchanges = () => {
  return (
    <div>
      <div id='notfound'>
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>WE ARE SORRY PAGE NOT FOUND</h2>
                    <p>THE PAGE YOU'RE LOOKING FOR IS TEMPORARILY
                        UNAVAILABLE AS OUR SERVERS CAN'T FETCH THE DATA FROM THE API</p>
                    <NavLink to='/'>Back to Home page</NavLink>
                </div>
            </div>
        </div>
    
  )
}

export default Exchanges