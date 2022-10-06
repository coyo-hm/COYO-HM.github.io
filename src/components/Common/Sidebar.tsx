import styled from '@emotion/styled'
import { Link } from 'gatsby'

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
  border-bottom: 1px solid #dbb0ff8f;
  margin-bottom: 10px;
  font-size: 24px;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  transition: all 0.5s ease;

  &:hover {
    font-size: 30px;
  }

  &:last-child {
    border-bottom: none;
  }
`

const SubMenuItem = styled(MenuItem)`
  font-size: 16px;
  border-bottom: none;
  margin: 10px 0 0 10px;
  &:hover {
    font-size: 24px;
  }
`

const MENU_LIST = [
  {
    label: 'All',
    path: '/',
    submenu: [
      { label: 'React', path: '/' },
      { label: 'CSS', path: '/' },
    ],
  },
  { label: 'About', path: '/about' },
]

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <MenuContainer>
        {MENU_LIST.map(menu => (
          <MenuItem to={menu.path} key={menu.label}>
            {menu.label}
            {menu?.submenu?.map(sub => (
              <SubMenuItem to={sub.path}>{sub.label}</SubMenuItem>
            ))}
          </MenuItem>
        ))}
      </MenuContainer>
    </SidebarWrapper>
  )
}

export default Sidebar
