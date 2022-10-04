import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface IPostFrontmatter {
  title: string
  summary: string
  date: string
  categories: string[]
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
    publicURL: string
  }
}

export interface IPost {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: IPostFrontmatter
  }
}
