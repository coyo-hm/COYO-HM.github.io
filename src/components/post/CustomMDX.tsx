import Image from "next/image";
import { MDXComponents } from "mdx/types";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import getHeaderId from "@utils/getHeaderId";

const components: MDXComponents = {
  Image,
  a: (props) => (
    <a href={`${props?.href}`} {...props} target="_blank" rel="noreferrer">
      {props?.children}
    </a>
  ),
  h1: (props) => {
    return (
      <h1 className={`font-bold text-2xl`} id={getHeaderId(props)}>
        {props.children}
      </h1>
    );
  },
  h2: (props) => {
    return (
      <h2 className={`font-bold text-xl`} id={getHeaderId(props)}>
        {props.children}
      </h2>
    );
  },
  h3: (props) => {
    return (
      <h3 className={`font-bold text-lg`} id={getHeaderId(props)}>
        {props.children}
      </h3>
    );
  },
  h4: (props) => {
    return (
      <h4 className={`font-bold text-lg`} id={getHeaderId(props)}>
        {props.children}
      </h4>
    );
  },
  h5: (props) => {
    return (
      <h5 className={`font-bold text-lg`} id={getHeaderId(props)}>
        {props.children}
      </h5>
    );
  },
  h6: (props) => {
    return (
      <h6 className={`font-bold text-lg`} id={getHeaderId(props)}>
        {props.children}
      </h6>
    );
  },
};

const CustomMDX = (
  props: JSX.IntrinsicAttributes &
    MDXRemoteSerializeResult<
      Record<string, unknown>,
      Record<string, string>
    > & { components?: MDXComponents | undefined; lazy?: boolean | undefined }
) => {
  return (
    <div className={`grow pr-10`}>
      <MDXRemote
        {...props}
        components={{ ...components, ...(props.components || {}) }}
      />
    </div>
  );
};

export default CustomMDX;
