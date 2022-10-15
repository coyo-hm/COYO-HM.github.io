import styled from '@emotion/styled'

interface IMenuTitleProps {
  selectedCategory: string
}

const MenuTitleWrapper = styled.h1`
  color: black;
  font-size: 24px;
  line-height: 60px;
  font-weight: 900;
  padding: 30px 0 0;
  width: 768px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 20px 25px 0;
  }
`

const MenuTitle = ({ selectedCategory }: IMenuTitleProps) => {
  return <MenuTitleWrapper>{selectedCategory}</MenuTitleWrapper>
}

export default MenuTitle
