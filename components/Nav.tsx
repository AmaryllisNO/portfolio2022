import {
  StyledNavbar,
  NavbarContent,
  NavButton,
  StyledSidebar,
  SidebarContent,
  CloseButton,
} from './styles/Nav.styled';
import Link from 'next/link';

import { Wrapper } from './Wrapper';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Sidebar = () => {
    function CloseNav() {
      setIsOpen(!isOpen);
      console.log('closing nav');
    }

    return (
      <>
        <StyledSidebar>
          <Wrapper>
            <SidebarContent>
              <CloseButton onClick={() => CloseNav()}>
                <span style={{ marginRight: '10px' }}>CLOSE</span>
                <img src='./images/svg/cross.svg' alt='menu' />
              </CloseButton>
              <ul></ul>
            </SidebarContent>
          </Wrapper>
        </StyledSidebar>
      </>
    );
  };
  function OpenNav() {
    setIsOpen(!isOpen);
    console.log('opening nav');
  }

  return (
    <>
      {isOpen ? (
        <>
          <Sidebar />
          <StyledNavbar>
            <Wrapper>
              <NavbarContent>
                <ul></ul>
              </NavbarContent>
            </Wrapper>
          </StyledNavbar>
        </>
      ) : (
        <>
          <StyledNavbar>
            <Wrapper>
              <NavbarContent>
                <NavButton onClick={() => OpenNav()}>
                  <span style={{ marginRight: '10px' }}>MENU</span>
                  <img src='./images/svg/menu.svg' alt='menu' />
                </NavButton>
                <ul></ul>
              </NavbarContent>
            </Wrapper>
          </StyledNavbar>
        </>
      )}
    </>
  );
};

export default Navbar;
