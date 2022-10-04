import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

// 자신이 원하는 프로필 이미지 링크로 설정해주세요.
const PROFILE_IMAGE_LINK =
  'https://user-images.githubusercontent.com/56423604/193531784-324b2936-6906-4603-a908-46ec86c10030.png'

interface IProfileImageProps {
  profileImage: IGatsbyImageData
}

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
  background-color: white;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

const ProfileImage = ({ profileImage }: IProfileImageProps) => {
  return <ProfileImageWrapper image={profileImage} alt="Profile Image" />
}

export default ProfileImage
