import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import Footer from "./Footer";
import Header from "./Header";

const Container = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) => {
  return (
    <div
      className={`lg:w-full xl:w-[1024px] flex flex-col items-center px-8 m-auto`}
    >
      <Header />
      <main className={`w-full flex flex-col justify-center my-6`}>
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default Container;