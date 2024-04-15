import { useEffect, useState } from "react";

const encoder = new TextEncoder();
const decoder = new TextDecoder();

type Message = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];

function App() {
  const [port, setPort] = useState<null | SerialPort>(null);
  const [debugData, setDebugData] = useState<number[]>([]);

  const requestPorts = async () => {
    await navigator.serial.requestPort().then((port) => {
      port.open({ baudRate: 9600 }).then(() => {
        setPort(port);
      });
    });
  };

  const sendData = async (message: Message) => {
    const writer = port?.writable.getWriter();
    writer?.write(encoder.encode("<" + message.join(",") + ">"));
    writer?.close();
  };

  useEffect(() => {
    async function readSerial() {
      while (port?.readable) {
        const reader = port.readable.getReader();
        try {
          // eslint-disable-next-line no-constant-condition
          while (true) {
            const { value, done } = await reader.read();
            if (done) {
              // |reader| has been canceled.
              break;
            }
            // Do something with |value|…
            setDebugData((dd) => [...dd, value]);
          }
        } catch (error) {
          // Handle |error|…
        } finally {
          reader.releaseLock();
        }
      }
    }

    readSerial();
  }, [port]);

  return (
    <>
      <div>
        {/* {alphabeticallySortMunicipi.map((municipio) => (
          <button
            className="border border-cyan-350 text-center text-cyan-350 p-[10px] text-sm leading-6 aspect-square flex-[15] w-[6%]"
            key={municipio["Municipio"]}
            // onClick={() => sendData([municipio["Municipio"]])}
          >
            {municipio["NIL - Name"]}
          </button>
        ))} */}
        {!port ? (
          <button onClick={requestPorts}>Connect to Arduino</button>
        ) : (
          <>
            <>
              <button
                onClick={() => sendData([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])}
              >
                Reset
              </button>
              <button
                onClick={() => sendData([255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])}
              >
                Full
              </button>
              <button
                onClick={() => sendData([1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1])}
              >
                Q1 Full
              </button>
              <button
                onClick={() => sendData([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0])}
              >
                Q1 D1
              </button>
              <button
                onClick={() => sendData([2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0])}
              >
                Q2 D2
              </button>
              <button
                onClick={() => sendData([1, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0])}
              >
                Q1-2 D2
              </button>
            </>
          </>
        )}
      </div>
      <pre>
        <code>{decoder.decode(new Uint8Array(debugData))}</code>
      </pre>
    </>
  );
}

export default App;
