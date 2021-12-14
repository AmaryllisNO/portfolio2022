import styled from 'styled-components';

export const MenuList = styled.ul`
  list-style: none;
  margin-top: 2rem;
`;

export const MenuLink = styled.a`
  display: flex;
  position: relative;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 15px 10px 15px 10px;
  margin-bottom: 5px;

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
  }
`;

export const ImgContainer = styled.div`
  min-width: 30px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
`;
