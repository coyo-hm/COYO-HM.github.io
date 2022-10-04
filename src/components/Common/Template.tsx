import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'
import GlobalStyle from 'components/Common/GlobalStyle'
import Footer from 'components/Common/Footer'

interface ITemplateProps {
  title: string
  description: string
  url: string
  image: string
  children: ReactNode
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`

/*
Title : 일반적인 메타 태그의 형식은 아니지만, 해당 페이지의 제목을 나타내기 때문에 SEO에서 가장 중요한 태그입니다.
Description : 구글 검색 또는 여러 SNS에 링크를 올린 경우, 사용자가 해당 페이지의 설명을 확인할 수 있도록 하는 태그입니다.
Viewport : 스마트폰과 태블릿 보급이 대중화된 이 시점에서의 여러 검색 엔진은 모바일 친화성을 아주 중요한 지표로 보고 있는데, Viewport Meta 태그가 이를 위해 사용하는 태그입니다.
Content Type : 해당 Meta 태그에 의해서 브라우저가 데이터를 어떻게 읽어들일지에 영향을 끼칠 수 있습니다.
Social Meta Tag : 페이스북, 트위터, 인스타그램 등의 여러 소셜 미디어 서비스를 위한 Meta 태그입니다.
일반적으로 Open Graph Data를 나타내는 Meta 태그를 사용하지만, 트위터에서는 별도의 Meta 태그를 사용하고 있습니다.

추가할 수 있는 데이터는 다음과 같습니다.

<!-- Open Graph data -->
<!-- 대부분의 SNS에서 사용할 수 있는 데이터 -->
<meta property="og:title" content="WebSite Title" />
<meta property="og:type" content="article" />
<meta property="og:url" content="<http://www.my-website.com/>" />
<meta property="og:image" content="<http://my-website.com/image.jpg>" />
<meta property="og:description" content="WebSite Description" />
<meta property="og:site_name" content="Site Name, i.e. Moz" />

<!-- Meta Data for Facebook -->
<!-- 페이스북과 연결해 통계를 확인하기 위해 사용하는 태그 -->
<meta property="fb:app_id" content="Application ID"/>
<meta property="fb:admins" content="Facebook numeric ID" />

<!-- Meta Data for Twitter -->
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@publisher_handle" />
<meta name="twitter:title" content="Page Title" />
<meta name="twitter:description" content="Page description less than 200 characters" />
<meta name="twitter:creator" content="@author_handle" />
<meta name="twitter:image" content="<http://www.example.com/image.jpg>" />
*/

const Template: FunctionComponent<ITemplateProps> = function ({
  title,
  description,
  url,
  image,
  children,
}) {
  return (
    <Container>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@사용자이름" />
        <meta name="twitter:creator" content="@사용자이름" />
        <meta
          name="google-site-verification"
          content="0ZXx4oZoly8ckpIlDvUrFbRLpK_zuI2m9yVSRKVHr3M"
        />
        <meta
          name="naver-site-verification"
          content="c7fcc27767857b2d349ff70dd2e51382563183fe"
        />
        <html lang="ko" />
      </Helmet>

      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  )
}

export default Template
