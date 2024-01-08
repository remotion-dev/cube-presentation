import { useMemo } from "react";
import type {
  TransitionPresentationComponentProps,
  TransitionPresentation,
} from "@remotion/transitions";
import { AbsoluteFill, interpolate } from "remotion";

type CubePresentationProps = {
  direction: "from-left" | "from-right" | "from-top" | "from-bottom";
  perspective?: number;
};

const Cube: React.FC<
  TransitionPresentationComponentProps<CubePresentationProps>
> = ({
  children,
  presentationDirection,
  presentationProgress,
  passedProps: { perspective = 1000, ...passedProps },
}) => {
  // eslint-disable-next-line complexity
  const style: React.CSSProperties = useMemo(() => {
    const startRotationEntering =
      passedProps.direction === "from-right" ||
      passedProps.direction === "from-top"
        ? 90
        : -90;
    const endRotationEntering =
      passedProps.direction === "from-right" ||
      passedProps.direction === "from-top"
        ? -90
        : 90;

    const startPositionEntering =
      passedProps.direction === "from-right" ||
      passedProps.direction === "from-bottom"
        ? 100
        : -100;
    const startPositionExiting =
      passedProps.direction === "from-right" ||
      passedProps.direction === "from-bottom"
        ? -100
        : 100;

    const transformOriginEntering =
      passedProps.direction === "from-left"
        ? "right"
        : passedProps.direction === "from-bottom"
        ? "top"
        : passedProps.direction === "from-top"
        ? "bottom"
        : "left";
    const transformOriginExiting =
      passedProps.direction === "from-left"
        ? "left"
        : passedProps.direction === "from-bottom"
        ? "bottom "
        : passedProps.direction === "from-top"
        ? "top"
        : "right";

    const rotation =
      presentationDirection === "entering"
        ? interpolate(presentationProgress, [0, 1], [startRotationEntering, 0])
        : interpolate(presentationProgress, [0, 1], [0, endRotationEntering]);

    const transformOrigin =
      presentationDirection === "entering"
        ? transformOriginEntering
        : transformOriginExiting;

    const translate = `${
      presentationDirection === "entering"
        ? interpolate(presentationProgress, [0, 1], [startPositionEntering, 0])
        : interpolate(presentationProgress, [0, 1], [0, startPositionExiting])
    }%`;

    const translateProperty =
      passedProps.direction === "from-top" ||
      passedProps.direction === "from-bottom"
        ? "translateY"
        : "translateX";
    const rotateProperty =
      passedProps.direction === "from-top" ||
      passedProps.direction === "from-bottom"
        ? "rotateX"
        : "rotateY";

    return {
      width: "100%",
      height: "100%",
      transformOrigin,
      transform: `${translateProperty}(${translate}) ${rotateProperty}(${rotation}deg)`,
      backfaceVisibility: "hidden",
      WebkitBackfaceVisibility: "hidden",
    };
  }, [passedProps.direction, presentationDirection, presentationProgress]);

  return (
    <AbsoluteFill
      style={{
        perspective,
        transformStyle: "preserve-3d",
      }}
    >
      <AbsoluteFill style={style}>{children}</AbsoluteFill>
    </AbsoluteFill>
  );
};

export const cube = (
  props: CubePresentationProps
): TransitionPresentation<CubePresentationProps> => {
  return { component: Cube, props };
};
