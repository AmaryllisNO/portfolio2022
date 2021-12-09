import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import Navbar from '../components/Nav';

const GlobalStyles = createGlobalStyle`
 @font-face {
   font-family: 'Atlas Grotesk';
   src: local('Atlas Grotesk') url(../public/fonts/AtlasGrotesk.otf) format('truetype');
 }

  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    margin: 0;
      padding: 0;
      transition: 0.2s;
  }

  body { 
      background-color: #1A1E22;
      margin: 0;
      padding: 0;
      color: white;
      font-family: 'Lato';
      min-height: 100%;
    }

  h1 {
    font-style: italic;
    margin: 10px 0 10px 0;
  }

  p {
    font-size: 1rem;
    color: #D0D0D0;
    margin: 10px 0 10px 0;
  }

  a {
    color: white;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    display: inline-block;
    border: none;
    
    margin: 0;
    text-decoration: none;
    background: none;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, 
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
}



button:focus {
    outline: none;
    outline-offset: -4px;
}

button:focus-visible {
    outline: none;
    outline-offset: -4px;
}

button:active {
    transform: none;
}

`;

const theme = {
  colors: {
    primary: '#FF3061',
    background: '#1A1E22',
    onBackground: '#2A3036',
    offWhite: '#C6C6C6',
  },

  measurements: {
    sidebar: '250px',
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
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
