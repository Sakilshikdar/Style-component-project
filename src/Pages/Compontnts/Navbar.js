import React from 'react'
import logo from '../../images/abc.jpg'
import { Container } from '../../Styles/Common.styled'
import { Nevigation } from '../../Styles/Navbar.styled'

export default function Navbar() {
    return (
        <Nevigation>
            <Container>

            <div>
            <img src={logo} alt='code-abc'/>
            </div>
        <ul>
            <li>Home</li>
            <li>About-us</li>
            <li>Teams</li>
        </ul>
            </Container>
        </Nevigation>
    )
}
