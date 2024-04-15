import { useMainContext } from "../context/MainContext";

export const Internal = () => {
  const { data, setData, inspected, setInspected } = useMainContext();

  const toggleData = async (index: 0 | 1 | 2 | 3 | 4 | 5) => {
    setData((d) => {
      const newData = [...d] as [0 | 1, 0 | 1, 0 | 1, 0 | 1, 0 | 1, 0 | 1];
      newData[index] = newData[index] ? 0 : 1;
      return newData;
    });
  };

  return (
    <>
      <p>Inspecting {inspected.join(", ")}</p>
      <div className="flex flex-wrap gap-1">
        <div>
          <button
            className="border border-cyan-350 text-center text-cyan-350 px-[10px] py-[5px] text-sm leading-6"
            onClick={() => toggleData(0)}
          >
            {data[0] ? "Spegni" : "Accendi"} Dato 1
          </button>
          <button
            className="border border-cyan-350 text-center text-cyan-350 px-[10px] py-[5px] text-sm leading-6"
            onClick={() => toggleData(1)}
          >
            {data[1] ? "Spegni" : "Accendi"} Dato 2
          </button>
          <button
            className="border border-cyan-350 text-center text-cyan-350 px-[10px] py-[5px] text-sm leading-6"
            onClick={() => toggleData(2)}
          >
            {data[2] ? "Spegni" : "Accendi"} Dato 3
          </button>
          <button
            className="border border-cyan-350 text-center text-cyan-350 px-[10px] py-[5px] text-sm leading-6"
            onClick={() => toggleData(3)}
          >
            {data[3] ? "Spegni" : "Accendi"} Dato 4
          </button>
          <button
            className="border border-cyan-350 text-center text-cyan-350 px-[10px] py-[5px] text-sm leading-6"
            onClick={() => toggleData(4)}
          >
            {data[4] ? "Spegni" : "Accendi"} Dato 5
          </button>
          <button
            className="border border-cyan-350 text-center text-cyan-350 px-[10px] py-[5px] text-sm leading-6"
            onClick={() => toggleData(5)}
          >
            {data[5] ? "Spegni" : "Accendi"} Dato 6
          </button>
        </div>
      </div>
      <button
        className="border border-cyan-350 text-center text-cyan-350 px-[10px] py-[5px] text-sm leading-6"
        onClick={() => {
          setInspected([]);
          setData([0, 0, 0, 0, 0, 0]);
        }}
      >
        Go back
      </button>
    </>
  );
};
