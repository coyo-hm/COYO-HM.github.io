// import { Inter } from "@next/font/google";
import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
import Footer from "./Footer";
import Header from "./Header";

// const inter = Inter({ preload: false });

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
      className={`bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 mx-auto h-screen overflow-auto`}
    >
      <div
        className={`bg-transparent flex flex-col justify-center px-8 m-auto min-h-screen w-full lg:w-[950px]`}
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
