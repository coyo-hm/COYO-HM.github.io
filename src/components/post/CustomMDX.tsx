import Image from "next/image";
import { MDXComponents } from "mdx/types";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import getHeaderId from "@utils/getHeaderId";

const components: MDXComponents = {
  Image,
  aside: (props) => (
    <aside {...props} className={`rounded bg-neutral-200`}></aside>
  ),
  blockquote: (props) => (
    <blockquote
      {...props}
      className={`border-l-4 pl-3 my-2 border-neutral-600`}
    >
      {props?.children}
    </blockquote>
  ),
  ul: (props) => (
    <ul {...props} className={`pl-3 my-2 ml-4 list-disc`}>
      {props?.children}
    </ul>
  ),
  code: (props) => (
    <code className={``} {...props}>
      {props?.children}
    </code>
  ),
  a: (props) => {
    return props?.href && props.href[0] === "#" ? (
      <a href={`${props?.href}`} {...props}>
        {props?.children}
      </a>
    ) : (
      <a
        href={`${props?.href}`}
        {...props}
        target="_blank"
        rel="noreferrer"
        className={`hover:text-blue-700`}
      >
        {props?.children}
      </a>
    );
  },
  h1: (props) => {
    return (
      <h1
        className={`font-bold text-2xl pt-4 max-md:text-xl`}
        id={getHeaderId(props)}
      >
        {props.children}
      </h1>
    );
  },
  h2: (props) => {
    return (
      <h2
        className={`font-bold text-xl pt-4 max-md:text-lg`}
        id={getHeaderId(props)}
      >
        {props.children}
      </h2>
    );
  },
  h3: (props) => {
    return (
      <h3
        className={`font-bold pt-4 text-lg max-md:text`}
        id={getHeaderId(props)}
      >
        {props.children}
      </h3>
    );
  },
  h4: (props) => {
    return (
      <h4
        className={`font-bold pt-4 text-lg max-md:text`}
        id={getHeaderId(props)}
      >
        {props.children}
      </h4>
    );
  },
  h5: (props) => {
    return (
      <h5
        className={`font-bold pt-4 text-lg max-md:text`}
        id={getHeaderId(props)}
      >
        {props.children}
      </h5>
    );
  },
  h6: (props) => {
    return (
      <h6 className={`font-bold text-lg max-md:text`} id={getHeaderId(props)}>
        {props.children}
      </h6>
    );
  },
  p: (props) => {
    return (
      <p className={`font-light text py-2`} {...props}>
        {props.children}
      </p>
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
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
};

export default CustomMDX;
