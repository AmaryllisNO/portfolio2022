import styled from 'styled-components';

// sidebar styling
export const StyledSidebar = styled.aside`
  display: flex;
  justify-content: center;
  align-content: center;
  vertical-align: middle;
  align-items: middle;
  transition: 0.5s;
  overflow: hidden;
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

  // sidebar wrapper
  div {
    align-self: center;
    width: 100%;
    overflow: hidden;

    @media only screen and (min-width: ${({ theme }) =>
        theme.breakpoints.mobile}) {
      overflow: visible;
      margin: 0;
    }
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    width: 250px;
    left: 0;
  } ;
`;

export const SidebarContent = styled.div`
  min-height: 100%;
  min-width: 100%;
  justify-content: flex-end;

  ul {
    li {
      margin-bottom: 2rem;
    }
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    overflow: none;
  }
`;
