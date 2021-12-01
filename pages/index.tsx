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
  justify-content: space-between;
`;

const LandingLeft = styled.div``;

const LandingRight = styled.div``;

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
          <LandingLeft>
            <Heading1>{isEnglish ? "Hi, I'm Amaryllis." : 'Hei'}</Heading1>
            <p>
              I’m a web developer and multimedia designer. Pick an area of
              interest down below to view what I’ve worked on.
            </p>{' '}
            <Menu />
          </LandingLeft>
          <LandingRight></LandingRight>
        </LandingContainer>
      </Wrapper>
    </>
  );
}
