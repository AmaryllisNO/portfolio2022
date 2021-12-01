import styled from 'styled-components';

export const Wrapper = styled.div`
  //margin: 0 1rem 0 1rem;
  padding: 0 1rem 0 1rem;
  height: 100%;

  @media only screen and (min-width: 768px) {
    padding: 3rem 2rem 0 2rem;
    margin: 0 auto 0 auto;
    margin-left: ${({ theme }) => theme.measurements.sidebar};
    max-width: 1200px;
  }

  @media only screen and (min-width: 1200px) {
    margin: 0 auto 0 auto;
    margin-left: ${({ theme }) => theme.measurements.sidebar};
    max-width: 1200px;
  }
`;
