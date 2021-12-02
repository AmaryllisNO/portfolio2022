import { MenuList, MenuLink, ImgContainer } from './styles/Menu.styled';

import Link from 'next/link';

const Menu = () => {
  return (
    <div>
      <MenuList>
        <li>
          <Link href='/dev'>
            <MenuLink
              onMouseEnter={() => {
                console.log('hovered');
              }}
            >
              <ImgContainer>
                {' '}
                <img src='./images/svg/dev.svg' alt='' />
              </ImgContainer>
              <span>Web Dev.</span>
            </MenuLink>
          </Link>
        </li>
        <li>
          <Link href='/design'>
            <MenuLink>
              <ImgContainer>
                {' '}
                <img src='./images/svg/design.svg' alt='' />
              </ImgContainer>
              <span>Design</span>
            </MenuLink>
          </Link>
        </li>
        <li>
          <Link href='/art'>
            <MenuLink>
              <ImgContainer>
                {' '}
                <img src='./images/svg/art.svg' alt='' />
              </ImgContainer>
              <span>Art</span>
            </MenuLink>
          </Link>
        </li>
        <li>
          <Link href='/music'>
            <MenuLink>
              <ImgContainer>
                <img src='./images/svg/music.svg' alt='' />
              </ImgContainer>

              <span>Music</span>
            </MenuLink>
          </Link>
        </li>
      </MenuList>
    </div>
  );
};

export default Menu;
