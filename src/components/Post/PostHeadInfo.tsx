import styled from '@emotion/styled'

export interface IPostHeadInfoProps {
  title: string
  date: string
  categories: string[]
}

const PostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 0 auto;
  color: black;
`

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 30px;
  font-weight: 800;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`

const PostData = styled.div`
  margin-top: 60px;
`

const PostDate = styled.div`
  font-size: 18px;
  font-weight: 400;
  text-align: right;
  opacity: 50%;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

const PostCategories = styled(PostDate)``

const PostHeadInfo = ({ title, date, categories }: IPostHeadInfoProps) => {
  return (
    <PostHeadInfoWrapper>
      <Title>{title}</Title>
      <PostData>
        <PostDate>{date}</PostDate>
        <PostCategories>
          {categories
            .filter(category => category.split('/').length > 1)
            .map(category => {
              return category.split('/')[1]
            })
            .join(' / ')}
        </PostCategories>
      </PostData>
    </PostHeadInfoWrapper>
  )
}

export default PostHeadInfo
