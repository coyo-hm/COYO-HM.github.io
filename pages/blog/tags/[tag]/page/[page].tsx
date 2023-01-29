import { GetStaticPaths, GetStaticProps } from 'next'
import Container from '@components/common/Container'

const BlogPost = () => {
  return <Container></Container>
}

export default BlogPost

type Params = {
  params: {
    slug: string
  }
}
