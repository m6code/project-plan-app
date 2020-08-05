import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/sign-up">SignUp</NavLink></li>
            <li><NavLink to="/sign-in">Login</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks
