import { PropsWithChildren } from "react";
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";

interface Props extends PropsWithChildren {}

const RootLayout = ({ children }: Props) => {
  return (
    <div
      className={`bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 w-full h-screen overflow-auto`}
    >
      <div
        className={`bg-transparent flex flex-col justify-center px-8 m-auto min-h-screen w-full lg:w-[950px]`}
      >
        <Header />
        <main className={`w-full flex flex-col grow shrink`}>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
