import { useRouter } from 'next/router'

const BlogTagPage = ({ props }) => {
  const { query } = useRouter()

  console.log('TagPage')
  console.log(props)
  console.log(query)
  return <>TAG PAGE</>
}

export default BlogTagPage
