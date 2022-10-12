import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  /* background-color: #845ec2; */
  background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 60px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
`

const SidebarButton = styled.button`
  width: 60px;
  height: 60px;
  font-size: 32px;
  background-color: transparent;
  color: #4e2e8c;
  place-items: center;
  border: none;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    color: #845ec2;
  }
`

const Left = styled.div`
  display: flex;
  justify-content: flex-start;
`
const Right = styled.div`
  padding-right: 20px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    display: none;
  }
`

const Home = styled(Link)`
  color: #4e2e8c;
  font-size: 28px;
  line-height: 60px;
  font-weight: 700;

  &:hover {
    color: #845ec2;
  }
`

const Menu = styled(Home)`
  font-size: 24px;
  font-weight: 500;
`

interface IHeaderProps {
  openSidebar: () => void
}

const Header = ({ openSidebar }: IHeaderProps) => {
  return (
    <HeaderWrapper>
      <Left>
        <SidebarButton onClick={openSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </SidebarButton>
        <Home to="/">COYO-LOG:D</Home>
      </Left>
      <Right>
        <Menu to="/about">About</Menu>
      </Right>
    </HeaderWrapper>
  )
}

export default Header
