import { Composition } from "remotion";
import Example from "./Example";
import MultipleCubes from "./MultipleCubes";

const Root = () => {
  return (
    <>
      <Composition
        id="Example"
        component={Example}
        durationInFrames={30 * 10}
        fps={30}
        height={1920}
        width={1920}
      />
      <Composition
        id="MultipleCubes"
        component={MultipleCubes}
        durationInFrames={30 * 10}
        fps={30}
        height={1920}
        width={1920}
      />
    </>
  );
};

export default Root;
