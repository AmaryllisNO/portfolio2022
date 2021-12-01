import Link from 'next/link';
import styled from 'styled-components';

const MenuList = styled.ul`
  list-style: none;
  margin-top: 2rem;
`;

const MenuLink = styled.a`
  display: flex;
  position: relative;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 15px 10px 15px 10px;

  transition: 0.5s;
  max-width: 80%;

  text-transform: uppercase;
  font-family: 'Atlas Grotesk';
  font-weight: 300;

  img {
    transition: 0.5s;
    filter: brightness(120%);
  }

  clip-path: polygon(100% 0, 100% 50%, 90% 100%, 0% 100%, 0% 75%, 0 0);

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: black;
    max-width: 100%;
    //border-radius: 3px;
    border-top-right-radius: 3px;

    img {
      transition: 0.5s;
      filter: brightness(20%);
    }

    clip-path: polygon(100% 0, 100% 50%, 90% 100%, 0% 100%, 0% 75%, 0 0);

    /*   &::before {
      content: '';
      width: 24px;
      height: 24px;
      position: absolute;
      bottom: -10px;
      left: -10px;
      background-color: yellow;
      border-top: 2px solid var(--black-color);
      transform: rotate(45deg);
    } */
  }
`;

const ImgContainer = styled.div`
  min-width: 30px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
`;

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
