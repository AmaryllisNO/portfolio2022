import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  StyledSidebar,
  SidebarContent,
  Nav,
  Navline,
  Navlink,
} from './styles/Nav.styled';
import { Wrapper } from './Wrapper';

const Sidebar = ({ open }) => {
  const router = useRouter();

  // const [pathname, setPathname] = useState(router.pathname);
  console.log(router.pathname);
  console.log(router);

  return (
    <>
      <StyledSidebar open={open}>
        <Wrapper>
          <SidebarContent>
            <Nav>
              <ul>
                <li>
                  <Link href='/' passHref>
                    <Navlink pathname={router.pathname}>PORTFOLIO</Navlink>
                  </Link>

                  <Navline />
                </li>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <li>ABOUT</li>
                <li>CONTACT</li>
              </ul>
            </Nav>
          </SidebarContent>
        </Wrapper>
      </StyledSidebar>
    </>
  );
};

export default Sidebar;
