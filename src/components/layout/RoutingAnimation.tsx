import { PropsWithChildren, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface Props extends PropsWithChildren {}

const RoutingAnimation = ({ children }: Props) => {
  const pathname = usePathname();

  useEffect(() => {
    document
      .getElementById("main-header")
      ?.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        // transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default RoutingAnimation;
