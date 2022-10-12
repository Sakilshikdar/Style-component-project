import React from 'react'
import logo from '../../images/abc.jpg'

export default function Navbar() {
    return (
        <div>
            <div>
            <img src={logo} alt='code-abc'/>
            </div>
        <ul>
            <li>Home</li>
            <li>About-us</li>
            <li>Teams</li>
        </ul>
        </div>
    )
}
