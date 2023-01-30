import Image from "next/image";
import { MDXComponents } from "mdx/types";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

const components: MDXComponents = {
  Image,
  h1: (props) => (
    <h1 {...props} className={`font-bold text-4xl`}>
      {props.children}
    </h1>
  ),

  code: (props) => (
    <code {...props} className="">
      {props.children}
    </code>
  ),
};

const CustomMDX = (
  props: JSX.IntrinsicAttributes &
    MDXRemoteSerializeResult<
      Record<string, unknown>,
      Record<string, string>
    > & { components?: MDXComponents | undefined; lazy?: boolean | undefined }
) => {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
};

export default CustomMDX;
