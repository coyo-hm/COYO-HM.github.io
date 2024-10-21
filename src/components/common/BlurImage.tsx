import Image, { ImageProps } from "next/image";
import imgLoader from "@utils/imgLoader";

const BlurImage = ({
  src,
  alt,
  className,
  blurDataURL,
  ...rest
}: ImageProps) => (
  <Image
    loader={(props) => imgLoader(props)}
    src={src}
    alt={alt}
    className={`object-contain ${className}`}
    placeholder={"blur"}
    blurDataURL={blurDataURL}
    {...rest}
  />
);

export default BlurImage;
