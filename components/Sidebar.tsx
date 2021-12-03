import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  StyledSidebar,
  SidebarContent,
  Nav,
  Navline,
  Navlink,
  PortfolioList,
  PortfolioLink,
} from './styles/Nav.styled';
import { Wrapper } from './Wrapper';

const Sidebar = ({ open }) => {
  const router = useRouter();

  let portfoliolinks = [
    {
      pathname: '/dev',
    },
    {
      pathname: '/design',
    },
    {
      pathname: '/art',
    },
    {
      pathname: '/music',
    },
  ];

  console.log(portfoliolinks[0].pathname);

  portfoliolinks.forEach((link) => {
    console.log(link.pathname);
  });

  // const [pathname, setPathname] = useState(router.pathname);

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
                <PortfolioList>
                  <li>
                    <Link href='/dev' passHref>
                      <PortfolioLink pathname={router.pathname}>
                        <img src='/images/svg/dev.svg' alt='dev' />
                      </PortfolioLink>
                    </Link>
                  </li>
                  <li>
                    <Link href='/design' passHref>
                      <PortfolioLink>
                        <img src='/images/svg/design.svg' alt='dev' />
                      </PortfolioLink>
                    </Link>
                  </li>
                  <li>
                    <Link href='/art' passHref>
                      <PortfolioLink>
                        <img src='/images/svg/art.svg' alt='dev' />
                      </PortfolioLink>
                    </Link>
                  </li>
                  <li>
                    <Link href='/music' passHref>
                      <PortfolioLink>
                        <img src='/images/svg/music.svg' alt='dev' />
                      </PortfolioLink>
                    </Link>
                  </li>
                </PortfolioList>
                <li>
                  <Link href='/about' passHref>
                    <Navlink pathname={router.pathname}>ABOUT</Navlink>
                  </Link>
                  <Navline />
                </li>
                <li>
                  <Link href='/contact' passHref>
                    <Navlink pathname={router.pathname}>CONTACT</Navlink>
                  </Link>
                  <Navline />
                </li>
              </ul>
            </Nav>
          </SidebarContent>
        </Wrapper>
      </StyledSidebar>
    </>
  );
};

export default Sidebar;
