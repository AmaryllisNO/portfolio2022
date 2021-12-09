import {
  StyledNavbar,
  NavbarContent,
  NavButton,
  CloseButton,
  NavBackground,
} from './styles/Nav.styled';
import { useWindowSize } from './hooks/useWindowSize';

import { Wrapper } from './Wrapper';
import Sidebar from './Sidebar';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const size = useWindowSize();

  useEffect(() => {
    if (size[0] >= 768) {
      setIsOpen(false);
    }
  }, [size]);

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
      <NavBackground open={isOpen} onClick={() => CloseNav()} />
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
