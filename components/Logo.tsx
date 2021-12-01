import styled from 'styled-components';

export const Logo = styled.img`
  display: block;
  margin: 0 auto;
  margin-bottom: 2rem;
  margin-top: 1rem;
  // max-width: 50%;
  max-width: 130px;

  @media only screen and (min-width: 768px) {
    margin-top: 1rem;
    max-width: 200px;
    min-width: 150px;
  }
`;
