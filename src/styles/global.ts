import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
 :root {
    --highlight: #ea6c1a;
    --background: #edd4c8;
    --white: #eeeeee;
    --dark: #616065;
    --container: 100rem;
    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    font-family: 'Verdana', serif;
    font-weight: 300;
    background-color: var(--background);
  }

  p,a{
    font-size: 2rem;
    line-height: var(----medium);
  }

  a{
    color: var(----highlight);
  }
`

export default GlobalStyles
