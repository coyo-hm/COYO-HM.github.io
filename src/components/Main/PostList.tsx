import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'
import { IPost } from 'model/Post'

interface IPostListProps {
  selectedCategory: string
  posts: IPost[]
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`

const PostList = ({ posts, selectedCategory }: IPostListProps) => {
  const postListData = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            fields: { slug },
            frontmatter: { categories },
          },
        }: IPost) =>
          selectedCategory !== 'All'
            ? categories.includes(selectedCategory)
            : true,
      ),
    [selectedCategory],
  )
  return (
    <PostListWrapper>
      {postListData.map(
        ({
          node: {
            id,
            frontmatter,
            fields: { slug },
          },
        }: IPost) => (
          <PostItem {...frontmatter} key={id} link={slug} />
        ),
      )}
    </PostListWrapper>
  )
}

export default PostList
