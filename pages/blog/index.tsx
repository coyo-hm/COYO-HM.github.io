import Container from '@components/common/Container'
import { useRouter } from 'next/router'

const Blog = () => {
  console.log('blog')
  const { query } = useRouter()
  console.log(query)
  return (
    <Container>
      <span className={`font-bold`}>BLOG</span>
    </Container>
  )
}

export default Blog
