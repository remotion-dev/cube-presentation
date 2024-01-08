import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { cube } from "@remotion-dev/cube-presentation";
import { Letter } from "./Letter";
import { z } from "zod";

export const BLUE = "#1B9CFC";
export const PINK = "#FC427B";

export const schema = z.object({
  direction: z.enum(["from-left", "from-right", "from-top", "from-bottom"]),
});

export default function Example(props: z.infer<typeof schema>) {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={40}>
        <Letter backgroundColor={BLUE} letter="A" color="white" />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={cube({ direction: props.direction })}
        timing={linearTiming({ durationInFrames: 30 })}
      />
      <TransitionSeries.Sequence durationInFrames={60}>
        <Letter color="white" letter="B" backgroundColor={PINK} />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
}
