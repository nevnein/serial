import { useEffect, useState } from "react";
import { MainContext } from "./MainContext";
import { Button } from "../components/Button";

const encoder = new TextEncoder();
// const decoder = new TextDecoder();

export const MainContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [port, setPort] = useState<null | SerialPort>(null);
  const [inspected, setInspected] = useState<number[]>([]);
  const [data, setData] = useState<[0 | 1, 0 | 1, 0 | 1, 0 | 1, 0 | 1, 0 | 1]>([
    0, 0, 0, 0, 0, 0,
  ]);

  const requestPorts = async () => {
    await navigator.serial.requestPort().then((port) => {
      port.open({ baudRate: 9600 }).then(() => {
        setPort(port);
      });
    });
  };

  useEffect(() => {
    const sendData = async () => {
      const filledInspected = inspected.concat(
        new Array(6 - inspected.length).fill(0)
      );
      const writer = port?.writable.getWriter();
      writer?.write(
        encoder.encode(
          "<" + filledInspected.join(",") + "," + data.join(",") + ">"
        )
      );
      writer?.close();
    };

    sendData();
  }, [data, inspected, port]);

  // useEffect(() => {
  //   async function readSerial() {
  //     while (port?.readable) {
  //       const reader = port.readable.getReader();
  //       try {
  //         // eslint-disable-next-line no-constant-condition
  //         while (true) {
  //           const { value, done } = await reader.read();
  //           if (done) {
  //             // |reader| has been canceled.
  //             break;
  //           }
  //           // Do something with |value|…
  //           setDebugData((dd) => [...dd, value]);
  //         }
  //       } catch (error) {
  //         // Handle |error|…
  //       } finally {
  //         reader.releaseLock();
  //       }
  //     }
  //   }

  //   readSerial();
  // }, [port]);

  return !port ? (
    <div className="flex justify-center items-center">
      <Button onClick={requestPorts}>Request Port</Button>
    </div>
  ) : (
    <MainContext.Provider
      value={{
        port,
        inspected,
        setInspected,
        data,
        setData,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
