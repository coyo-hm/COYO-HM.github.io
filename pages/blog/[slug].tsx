import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import Container from '@components/common/Container'

const BlogPost = ({ mdx }: { mdx: MDXRemoteSerializeResult }) => {
  return (
    <Container>
      <MDXRemote {...mdx} />
    </Container>
  )
}

export default BlogPost

type Params = {
  params: {
    slug: string
  }
}
