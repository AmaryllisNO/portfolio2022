import styled from 'styled-components';
import { Wrapper } from '../components/Wrapper';
import { Logo } from '../components/Logo';
import Menu from '../components/Menu';
import { Heading1 } from '../components/Heading';
import { useState, useEffect } from 'react';

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
        <Heading1>{isEnglish ? "Hi, I'm Amaryllis." : 'Hei'}</Heading1>
        <p>
          I’m a web developer and multimedia designer. Pick an area of interest
          down below to view what I’ve worked on.
        </p>
        <Menu></Menu>
      </Wrapper>
    </>
  );
}
