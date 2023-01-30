import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import Container from '@components/common/Container'
import { getAllPosts } from '@util/api'
import parseMarkdownToMdx from '@util/parseMarkdown'
import { PostType } from '@type/index'
import CustomMDX from '@components/post/CustomMDX'
import Header from '@components/common/Header'
import Footer from '@components/common/Footer'

const BlogPost = ({
  post,
  mdx,
}: {
  post: PostType
  mdx: MDXRemoteSerializeResult
}) => {
  console.log(post, mdx)
  return (
    <div>
      <Header />
      <div>
        <CustomMDX {...mdx} />
      </div>

      <Footer />
    </div>
  )
}

export default BlogPost

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPosts()
  const paths = allPosts.map(({ fields: { slug } }) => {
    return { params: { slugs: slug.replace('blog/', '').split('/') } }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

interface SlugInterface {
  [key: string]: string[]
  slugs: string[]
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slugs } = params as SlugInterface
  const allPosts = await getAllPosts()
  const post = allPosts.find(
    p => p?.fields?.slug === ['blog', ...slugs].join('/'),
  )

  if (post) {
    const source = await parseMarkdownToMdx(post.body)

    return {
      props: {
        post,
        mdx: source,
      },
    }
  }
  return {
    notFound: true,
  }
}
