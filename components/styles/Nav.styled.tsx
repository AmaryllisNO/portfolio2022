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
  transition: ${({ open }) => (open ? `0.5s` : '0.5s')};
  animation: ${({ open }) => (open ? `slideInLeft 0.5s` : 'slideInLeft 0.5s')};
  // display: none;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  min-height: 100%;
  // width: 200px;
  max-width: ${({ open }) => (open ? `200px` : '')};
  min-width: ${({ open }) => (open ? `200px` : '')};

  background-color: ${({ theme }) => theme.colors.onBackground};
  box-shadow: ${({ open }) =>
    !open
      ? `10px 40px 40px 10px rgba(0, 0, 0, 0);`
      : '10px 40px 40px 10px rgba(0, 0, 0, 1);'};

  @keyframes slideInLeft {
    0% {
      opacity: 0;
      max-width: 0;
    }

    100% {
      opacity: 100%;
      width: ${({ theme }) => theme.measurements.sidebar};
    }
  }
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
