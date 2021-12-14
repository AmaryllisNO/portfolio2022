import styled from 'styled-components';
import { Wrapper } from '../components/Wrapper';
import { Logo } from '../components/Logo';
import Menu from '../components/Menu';
import { Heading1 } from '../components/Heading';
import { useState, useEffect } from 'react';

const LogoContainer = styled.div`
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 50%;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

const LandingParagraph = styled.div`
  max-width: 400px;
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
        <LogoContainer>
          <Logo src='images/svg/amaryllis-text-logo-2022.svg' />
        </LogoContainer>

        <LandingContainer>
          <Heading1>{isEnglish ? "Hi, I'm Amaryllis." : 'Hei'}</Heading1>
          <LandingParagraph>
            I’m a web developer and multimedia designer. Pick an area of
            interest down below to view what I’ve worked on.
          </LandingParagraph>{' '}
          <Menu />
        </LandingContainer>
      </Wrapper>
    </>
  );
}
