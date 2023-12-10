import Title, { TitleProps } from "@components/Title/Title";

interface Props extends TitleProps {}

const PageTitle = ({ children, ...rest }: Props) => {
  return (
    <Title
      {...rest}
      className={`text-center text-6xl font-extrabold ${rest?.className}`}
    >
      {children}
    </Title>
  );
};
export default PageTitle;
