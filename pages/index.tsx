import { GetStaticProps } from 'next'

import { PageSeo } from '@components/common/SEO'
import { DEFAULT_NUMBER_OF_RECENT_POST } from '@constant/index'
import { PostType } from '@type/index'
import { getAllPosts } from '@util/api'
import metadata from 'config'
import Link from 'next/link'

const Home = ({ posts }: { posts: PostType[] }) => {
  console.log(posts)
  return (
    <>
      <PageSeo
        title="Home"
        description={metadata.description}
        url={metadata.siteUrl}
      />
      <div className="">
        <h1>Recent Post</h1>
        <ul>
          {posts.map(({ frontMatter, fields: { slug } }) => {
            const { date, title, tags, description } = frontMatter
            const postDate = new Date(date)
            console.log(slug)
            return (
              <li key={slug}>
                <article>
                  <Link href={`/${slug}`}>{title}</Link>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
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
