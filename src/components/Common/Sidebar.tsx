import styled from '@emotion/styled'
import { Link } from 'gatsby'

export interface IMenuList {
  [key: string]: {
    cnt: number
    children: { [key: string]: number }
  }
}

const SidebarWrapper = styled.div`
  width: 300px;
  height: calc(100vh - 60px);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 60px;
  background-color: #ffffff;
  padding: 20px 30px;
`

const MenuContainer = styled.div``

const MenuItem = styled(Link)`
  display: block;
  padding: 5px;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  transition: all 0.5s ease;
`

const FirstMenuItem = styled(MenuItem)`
  border-top: 1px solid #845ec2;
  font-size: 24px;

  &:hover {
    font-size: 28px;
  }

  &:first-child {
    border-top: none;
  }
`
const SecondMenuItem = styled(MenuItem)`
  border-bottom: 1px solid #9b89b3;
  font-size: 20px;

  &:hover {
    font-size: 24px;
  }

  &:last-child {
    border-bottom: none;
  }
`

const ThirdMenuItem = styled(MenuItem)`
  font-size: 14px;
  margin-left: 10px;
  &:hover {
    font-size: 20px;
  }
`

const Tag = styled(MenuItem)``

const MENU_LIST = [
  {
    label: 'Programming',
    path: '/',
    submenu: [
      { label: 'React', path: '/' },
      { label: 'CSS', path: '/' },
    ],
  },
  { label: 'Algorithm', path: '/' },
  { label: 'Project', path: '/' },
]

interface ISidebarProps {
  menuList: IMenuList
}

const Sidebar = ({ menuList }: ISidebarProps) => {
  return (
    <SidebarWrapper>
      <MenuContainer>
        <FirstMenuItem to={'/'} key={'all'}>
          ALL
        </FirstMenuItem>
        {Object.entries(menuList).map(([name, menu]) => (
          <SecondMenuItem to={`/?category=${name}`} key={name}>
            {name} ({menu.cnt})
            {Object.entries(menu.children).map(([sub, cnt]) => (
              <ThirdMenuItem to={`/?category=${name}/${sub}`}>
                {sub} ({cnt})
              </ThirdMenuItem>
            ))}
          </SecondMenuItem>
        ))}
        <FirstMenuItem to={'/'} key={'about'}>
          About
        </FirstMenuItem>
      </MenuContainer>
    </SidebarWrapper>
  )
}

export default Sidebar
