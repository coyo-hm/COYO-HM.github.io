import Image from "next/image";
import { MDXComponents } from "mdx/types";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import getHeaderId from "@utils/getHeaderId";

const components: MDXComponents = {
  Image,
  table: (props) => (
    <table {...props} className={`border-collapse border border-neutral-200`}>
      {props?.children}
    </table>
  ),
  th: (props) => (
    <th {...props} className={`py-2 px-4 border border-neutral-200 text-left`}>
      {props?.children}
    </th>
  ),
  td: (props) => (
    <td {...props} className={`py-2 px-4 border border-neutral-200`}>
      {props?.children}
    </td>
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
  ol: (props) => (
    <ol {...props} className={`pl-3 my-2 ml-4 list-decimal`}>
      {props?.children}
    </ol>
  ),
  code: (props) => (
    <code className={``} {...props}>
      {props?.children}
    </code>
  ),
  a: (props) => {
    return props?.href && props.href[0] === "#" ? (
      <a href={`${props?.href}`} {...props} className={`underline`}>
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
    return (
      <h1
        className={`font-extrabold text-2xl pt-8 pb-2 max-md:text-xl`}
        id={getHeaderId(props)}
      >
        {props.children}
      </h1>
    );
  },
  h2: (props) => {
    return (
      <h2
        className={`font-extrabold text-xl pt-8 pb-2 max-md:text-lg`}
        id={getHeaderId(props)}
      >
        {props.children}
      </h2>
    );
  },
  h3: (props) => {
    return (
      <h3
        className={`font-extrabold pt-6 pb-2 text-lg max-md:text`}
        id={getHeaderId(props)}
      >
        {props.children}
      </h3>
    );
  },
  h4: (props) => {
    return (
      <h4
        className={`font-extrabold pt-6 pb-2 text-lg max-md:text`}
        id={getHeaderId(props)}
      >
        {props.children}
      </h4>
    );
  },
  h5: (props) => {
    return (
      <h5
        className={`font-extrabold pt-4 pb-2 text-lg max-md:text`}
        id={getHeaderId(props)}
      >
        {props.children}
      </h5>
    );
  },
  h6: (props) => {
    return (
      <h6
        className={`font-extrabold pt-4 pb-2 text-lg max-md:text`}
        id={getHeaderId(props)}
      >
        {props.children}
      </h6>
    );
  },
  p: (props) => {
    return (
      <p className={`font-normal text py-2`} {...props}>
        {props.children}
      </p>
    );
  },
  li: (props) => {
    return (
      <li className={`font-normal text py-1 leading-6`} {...props}>
        {props.children}
      </li>
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
    <div className={`markdown`}>
      <MDXRemote
        {...props}
        components={{ ...components, ...(props.components || {}) }}
      />
    </div>
  );
};

export default CustomMDX;
