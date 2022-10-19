import React from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

interface IProfileImageProps {
  profileImage: IGatsbyImageData
  size?: string
}

const ProfileImageWrapper = styled(GatsbyImage)<{ size?: string }>`
  height: ${props => props.size || `120px`};
  border-radius: 50%;
  background-color: white;
  aspect-ratio: 1;
  @media (max-width: 768px) {
    height: ${props => props.size || `80px`};
  }
`

const ProfileImage = ({ profileImage, size }: IProfileImageProps) => {
  return (
    <ProfileImageWrapper image={profileImage} size={size} alt="Profile Image" />
  )
}

export default ProfileImage
