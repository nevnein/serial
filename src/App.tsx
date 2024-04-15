import { MainContextProvider } from "./context/MainContextProvider";
import { PseudoRouter } from "./views/PseudoRouter";

function App() {
  return (
    <div className="flex flex-col">
      <div className="border-b border-cyan-350 text-center text-cyan-350 p-[10px] text-2xl leading-6 ">
        Questo non è un modello di pianificazione urbana. È un generatore di
        possibilità
      </div>
      <div className="flex justify-center items-center flex-1 flex-col gap-4 py-8">
        <MainContextProvider>
          <PseudoRouter />
        </MainContextProvider>
      </div>
    </div>
  );
}

export default App;
