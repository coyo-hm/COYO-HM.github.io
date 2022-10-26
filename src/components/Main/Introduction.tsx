import React from 'react'
import styled from '@emotion/styled'
import ProfileImage from 'components/Main/ProfileImage'
import { IGatsbyImageData } from 'gatsby-plugin-image'

interface IIntroductionProps {
  profileImage: IGatsbyImageData
}

const Background = styled.div`
  flex: 0 1 120px;
  margin: 30px auto 20px;
  width: 100%;
  background-image: #fef6ff;
  color: black;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  max-width: 768px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`
const TitleWrapper = styled.div``

const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`

const Title = styled.div`
  font-size: 32px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`

const Introduction = ({ profileImage }: IIntroductionProps) => {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />
        <TitleWrapper>
          <SubTitle>Nice to Meet You,</SubTitle>
          <Title>I'm Junior Frontend Developer COYO.</Title>
        </TitleWrapper>
      </Wrapper>
    </Background>
  )
}

export default Introduction
