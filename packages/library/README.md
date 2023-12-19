# Work In Progress

# Remotion Cube Presentation

The Cube Presentation template provides a presentation that can be used inside `<TransitionSeries.Transition>` component from the `@remotion/transitions` package, to create a 3D cube transition.

Control the cube rotation and the perspective on the cube via direction and perspective properties of the cube API.

Customize the presentation to your liking by directly manipulating the provided source code.

## How to access the code

After your purchase, you received a private link, from which you can now install the package using npm, or you can simply copy the source code from `/packages/example/src`.

## How to use it

You can use the cube-presentation like any other presentation from the `@remotion/transitions` package.
See this short example to get idea:

```tsx twoslash "
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { cube } from "@remotion/cube-presentation";

const BasicTransition = () => {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={40}>
        <Letter color="#0b84f3">A</Letter>
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={cube({ direction: "from-right", perspective: 1000 })}
        timing={linearTiming({ durationInFrames: 30 })}
      />
      <TransitionSeries.Sequence durationInFrames={60}>
        <Letter color="pink">B</Letter>
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
```

You can find the documentation for the cube-presentation template [here](https://www.remotion.dev/docs/transitions/presentations/cubepresentation)

See the documentiation of the [@remotion/transitions/transitionseries](https://www.remotion.dev/docs/transitions/) package for more information on how to use the `<TransitionSeries.Transition>` component.
