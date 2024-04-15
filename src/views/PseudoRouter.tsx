import { useMainContext } from "../context/MainContext";
import { Home } from "./Home";
import { Internal } from "./Internal";

export const PseudoRouter = () => {
  const { inspected } = useMainContext();

  return inspected.length ? <Internal /> : <Home />;
};
