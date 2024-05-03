import React, {useState,useEffect} from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

const LayoutContainer = styled.div`
display: flex;
flex-direction:column;
align-items:center;
width: 100vw;
outline: 1px solid  #04DDB2
`;
const InnerLayoutContainer = styled.div`
padding: 0px,2px;
max-width: 70%
outline: 1px solid #04DDB2
`;

const MobileLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  outline: 1px solid #04DDB2;
  background-color: red
  color: #f5f5f5;
`;

function Layout(props:{
    children : React.ReactNode
}) {

    const {children}= props
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const handleResize = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);
  return (
  <>
  {!isMobile? (  <LayoutContainer>
        <Navbar/>
        <InnerLayoutContainer>
            {children}
        </InnerLayoutContainer>
        <Footer/>
    </LayoutContainer>
    ):(
        <LayoutContainer>
          {/* <Navbar /> */}
          <InnerLayoutContainer>
            <MobileLayout>
              {/* Mobile-specific content
              <div>Mobile Layout</div>
              {children} */}
              mobile
            </MobileLayout>
          </InnerLayoutContainer>
          <Footer />
        </LayoutContainer>
      )}
  </>
  )
}

export default Layout