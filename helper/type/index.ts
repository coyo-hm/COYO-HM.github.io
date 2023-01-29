export interface FrontMatterType {
  title: string
  category: string
  tags: string[]
  published: boolean
  date: string
  description: string
  template: string
  path: string
  socialImageUrl?: string
  socialImageCredit?: string
}

export interface PostType {
  fields: {
    slug: string
  }
  frontMatter: FrontMatterType
  body: string
  path: string
}

export interface TagWithCount {
  tag: string
  count: number
}
