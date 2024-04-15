import { createContext, useContext } from "react";

type MainContextType = {
  port: SerialPort | null;
  inspected: number[];
  setInspected: React.Dispatch<React.SetStateAction<number[]>>;
  data: [0 | 1, 0 | 1, 0 | 1, 0 | 1, 0 | 1, 0 | 1];
  setData: React.Dispatch<
    React.SetStateAction<[0 | 1, 0 | 1, 0 | 1, 0 | 1, 0 | 1, 0 | 1]>
  >;
};

export const MainContext = createContext<MainContextType | null>(null);

export const useMainContext = () => {
  const m = useContext(MainContext);
  if (!m) {
    throw new Error("MainContextProvider not found");
  }
  return m;
};
