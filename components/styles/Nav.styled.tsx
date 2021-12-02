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
  justify-self: flex-end;
  font-family: 'lato', sans-serif;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.offWhite};
  display: flex;
  align-items: center;
`;

// sidebar styling
export const StyledSidebar = styled.aside`
  // display: none;
  overflow: hidden;
  position: absolute;
  right: 0;
  z-index: 1000;
  min-height: 100%;
  min-width: ${({ theme }) => theme.measurements.sidebar};
  max-width: 0;
  background-color: ${({ theme }) => theme.colors.onBackground};
  box-shadow: 10px 40px 40px 10px #000000;

  transition: 0.5s;
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

  color: ${({ theme }) => theme.colors.offWhite};
`;
