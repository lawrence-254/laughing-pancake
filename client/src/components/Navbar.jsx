import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #333;
    color: white;
    font-size: 1.5rem;
`;

const NavLinks = styled.div`
    display: flex;
    align-items: center;
    `;

const NavLink = styled.a`
    color: white;
    text-decoration: none;
    margin-right: 1rem;
    `;

const NavButton = styled.button`
    background-color: white;
    color: black;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    `;

    

function Navbar() {
  return (
    <Nav>
        hello
    </Nav>
  )
}

export default Navbar
