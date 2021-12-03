import styled from 'styled-components';

// navbar styling
export const StyledNavbar = styled.nav`
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

// sidebar styling
export const StyledSidebar = styled.aside`
  transition: 0.5s;
  overflow: visible;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  min-height: 100%;
  width: ${({ open }) => (open ? '250px' : '0')};

  background-color: ${({ theme }) => theme.colors.onBackground};
  /* box-shadow: ${({ open }) =>
    !open
      ? `10px 40px 40px 10px rgba(0, 0, 0, 0);`
      : '10px 40px 40px 10px rgba(0, 0, 0, 1);'}; */
`;

export const SidebarContent = styled.div`
  min-height: 100%;
  min-width: 100%;
  justify-content: flex-end;
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
