import styled from '@emotion/styled'

export interface IPostHeadInfoProps {
  title: string
  date: string
  categories: string[]
}

const PostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 768px; */
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 60px;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 100%;
    padding: 40px 20px;
  }
`

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 30px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const PostData = styled.div`
  /* display: flex; */
  /* justify-content: space-between; */
  align-items: center;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;

  div {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    font-size: 15px;
    font-weight: 400;
  }
`

const PostHeadInfo = ({ title, date, categories }: IPostHeadInfoProps) => {
  return (
    <PostHeadInfoWrapper>
      <Title>{title}</Title>
      <PostData>
        <div>{date}</div>
        <div>
          {categories
            .filter(category => category.split('/').length > 1)
            .map(category => {
              return category.split('/')[1]
            })
            .join(' / ')}
        </div>
      </PostData>
    </PostHeadInfoWrapper>
  )
}

export default PostHeadInfo
