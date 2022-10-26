import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import React, { useEffect, useState } from 'react'

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  /* background-color: #845ec2; */
  background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 60px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  display: flex;
  justify-content: flex-start;
`
const Right = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    display: none;
  }
`
const SidebarButton = styled.button`
  width: 60px;
  height: 60px;
  font-size: 28px;
  background-color: transparent;
  color: #4e2e8c;
  place-items: center;
  border: none;
  cursor: pointer;

  &:hover {
    color: #845ec2;
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

const InfoBtn = styled.a`
  width: 45px;
  height: 60px;
  line-height: 60px;
  font-size: 28px;
  background-color: transparent;
  color: #4e2e8c;
  place-items: center;
  text-align: center;
  border: none;
  /* cursor: pointer; */

  &:hover {
    color: #845ec2;
  }
`

interface IHeaderProps {
  openSidebar: () => void
  isOpenedSidebar: boolean
}

const Header = ({ openSidebar, isOpenedSidebar }: IHeaderProps) => {
  const [hide, setHide] = useState(false)
  const [pageY, setPageY] = useState(0)

  useEffect(() => {
    const threshold = 0
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      setHide(scrollY > lastScrollY && scrollY > 60 ? true : false)
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (isOpenedSidebar && !ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [hide])

  return (
    <HeaderWrapper className={hide ? 'hide' : ''}>
      <Left>
        <SidebarButton onClick={openSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </SidebarButton>
        <Home to="/">COYO-LOG:D</Home>
      </Left>
      <Right>
        <InfoBtn href="https://github.com/COYO-HM" target={'_blank'}>
          <FontAwesomeIcon icon={faGithub} />
        </InfoBtn>
        <InfoBtn href="mailto:bsydwp@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </InfoBtn>
      </Right>
    </HeaderWrapper>
  )
}

export default Header
