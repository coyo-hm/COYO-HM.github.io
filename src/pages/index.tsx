import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import queryString, { ParsedQuery } from 'query-string'
import Introduction from 'components/Main/Introduction'
import PostList from 'components/Main/PostList'
import Template from 'components/Common/Template'
import MenuTitle from 'components/Main/MenuTitle'
import { IPost } from '../model/Post'
import { IMenuList } from 'components/Common/Sidebar'
import { useSetRecoilState } from 'recoil'
import { menuListState } from '../states'

interface IIndexPageProps {
  location: {
    search: string
  }
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
      }
    }
    allMarkdownRemark: {
      edges: IPost[]
    }
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
      publicURL: string
    }
  }
}

const IndexPage = ({
  location: { search },
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    },
  },
}: IIndexPageProps) => {
  const setMenuList = useSetRecoilState(menuListState)
  const parsed: ParsedQuery<string> = queryString.parse(search)
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category

  const menuList = useMemo(
    () =>
      edges.reduce(
        (
          list: IMenuList,
          {
            node: {
              frontmatter: { categories },
            },
          }: IPost,
        ) => {
          categories.forEach((category: string) => {
            const [parent, child] = category.split('/')
            if (child === undefined) {
              if (list[parent]?.cnt) {
                list[parent].cnt += 1
              } else {
                list[parent] = { cnt: 1, children: {} }
              }
            } else if (list[parent] === undefined) {
              list[parent] = { cnt: 0, children: { [child]: 1 } }
            } else if (list[parent].children[child] === undefined) {
              list[parent].children[child] = 1
            } else {
              list[parent].children[child] += 1
            }
          })

          return list
        },
        {},
      ),
    [edges],
  )

  setMenuList(menuList)

  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}
      selectedCategory={selectedCategory}
    >
      {selectedCategory === 'All' ? (
        <Introduction profileImage={gatsbyImageData} />
      ) : (
        <MenuTitle selectedCategory={selectedCategory} />
      )}
      <PostList selectedCategory={selectedCategory} posts={edges} />
    </Template>
  )
}

export default IndexPage

export const getPostList = graphql`
  query getPostList {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
      publicURL
    }
  }
`
