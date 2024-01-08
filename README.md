# Remotion Cube Presentation

This cube presentation can be used with the `<TransitionSeries.Transition>` component from the `@remotion/transitions` package, to create a 3D cube transition.

Control the cube rotation and the perspective on the cube via `direction` and `perspective` properties of the `cube()` function.

Customize the presentation to your liking by directly manipulating the provided source code.

## How to access the code

You use the link provided on [remotion.pro/cube-transition](https://www.remotion.pro/cube-transition) to install it via npm, or you can simply copy the source code from `packages/library/src/cube.tsx`.

## How to use it

You can use the cube presentation like any other presentation from the `@remotion/transitions` package.
See this short example to get an idea:

```tsx
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

See the documentation of the [@remotion/transitions](https://www.remotion.dev/docs/transitions/) package for more information on how to use the `<TransitionSeries.Transition>` component.

## API

The `cube()` function does take an object with the following properties:

### `direction`

One of `from-left`, `from-right`, `from-top`, `from-bottom`.

```tsx
import { CubeDirection } from "@remotion-dev/cube-transition";

const flipDirection: CubeDirection = "from-left";
```

### `perspective?`

The CSS `perspective` of the flip animation. Defaults to `1000`.

## License

Notice that for some entities a company license is needed. Read [the terms here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).

You may only use this presentation if you licensed it on [remotion.pro](https://www.remotion.pro).

It is forbidden to redistribute the source code of this project.
