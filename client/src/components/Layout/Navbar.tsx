
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SiGooglepodcasts } from "react-icons/si";

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
  gap: 1em; /* Reduced gap for mobile */

  /* Media query for mobile screens */
  @media (max-width: 768px) {
    display: ${(props) => (props.isMobileMenuOpen ? 'flex' : 'none')}; /* Show/hide menu based on state */
    flex-direction: column; /* Stack links vertically */
    align-items: center; /* Align links to the center */
    margin-top: 10px; /* Add margin to separate links */
  }
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

const MobileMenuButton = styled.button`
  display: none; /* Initially hide button on desktop */
  font-size: 18px;
  background: none;
  border: none;
  color: #333333;
  cursor: pointer;

  /* Media query for mobile screens */
  @media (max-width: 768px) {
    display: block; /* Show button on mobile */
  }
`;

function Navbar() {
  const [activeLink, setActiveLink] = useState('Home');
  const linkTitles = ['Home', 'My Podcasts', 'Favorite Podcast', 'Discover Podcasts', 'My Account'];
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Nav>
      <Logo><SiGooglepodcasts />witter</Logo>
      {isMobile && (
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </MobileMenuButton>
      )}
      <NavLinks isMobileMenuOpen={isMobileMenuOpen}>
        {linkTitles.map((title: string, index: number) => (
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
