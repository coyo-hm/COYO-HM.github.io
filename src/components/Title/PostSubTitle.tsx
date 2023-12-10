import Title, { TitleProps } from "@components/Title/Title";

interface Props extends TitleProps {}
const PostSubTitle = ({ children, ...rest }: Props) => {
  return (
    <Title {...rest} className={`text-3xl font-bold ${rest?.className}`}>
      {children}
    </Title>
  );
};
export default PostSubTitle;
