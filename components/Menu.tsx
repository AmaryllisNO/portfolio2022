import Link from 'next/link';
import styled from 'styled-components';

const MenuList = styled.ul`
  list-style: none;
`;

const MenuLink = styled.a`
  display: flex;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 10px;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: black;
    border: none;

    img {
      transition: 0.5s;
      filter: brightness(20%);
    }
  }

  img {
    margin-right: 10px;
  }
`;

const Menu = () => {
  return (
    <div>
      <MenuList>
        <li>
          <Link href='/dev'>
            <MenuLink>
              <img src='./images/svg/dev.svg' alt='' />
              <span>Web Dev.</span>
            </MenuLink>
          </Link>
        </li>
        <li>
          <Link href='/design'>
            <MenuLink>
              <img src='./images/svg/design.svg' alt='' />
              <span>Design</span>
            </MenuLink>
          </Link>
        </li>
        <li>
          <Link href='/art'>
            <MenuLink>
              <img src='./images/svg/art.svg' alt='' />
              <span>Art</span>
            </MenuLink>
          </Link>
        </li>
        <li>
          <Link href='/music'>
            <MenuLink>
              <img src='./images/svg/music.svg' alt='' />
              <span>Music</span>
            </MenuLink>
          </Link>
        </li>
      </MenuList>
    </div>
  );
};

export default Menu;
