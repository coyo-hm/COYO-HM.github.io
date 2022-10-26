import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const defaultStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');

  @font-face {
    font-family: 'NanumSquareRound';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'S-CoreDream-3Light';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 400;
    src: url('../../source/font/jetBrainsMono/JetBrainsMono-Regular.woff2')
      format('woff2');
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-style: italic;
    font-weight: 400;
    src: url('../../source/font/jetBrainsMono/JetBrainsMono-Italic.woff2')
      format('woff2');
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 700;
    src: url('../../source/font/jetBrainsMono/JetBrainsMono-Bold.woff2')
      format('woff2');
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-style: italic;
    font-weight: 700;
    src: url('../../source/font/jetBrainsMono/JetBrainsMono-BoldItalic.woff2')
      format('woff2');
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 800;
    src: url('../../source/font/jetBrainsMono/JetBrainsMono-ExtraBold.woff2')
      format('woff2');
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-style: italic;
    font-weight: 800;
    src: url('../../source/font/jetBrainsMono/JetBrainsMono-ExtraBoldItalic.woff2')
      format('woff2');
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 200;
    src: url('../../source/font/jetBrainsMono/JetBrainsMono-ExtraLight.woff2')
      format('woff2');
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-style: italic;
    font-weight: 200;
    src: url('../../source/font/jetBrainsMono/JetBrainsMono-ExtraLightItalic.woff2')
      format('woff2');
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 300;
    src: url('../../source/font/jetBrainsMono/JetBrainsMono-Light.woff2')
      format('woff2');
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-style: italic;
    font-weight: 300;
    src: url('../../source/font/jetBrainsMono/JetBrainsMono-LightItalic.woff2')
      format('woff2');
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 500;
    src: url('../../source/font/jetBrainsMono/JetBrainsMono-Medium.woff2')
      format('woff2');
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-style: italic;
    font-weight: 500;
    src: url('../../source/font/jetBrainsMono/JetBrainsMono-MediumItalic.woff2')
      format('woff2');
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 600;
    src: url('../../source/font/jetBrainsMono/JetBrainsMono-SemiBold.woff2')
      format('woff2');
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-style: italic;
    font-weight: 600;
    src: url('../../source/font/jetBrainsMono/JetBrainsMono-SemiBoldItalic.woff2')
      format('woff2');
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 100;
    src: url('../../source/font/jetBrainsMono/JetBrainsMono-Thin.woff2')
      format('woff2');
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-style: italic;
    font-weight: 100;
    src: url('../../source/font/jetBrainsMono/JetBrainsMono-ThinItalic.woff2')
      format('woff2');
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'NanumSquareRound';
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button,
  button:hover {
    cursor: pointer;
  }
`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
