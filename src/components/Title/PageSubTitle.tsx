import Title, { TitleProps } from "@components/Title/Title";

interface Props extends TitleProps {}
const PageSubTitle = ({ children, ...rest }: Props) => {
  return (
    <Title {...rest} className={`text-4xl font-bold ${rest?.className}`}>
      {children}
    </Title>
  );
};
export default PageSubTitle;
