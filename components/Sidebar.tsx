import styled from 'styled-components';
import Link from 'next/link';

import { Logo } from './Logo';

const StyledSidebar = styled.aside`
  max-width: ${({ theme }) => theme.measurements.sidebar};
  min-width: ${({ theme }) => theme.measurements.sidebar};
  height: 100%;
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.onBackground};
  text-transform: uppercase;
  font-size: 0.8rem;

  font-family: 'atlas grotesk', sans-serif;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  padding: 0 2rem;
  font-weight: normal;

  ul {
    list-style: none;
  }
`;

const MainPageListItem = styled.li``;

const MainPageLink = styled.div`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const PortfolioList = styled.ul`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const ListItem = styled.li`
  margin: 20px 10px 10px 10px;

  a {
    display: flex;
    align-items: center;
    vertical-align: middle;

    img {
      margin-right: 10px;
    }
  }
`;

const Sidebar = () => {
  return (
    <div>
      <StyledSidebar>
        <Link href='/'>
          <a>
            <Logo src='/images/svg/amaryllis-text-logo-2022.svg'></Logo>
          </a>
        </Link>
        <StyledNav>
          <ul>
            <MainPageListItem>
              <Link href='/'>
                <MainPageLink>PORTFOLIO</MainPageLink>
              </Link>
              <PortfolioList>
                <ListItem>
                  <Link href='/dev'>
                    <a>
                      <img src='/images/svg/dev.svg' alt='' />
                      <span>Web Dev.</span>
                    </a>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href='/design'>
                    <a>
                      <img src='/images/svg/design.svg' alt='' />
                      <span>Design</span>
                    </a>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href='/art'>
                    <a>
                      <img src='/images/svg/art.svg' alt='' />
                      <span>Art</span>
                    </a>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href='/music'>
                    <a>
                      <img src='/images/svg/music.svg' alt='' />
                      <span>Music</span>
                    </a>
                  </Link>
                </ListItem>
              </PortfolioList>
            </MainPageListItem>
            <MainPageListItem>
              <Link href='/about'>
                <MainPageLink>ABOUT ME</MainPageLink>
              </Link>
            </MainPageListItem>
            <MainPageListItem>
              <Link href='/contact'>
                <MainPageLink>CONTACT</MainPageLink>
              </Link>
            </MainPageListItem>
          </ul>
        </StyledNav>
      </StyledSidebar>
    </div>
  );
};

export default Sidebar;
