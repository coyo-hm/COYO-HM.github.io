import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { MDX } from "contentlayer/core";
import type { MDXComponents } from "mdx/types";
import getTitleId from "@utils/getTitleId";
import CodeBlock from "./MDXContent/CodeBlock";
import HeadingAnchor from "./MDXContent/HeadingAnchor";

interface Props {
  body: MDX;
}

const mdxComponents: MDXComponents = {
  pre: CodeBlock,
  Image,
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
        className={`hover:text-blue-700 underline`}
      >
        {props?.children}
      </a>
    );
  },
  h1: (props) => {
    const id = getTitleId(props);
    return (
      <h1
        className={`font-extrabold text-2xl pt-8 pb-2 max-md:text-xl`}
        id={id}
      >
        <HeadingAnchor id={id}>{props.children}</HeadingAnchor>
      </h1>
    );
  },
  h2: (props) => {
    const id = getTitleId(props);
    return (
      <h2 className={`font-extrabold text-xl pt-6 pb-2 max-md:text-lg`} id={id}>
        <HeadingAnchor id={id}> {props.children}</HeadingAnchor>
      </h2>
    );
  },
  h3: (props) => {
    const id = getTitleId(props);
    return (
      <h3 className={`font-extrabold pt-6 pb-2 text-lg max-md:text`} id={id}>
        <HeadingAnchor id={id}> {props.children}</HeadingAnchor>
      </h3>
    );
  },
  h4: (props) => {
    const id = getTitleId(props);
    return (
      <h4 className={`font-extrabold pt-6 pb-2 text-lg max-md:text`} id={id}>
        <HeadingAnchor id={id}> {props.children}</HeadingAnchor>
      </h4>
    );
  },
  h5: (props) => {
    const id = getTitleId(props);
    return (
      <h5 className={`font-extrabold pt-4 pb-2 text-lg max-md:text`} id={id}>
        <HeadingAnchor id={id}> {props.children}</HeadingAnchor>
      </h5>
    );
  },
  h6: (props) => {
    const id = getTitleId(props);
    return (
      <h6 className={`font-extrabold pt-4 pb-2 text-lg max-md:text`} id={id}>
        <HeadingAnchor id={id}> {props.children}</HeadingAnchor>
      </h6>
    );
  },
};

const CustomMDX = ({ body }: Props) => {
  const MDXContent = useMDXComponent(body.code);
  return (
    <div className={`markdown`}>
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default CustomMDX;
