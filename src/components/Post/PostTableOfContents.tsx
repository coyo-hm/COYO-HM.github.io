import styled from '@emotion/styled'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IPostTableOfContentsProps {
  tableOfContents: string
}

const TableofContentsWrapper = styled.div`
  position: fixed;
  top: 50%;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: calc(100vh -400px);
  /* height: 100%; */
  width: 200px;
  /* transform: translateY(-50%); */
  @media (max-width: 768px) {
    display: none;
  }
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

const TableofContents = styled.div`
  border-radius: 5px;
  background-color: #b0a8b970;
  padding: 15px;
  width: 100%;
  overflow-y: auto;

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
  return (
    <TableofContentsWrapper>
      <UpButton>
        <FontAwesomeIcon icon={faAngleUp} />
      </UpButton>
      <TableofContents dangerouslySetInnerHTML={{ __html: tableOfContents }} />
      <DownButton>
        <FontAwesomeIcon icon={faAngleDown} />
      </DownButton>
    </TableofContentsWrapper>
  )
}

export default PostTableOfContents
