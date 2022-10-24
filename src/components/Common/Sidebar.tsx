import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export interface IMenuList {
  [key: string]: {
    cnt: number
    children: { [key: string]: number }
  }
}

const SidebarWrapper = styled.div`
  width: 350px;
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
  border-bottom: 1px solid #845ec2;
  font-size: 24px;

  &:hover {
    font-size: 28px;
  }

  &:last-child {
    border: none;
  }
`
const SecondMenuItem = styled(MenuItem)`
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
  padding-left: 10px;
  &:hover {
    font-size: 20px;
  }

  &:last-child {
    border-bottom: 1px solid #9b89b3;
  }
`

const Tag = styled(MenuItem)``

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
        {menuList &&
          Object.entries(menuList).map(([name, menu]) => (
            <div key={name}>
              <SecondMenuItem to={`/?category=${name}`} key={name}>
                {name} ({menu.cnt})
              </SecondMenuItem>
              {Object.entries(menu.children).map(([sub, cnt]) => (
                <ThirdMenuItem to={`/?category=${name}/${sub}`} key={sub}>
                  {sub} ({cnt})
                </ThirdMenuItem>
              ))}
            </div>
          ))}
      </MenuContainer>
    </SidebarWrapper>
  )
}

export default Sidebar
