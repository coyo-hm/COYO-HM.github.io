import React from 'react'
import { graphql } from 'gatsby'
import Template from 'components/Common/Template'
import PostHead from 'components/Post/PostHead'
import { IPostFrontmatter } from '../model/Post'
import PostContent from 'components/Post/PostContent'
import CommentWidget from 'components/Post/CommentWidget'
import PostTableOfContents from 'components/Post/PostTableOfContents'
import { IMenuList } from 'components/Common/Sidebar'

export interface IPostPageItem {
  node: {
    html: string
    tableOfContents: string
    frontmatter: IPostFrontmatter
  }
}

interface IPostTemplateProps {
  pageContext: {
    menuList: IMenuList
  }
  data: {
    allMarkdownRemark: {
      edges: IPostPageItem[]
    }
  }
  location: {
    href: string
  }
}

const PostTemplate = ({
  pageContext: { menuList },
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
    <Template
      title={title}
      description={summary}
      url={href}
      image={publicURL}
      menuList={menuList}
    >
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
