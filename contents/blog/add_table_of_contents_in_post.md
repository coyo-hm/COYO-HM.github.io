---
date: '2022-10-23'
title: '[Blog] Markdown Post에 목차 추가하기'
categories:
  [
    'Project',
    'Project/Blog',
    'Programming',
    'Programming/React',
    'Programming/TypeScript',
    'Programming/emotion',
    'Programming/Gatsby',
  ]
summary: 'Gatsby Blog, Markdown Post에 목차 추가하고 힝크 걸기 + 페이지 맨 위/아래로 가기 버튼 추가하기'
thumbnail: './add_table_of_contents_in_post.png'
---

# 목차 생성하기

## tableOfContents

이미 목차는 `gatsby-transformer-remark`에 의해 HTML로 생성되어 있다. 다음과 같은 query 를 입력해보면,

```graphql
{
  allMarkdownRemark {
    nodes {
      tableOfContents
    }
  }
}
```

```plaintext
{
  "data": {
    "allMarkdownRemark": {
      "nodes": [
        {
          "tableOfContents": "<ul>\n<li><a href=\"#greedy-algorithm%EC%9D%B4%EB%9E%80\">Greedy Algorithm이란?</a></li>\n</ul>"
        },
        {
          "tableOfContents": "<ul>\n<li><a href=\"#implementation%EC%9D%B4%EB%9E%80\">Implementation이란?</a></li>\n</ul>"
        },
        {
          "tableOfContents": "<ul>\n<li><a href=\"#%EB%AC%B8%EC%A0%9C-%EC%84%A4%EB%AA%85\">문제 설명</a></li>\n<li><a href=\"#%EB%82%B4-%ED%92%80%EC%9D%B4\">내 풀이</a></li>\n</ul>"
        },
        {
          "tableOfContents": "<ul>\n<li><a href=\"#%EB%AC%B8%EC%A0%9C-%EC%84%A4%EB%AA%85\">문제 설명</a></li>\n<li><a href=\"#%EB%82%B4-%ED%92%80%EC%9D%B4\">내 풀이</a></li>\n</ul>"
        },
        ...
        ]
    }
  },
  "extensions": {}
}

```

`<a>` tag로 이미 링크까지 제공하고 있음을 확인할 수 있다.

Post Data를 부르는 부분에 다음과 같이 `tableOfContents`를 추가해준다.

```typescript
export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          tableOfContents
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
          }
        }
      }
    }
  }
`
```

목차 부분을 나타내는 컴포넌트(`PostTableOfContents.tsx`)를 생성해주고 `tableOfContents`를 넘겨준다.

`PostTableOfContents.tsx`

```typescript
import styled from '@emotion/styled'

interface IPostTableOfContentsProps {
  tableOfContents: string
}

const TableofContents = styled.div``

const PostTableOfContents = ({
  tableOfContents,
}: IPostTableOfContentsProps) => {
  return (
    <TableofContents dangerouslySetInnerHTML={{ __html: tableOfContents }} />
  )
}

export default PostTableOfContents
```

`post_template.tsx`

```typescript
const PostTemplate = ({
  data: {
    allMarkdownRemark: { edges },
  },
  location: { href },
}: IPostTemplateProps) => {
  const {
    node: {
      html,
      tableOfContents,
      frontmatter: {
        title,
        summary,
        date,
        categories,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
          publicURL,
        },
      },
    },
  } = edges[0]

  return (
    <Template title={title} description={summary} url={href} image={publicURL}>
      <PostHead
        title={title}
        date={date}
        categories={categories}
        thumbnail={gatsbyImageData}
      />
      <PostContent html={html} />
      <PostTableOfContents tableOfContents={tableOfContents} />
      <CommentWidget />
    </Template>
  )
}

export default PostTemplate
```

## 링크 동작시키기

`gatsby-transformer-remark`에서 제공하는 `<a>` tag가 동작하게 하기 위해서는 `gatsby-remark-autolink-headers` 플러그인이 필요하다.

자신의 프로젝트에 맞게 `yarn`과 `npm` 중 하나를 골라 설치해준다.

```shell
yarn add gatsby-remark-autolink-headers

npm i gatsby-remark-autolink-headers
```

`gatsby-config.js` 파일에 다음과 같이 추가한다.

```javascript
...
{
  resolve: `gatsby-transformer-remark`,
    options
:
  {
    plugins: [
      ...
        `gatsby-remark-autolink-headers`,
    ],
  }
}
,
...
```

위와 같이 추가해주는 이유는 `gatsby-remark-autolink-headers`은 `gatsby-transformer-remark` 플러그인의 플러그인이기 때문이다.

# 목차 CSS 적용하기

`post_template.tsx`에 다음과 같이 목차에 style을 추가해주었다.

```typescript
const TableofContents = styled.div`
  border-radius: 5px;
  background-color: #b0a8b970;
  padding: 15px;
  width: 100%;
`
```

header 1 에 속해있는 header 2와 같이 상속관계에 존재하는 header의 관계를 표현하고자 부모가 있는 header(상위 Header가 있는 header)의 경우, `padding-left`를 `5px`
씩 추가하였다.

```typescript
const TableofContents = styled.div`
  border-radius: 5px;
  background-color: #b0a8b970;
  padding: 15px;
  width: 100%;

  * {
    list-style: none;
    padding-bottom: 5px;

    &:last-child {
      padding-bottom: 0;
    }
  }

  * > ul > li {
    padding-left: 5px;
  }
`
```

# 페이지 맨 위/아래로 가기 버튼 추가하기

생성한 목차 위아래에 페이지의 맨 위/아래로 가는 버튼을 추가했다.

버튼 ui는 `FontAwesomeIcon`을 이용하였다.

```typescript
import styled from '@emotion/styled'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

...

const PostTableOfContents = ({
  tableOfContents,
}: IPostTableOfContentsProps) => {
    const onClickUpButton = useCallback(() => {
    window?.scrollTo(0, 0)
  }, [])

  const onClickDownButton = useCallback(() => {
    window?.scrollTo(0, document.body.scrollHeight)
  }, [])
  return (
    <TableofContentsWrapper>
      <UpButton>
        <FontAwesomeIcon icon={faAngleUp} />
      </UpButton>
      <TableofContents dangerouslySetInnerHTML={{ __html: tableOfContents }} />
      <DownButton>
        <FontAwesomeIcon icon={faAngleDown} />
      </DownButton>
    </TableofContentsWrapper>
  )
}
```

버튼을 누르면 스크롤이 위로 아래로 움직이는 것을 확인할 수 있다.
