import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

interface IPostContentProps {
  html: string
}

const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  margin: 0 240px 0 50px;
  padding: 50px 0;
  word-break: break-all;

  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 50px;
  }

  // Markdown Style
  line-height: 2;
  font-size: 16px;
  font-weight: 400;

  * {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  // Apply Padding Attribute to All Elements
  p {
    padding: 3px 0;
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3 {
    font-weight: 800;
    margin-bottom: 20px;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 20px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 10px 0;
    padding: 5px 15px;
    border-left: 2px solid #000000;
    font-weight: 800;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
    padding: 5px 0;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 1px solid #000000;
    margin: 100px 0;
  }

  // Adjust Link Element Style
  a {
    color: #4263eb;
    text-decoration: underline;
  }

  img {
    width: 100%;
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 10px 0;
    padding: 20px;
    font-size: 14px;
    border-radius: 4px;
    font-family: 'JetBrains Mono';

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
    font-family: 'JetBrains Mono';

    * {
      font-family: 'JetBrains Mono';
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 40px 20px;
    line-height: 1.6;
    font-size: 14px;

    h1 {
      font-size: 23px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 17px;
    }

    img {
      width: 100%;
    }

    hr {
      margin: 50px 0;
    }
  }

  code[class*='language-text'] {
    tab-size: 2;
    font-family: 'JetBrains Mono';
    padding: 0.2em;
  }

  .noticeBox {
    padding: 20px;
    font-weight: 500;
    font-size: 16px;
    background-color: #f6e58d;
    border-radius: 10px;
  }
`

const PostContent = ({ html }: IPostContentProps) => {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
}

export default PostContent
