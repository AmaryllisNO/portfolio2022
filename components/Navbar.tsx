import styled from 'styled-components';
import Link from 'next/link';

import { Wrapper } from './Wrapper';
import { useState } from 'react';

const NavMenu = styled.menu``;

const StyledNavbar = styled.nav`
  width: 100%;
  height: 2.5rem;
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.onBackground};

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100%;
`;

const NavButton = styled.button`
  justify-self: flex-end;
  font-family: 'lato', sans-serif;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.offWhite};
  display: flex;
  align-items: center;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function OpenNav() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  return (
    <>
      <StyledNavbar>
        <Wrapper>
          <NavbarContent>
            <NavMenu>
              <ul>
                <li>
                  <Link href='/dev'>
                    <span>Web Dev.</span>
                  </Link>
                </li>
              </ul>
            </NavMenu>
            <NavButton onClick={() => OpenNav()}>
              <span style={{ marginRight: '10px' }}>MENU</span>
              <img src='./images/svg/menu.svg' alt='menu' />
            </NavButton>
            <ul></ul>
          </NavbarContent>
        </Wrapper>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
