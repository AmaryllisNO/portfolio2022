import styled from 'styled-components';

// navbar styling
export const StyledNavbar = styled.div`
  width: 100%;
  height: 2.5rem;
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.onBackground};

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavbarContent = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100%;
`;

export const NavButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  margin-bottom: 8px;
  z-index: 100;

  font-family: 'lato', sans-serif;
  font-size: 14px;

  color: ${({ theme }) => theme.colors.offWhite};
`;

export const CloseButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  margin-bottom: 5px;
  font-family: 'lato', sans-serif;
  font-size: 14px;
  z-index: 100;

  color: ${({ theme }) => theme.colors.offWhite};
`;

export const NavBackground = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(13, 17, 24, 0.603);
  transition: 0.5s;
  opacity: ${({ open }) => (open ? '100%' : '0%')};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  animation: ${({ open }) => (open ? 'fade 0.5s' : 'fade 0.5s reverse')};

  @keyframes fade {
    from {
      visibility: 'hidden';
      opacity: 0%;
    }
    to {
      opacity: 100%;
      visibility: visible;
    }
  }
`;

export const Nav = styled.nav`
  ul {
    font-family: 'Atlas Grotesk', sans-serif;
    font-weight: 400;
    list-style-type: none;
  }

  li {
    display: flex;
    align-items: center;
  }

  span {
    display: inline-block;
  }
`;

export const Navlink = styled.span`
  display: inline-block;
  padding-right: 13px;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;

  color: ${({ href, pathname, theme }) =>
    href === pathname ? theme.colors.primary : 'white'};

  &:hover {
    color: ${({ theme }) => theme.colors.offWhite};
  }
`;

export const Navline = styled.span`
  content: '';
  display: inline-block;
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const PortfolioList = styled.ul`
  display: flex;
  flex: row;
  align-items: baseline;
  justify-content: center;
`;

export const PortfolioLink = styled.span`
  cursor: pointer;
  margin-right: 1.5rem;
  color: ${({ href, pathname, theme }) =>
    href === pathname ? theme.colors.primary : 'white'};

    filter: brightness(110%);


  }

  img {
    min-width: 20px;
filter: ${({ href, pathname }) =>
  href === pathname
    ? 'invert(30%) sepia(86%) saturate(6000%) hue-rotate(328deg) brightness(101%) contrast(101%);'
    : ''};
   
`;
