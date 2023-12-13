import {
  JSXElementConstructor,
  ReactElement,
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
      className={`bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 mx-auto min-h-screen w-full`}
    >
      <div
        className={`bg-transparent flex flex-col justify-center px-8 lg:w-[950px] m-auto min-h-screen`}
      >
        <Header />
        <main className={`w-full flex flex-col grow shrink`}>
          {props.children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Container;
