import React from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import PostHeadInfo, { IPostHeadInfoProps } from './PostHeadInfo'

interface IGatsbyImgProps {
  image: IGatsbyImageData
  alt: string
  className?: string
}

interface IPostHeadProps extends IPostHeadInfoProps {
  thumbnail: IGatsbyImageData
}

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  /* height: 400px; */
  height: 40%;
  @media (max-width: 768px) {
    height: 300px;
  }
`

const BackgroundImage = styled((props: IGatsbyImgProps) => (
  <GatsbyImage {...props} style={{ position: 'absolute' }} />
))`
  z-index: -1;
  width: 100%;
  /* height: 400px; */
  height: 100%;
  object-fit: cover;
  filter: brightness(0.25);

  @media (max-width: 768px) {
    height: 300px;
  }
`

const PostHead = ({ thumbnail, title, date, categories }: IPostHeadProps) => {
  return (
    <PostHeadWrapper>
      <BackgroundImage image={thumbnail} alt="thumbnail" />
      <PostHeadInfo title={title} date={date} categories={categories} />
    </PostHeadWrapper>
  )
}

export default PostHead
