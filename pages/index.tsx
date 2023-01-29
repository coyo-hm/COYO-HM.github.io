import { GetStaticProps } from 'next'

import { PageSeo } from '@components/common/SEO'
import { DEFAULT_NUMBER_OF_RECENT_POST } from '@constant/index'
import { PostType } from '@type/index'
import { getAllPosts } from '@util/api'
import metadata from 'config'

const Home = ({ posts }: { posts: PostType[] }) => {
  console.log(posts)
  return (
    <>
      <PageSeo
        title="Home"
        description={metadata.description}
        url={metadata.siteUrl}
      />
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const recentPosts = (await getAllPosts()).slice(
    0,
    DEFAULT_NUMBER_OF_RECENT_POST,
  )

  return {
    props: { posts: recentPosts.map(post => ({ ...post, path: '' })) },
  }
}
