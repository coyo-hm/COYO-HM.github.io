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
    <div className={`bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-100`}>
      <div
        className={`min-h-screen md:max-lg:w-full lg:w-[1000px] flex flex-col items-center px-8 m-auto dark:bg-neutral-800`}
      >
        <Header />
        <main className={`w-full grow flex flex-col my-6`}>
          {props.children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Container;
