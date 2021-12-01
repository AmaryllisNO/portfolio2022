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

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Sidebar = () => {
  return (
    <div>
      <StyledSidebar>
        <Link href='/'>
          <a>
            <Logo src='images/svg/amaryllis-text-logo-2022.svg'></Logo>
          </a>
        </Link>
      </StyledSidebar>
    </div>
  );
};

export default Sidebar;
