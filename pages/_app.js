import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';

const GlobalStyles = createGlobalStyle`
 @font-face {
   font-family: 'Atlas Grotesk';
   src: local('Atlas Grotesk') url(../public/fonts/AtlasGrotesk.otf) format('truetype');
 }

  * {
    box-sizing: border-box;
    margin: 0;
      padding: 0;
  }

  body { 
      background-color: #1A1E22;
      margin: 0;
      padding: 0;
      color: white;
      font-family: 'Lato';
    }

  h1 {
    font-style: italic;
   
  }

  p {
    font-size: 15px;
    color: #D0D0D0;
  }

  a {
    color: white;
    text-decoration: none;
  }

`;

const theme = {
  colors: {
    primary: '#FF3061',
    background: '#1A1E22',
    onBackground: '#2A3036',
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400;1,700;1,900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
