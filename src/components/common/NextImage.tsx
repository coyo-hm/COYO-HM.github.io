import Image, { ImageProps } from "next/image";
import imgLoader from "@utils/imgLoader";

const NextImage = ({ ...rest }: ImageProps) => (
  <Image loader={(props) => imgLoader(props)} {...rest} />
);
export default NextImage;
