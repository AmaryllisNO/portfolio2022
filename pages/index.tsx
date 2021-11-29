import styled from 'styled-components';
import { Wrapper } from '../components/Wrapper';
import { Logo } from '../components/Logo';
import Menu from '../components/Menu';
import { useState, useEffect } from 'react';

const Heading = styled.h1`
  font-size: 24px;
  font-family: 'Atlas Grotesk';
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const language = navigator.language;

      if (language === 'en' || language === 'en-GB') {
        setIsEnglish(true);
      }
    }

    return () => {
      isEnglish;
    };
  }, []);

  return (
    <>
      <Wrapper>
        <Logo src='images/svg/amaryllis-text-logo-2022.svg' />
        <Heading>{isEnglish ? "Hi, I'm Amaryllis." : 'Hei'}</Heading>
        <p>
          I’m a web developer and multimedia designer. Pick an area of interest
          down below to view what I’ve worked on.
        </p>
        <Menu></Menu>
      </Wrapper>
    </>
  );
}
