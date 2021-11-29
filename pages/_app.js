import { createGlobalStyle, ThemeProvider } from 'styled-components';

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
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
