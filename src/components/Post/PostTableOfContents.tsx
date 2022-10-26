import styled from '@emotion/styled'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback } from 'react'
import { isBrowser } from '../../utils'

interface IPostTableOfContentsProps {
  tableOfContents: string
}

const PostTableWrapper = styled.div`
  flex: 0 0 200px;
  position: relative;
  height: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const TableofContentsWrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  transform: translateY(-50%);
`

const UpButton = styled.button`
  border: none;
  background-color: transparent;
  height: 50px;
  line-height: 50px;
  font-size: 32px;
  text-align: center;
  place-items: center;
  color: black;

  &:hover {
    color: #845ec2;
  }
`

const DownButton = styled(UpButton)``

const TableofContents = styled.div<{ maxHeight: string }>`
  border-left: 2px solid #b0a8b970;
  padding: 15px;
  width: 100%;
  max-height: ${props => props.maxHeight};
  overflow-y: auto;
  font-size: 14px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #b0a8b929;

    &:hover {
      background-color: #845ec2;
    }
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  * {
    list-style: none;
    padding-bottom: 5px;

    &:last-child {
      padding-bottom: 0;
    }
  }

  * > ul > li {
    padding-left: 5px;
  }
`

const PostTableOfContents = ({
  tableOfContents,
}: IPostTableOfContentsProps) => {
  const maxHeight = isBrowser
    ? `calc(${window?.innerHeight}px - 200px)`
    : '200px'

  const onClickUpButton = useCallback(() => {
    document.getElementById('contentWrapper')?.scrollTo(0, 0)
  }, [])

  const onClickDownButton = useCallback(() => {
    const contentWrapperRef = document.getElementById('contentWrapper')
    if (contentWrapperRef) {
      contentWrapperRef.scrollTo(0, contentWrapperRef.scrollHeight)
    }
  }, [])

  return (
    <PostTableWrapper>
      <TableofContentsWrapper>
        <UpButton onClick={onClickUpButton}>
          <FontAwesomeIcon icon={faAngleUp} />
        </UpButton>
        <TableofContents
          dangerouslySetInnerHTML={{ __html: tableOfContents }}
          maxHeight={maxHeight}
        />
        <DownButton onClick={onClickDownButton}>
          <FontAwesomeIcon icon={faAngleDown} />
        </DownButton>
      </TableofContentsWrapper>
    </PostTableWrapper>
  )
}

export default PostTableOfContents
