import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3em;
`;

const NavLink = styled.a<{ $active: boolean }>`
  font-size: 18px;
  color: ${(props) => (props.$active ? '#333333' : '#767676')};
  font-weight: 500;
  cursor: pointer;
`;

const Logo = styled.h2`
  font-size: 24px;
  color: #333333;
`;

function Navbar() {
  const linkTitles = ['Home', 'Manage My Podcasts', 'My Account', 'Favorites', 'Help'];
  const [activeLink, setActiveLink] = useState('Home');

  return (
    <Nav>
      <Logo>Your Logo</Logo>
      <NavLinks>
        {linkTitles.map((title, index) => (
          <NavLink
            $active={title === activeLink}
            key={index}
            onClick={() => setActiveLink(title)}
          >
            {title}
          </NavLink>
        ))}
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
