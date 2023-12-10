import Title, { TitleProps } from "@components/Title/Title";

interface Props extends TitleProps {}
const PostTitle = ({ children, ...rest }: Props) => {
  return (
    <Title
      {...rest}
      className={`text-center text-5xl font-bold ${rest?.className}`}
    >
      {children}
    </Title>
  );
};
export default PostTitle;
