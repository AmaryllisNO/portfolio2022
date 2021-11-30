import styled from 'styled-components';

export const Heading1 = styled.h1`
  font-size: 24px;
  font-family: 'Atlas Grotesk';
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Heading2 = styled.h2`
  font-family: 'Atlas Grotesk';
  color: blue;
`;
