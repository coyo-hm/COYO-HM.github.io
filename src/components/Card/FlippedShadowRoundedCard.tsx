import { ReactNode } from "react";
import ShadowRoundedCard from "@components/Card/ShadowRoundedCard";

const flipVariants = {
  initial: {},
  hover: {},
};

interface Props {
  frontComponent: ReactNode;
  backComponent: ReactNode;
  cardClassName?: string;
  frontClassName?: string;
  backClassName?: string;
}

const FlippedShadowRoundedCard = ({
  frontComponent,
  backComponent,
  cardClassName,
  frontClassName,
  backClassName,
}: Props) => {
  return (
    <ShadowRoundedCard
      className={`overflow-hidden bg-transparent ${cardClassName}`}
    >
      <div
        className={`relative w-full h-full hover:[transform:rotateY(180deg)] [transform-style:preserve-3d] [transition:transform 1s]`}
      >
        <div
          id={"seriesFront"}
          className={`absolute w-full h-full [backface-visibility:hidden] [-webkit-backface-visibility:hidden] bg-white dark:bg-neutral-900 ${frontClassName}`}
        >
          {frontComponent}
        </div>
        <div
          id={"seriesBack"}
          className={`absolute h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden] bg-white dark:bg-neutral-900 ${backClassName}`}
        >
          {backComponent}
        </div>
      </div>
    </ShadowRoundedCard>
  );
};
export default FlippedShadowRoundedCard;
