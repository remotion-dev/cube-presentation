import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { cube } from "my-library";
import { Letter } from "./Letter";

export const BLUE = "#1B9CFC";
export const PINK = "#FC427B";

export default function Example() {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={40}>
        <Letter backgroundColor={BLUE} letter="A" color="white" />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={cube({ direction: "from-bottom" })}
        timing={linearTiming({ durationInFrames: 30 })}
      />
      <TransitionSeries.Sequence durationInFrames={60}>
        <Letter color="white" letter="B" backgroundColor={PINK} />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
}
