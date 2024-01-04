import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { cube } from "my-library";
import { Letter } from "./Letter";
import { AbsoluteFill } from "remotion";

export const BLUE = "#1B9CFC";
export const PINK = "#FC427B";

const NEG_OFFSET = "-24%";
const POS_OFFSET = "24%";

export default function MultipleCubes() {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries
        style={{
          transform: "scale(0.4)",
          position: "absolute",
          top: NEG_OFFSET,
          left: NEG_OFFSET,
        }}
      >
        <TransitionSeries.Sequence
          durationInFrames={40}
          style={{ backgroundColor: "white" }}
        >
          <Letter backgroundColor={BLUE} letter="A" color="white" />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={cube({ direction: "from-top", perspective: 2000 })}
          timing={linearTiming({ durationInFrames: 30 })}
        />
        <TransitionSeries.Sequence durationInFrames={80}>
          <Letter color="white" letter="B" backgroundColor={PINK} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={cube({ direction: "from-top", perspective: 2000 })}
          timing={linearTiming({ durationInFrames: 30 })}
        />
        <TransitionSeries.Sequence durationInFrames={40}>
          <Letter backgroundColor={BLUE} letter="A" color="white" />
        </TransitionSeries.Sequence>
      </TransitionSeries>
      <TransitionSeries
        style={{
          transform: "scale(0.4)",
          position: "absolute",
          top: POS_OFFSET,
          left: NEG_OFFSET,
        }}
      >
        <TransitionSeries.Sequence durationInFrames={40}>
          <Letter backgroundColor={BLUE} letter="A" color="white" />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={cube({ direction: "from-left", perspective: 2000 })}
          timing={linearTiming({ durationInFrames: 30 })}
        />
        <TransitionSeries.Sequence durationInFrames={80}>
          <Letter color="white" letter="B" backgroundColor={PINK} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={cube({ direction: "from-left", perspective: 2000 })}
          timing={linearTiming({ durationInFrames: 30 })}
        />
        <TransitionSeries.Sequence durationInFrames={40}>
          <Letter backgroundColor={BLUE} letter="A" color="white" />
        </TransitionSeries.Sequence>
      </TransitionSeries>

      <TransitionSeries
        style={{
          transform: "scale(0.4)",
          position: "absolute",
          top: NEG_OFFSET,
          left: POS_OFFSET,
        }}
      >
        <TransitionSeries.Sequence durationInFrames={40}>
          <Letter backgroundColor={BLUE} letter="A" color="white" />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={cube({ direction: "from-right", perspective: 2000 })}
          timing={linearTiming({ durationInFrames: 30 })}
        />
        <TransitionSeries.Sequence durationInFrames={80}>
          <Letter color="white" letter="B" backgroundColor={PINK} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={cube({ direction: "from-right", perspective: 2000 })}
          timing={linearTiming({ durationInFrames: 30 })}
        />
        <TransitionSeries.Sequence durationInFrames={40}>
          <Letter backgroundColor={BLUE} letter="A" color="white" />
        </TransitionSeries.Sequence>
      </TransitionSeries>
      <TransitionSeries
        style={{
          transform: "scale(0.4)",
          position: "absolute",
          top: POS_OFFSET,
          left: POS_OFFSET,
        }}
      >
        <TransitionSeries.Sequence durationInFrames={40}>
          <Letter backgroundColor={BLUE} letter="A" color="white" />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={cube({ direction: "from-bottom", perspective: 2000 })}
          timing={linearTiming({ durationInFrames: 30 })}
        />
        <TransitionSeries.Sequence durationInFrames={80}>
          <Letter color="white" letter="B" backgroundColor={PINK} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={cube({ direction: "from-bottom", perspective: 2000 })}
          timing={linearTiming({ durationInFrames: 30 })}
        />
        <TransitionSeries.Sequence durationInFrames={40}>
          <Letter backgroundColor={BLUE} letter="A" color="white" />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
}
