import { useState, useEffect } from 'react';
import {
  StyledSidebar,
  SidebarContent,
  CloseButton,
} from './styles/Nav.styled';
import { Wrapper } from './Wrapper';

const Sidebar = ({ open }) => {
  return (
    <>
      <StyledSidebar open={open}>
        <Wrapper>
          <SidebarContent></SidebarContent>
        </Wrapper>
      </StyledSidebar>
    </>
  );
};

export default Sidebar;
