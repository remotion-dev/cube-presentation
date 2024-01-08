import { Composition } from "remotion";
import Example, { schema } from "./Example";

const Root = () => {
  return (
    <>
      <Composition
        id="Example"
        component={Example}
        durationInFrames={30 * 10}
        fps={30}
        height={1080}
        width={1920}
        schema={schema}
        defaultProps={{
          direction: "from-left",
        }}
      />
    </>
  );
};

export default Root;
