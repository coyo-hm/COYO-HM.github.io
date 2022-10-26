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
  height: calc(100vh - 60px);
  width: 275px;
  flex: 0 0 275px;
  padding: 20px 30px;
  background-color: #b0a8b929;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #e9defa;

    &:hover {
      background-color: #845ec2;
    }
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
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
  font-size: 16px;

  &:hover {
    font-size: 20px;
  }

  &:last-child {
    border: none;
  }
`
const SecondMenuItem = styled(MenuItem)`
  font-size: 14px;

  &:hover {
    font-size: 18px;
  }

  &:last-child {
    border-bottom: none;
  }
`

const ThirdMenuItem = styled(MenuItem)`
  padding-left: 10px;
  font-size: 12px;
  &:hover {
    font-size: 16px;
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
