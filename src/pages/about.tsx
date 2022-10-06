import styled from '@emotion/styled'
import Template from 'components/Common/Template'
import ProfileImage from 'components/Main/ProfileImage'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`

const InfoContent = styled.div`
  margin: 0 10px;
  p {
    font-size: 14px;
    margin: 10px 0;
  }

  a {
    width: 30px;
    height: 30px;
    font-size: 24px;
    background-color: transparent;
    place-items: center;
    border: none;
    margin-right: 10px;

    &:hover {
      color: #845ec2;
    }
  }
`

interface IAboutPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
      }
    }
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
      publicURL: string
    }
  }
}

const AboutPage = ({
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    },
  },
}: IAboutPageProps) => {
  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}
    >
      <InfoWrapper>
        <ProfileImage profileImage={gatsbyImageData} size={'135px'} />
        <InfoContent>
          <h1>COYO</h1>
          <p>
            프론트 엔드 엔지니어로 재직 중인 COYO입니다. 리액트와 타입스크립트를
            주로 사용하고 있습니다.
          </p>
          <a href="https://github.com/COYO-HM" target={'_blank'}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:bsydwp@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </InfoContent>
      </InfoWrapper>
    </Template>
  )
}

export default AboutPage

export const getAbout = graphql`
  query getAbout {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
      publicURL
    }
  }
`
