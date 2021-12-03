import {
  StyledNavbar,
  NavbarContent,
  NavButton,
  CloseButton,
  NavBackground,
} from './styles/Nav.styled';
import Link from 'next/link';

import { Wrapper } from './Wrapper';
import Sidebar from './Sidebar';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function OpenNav() {
    setIsOpen(!isOpen);
    console.log('it is open:  ' + isOpen);
  }

  function CloseNav() {
    setIsOpen(false);
  }

  return (
    <>
      <Sidebar open={isOpen} />
      <NavBackground open={isOpen} />
      <StyledNavbar>
        <Wrapper>
          <NavbarContent>
            {!isOpen ? (
              <NavButton onClick={() => OpenNav()}>
                <span style={{ marginRight: '10px' }}>MENU</span>
                <img src='./images/svg/menu.svg' alt='menu' />
              </NavButton>
            ) : (
              <CloseButton onClick={() => CloseNav()}>
                <span style={{ marginRight: '10px' }}>CLOSE</span>
                <img src='./images/svg/cross.svg' alt='close' />
              </CloseButton>
            )}

            <ul></ul>
          </NavbarContent>
        </Wrapper>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
