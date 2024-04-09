import { useState } from "react";
import "./App.css";

function App() {
  const [port, setPort] = useState<null | SerialPort>(null);

  const requestPorts = async () => {
    await navigator.serial.requestPort().then((port) => {
      setPort(port);
    });
  };

  const sendData = async () => {
    const writer = port?.writable.getWriter();
    writer?.write(new Uint8Array([1]));
    writer?.close();
  };

  return (
    <>
      <h1>Test</h1>
      <div className="card">
        {!port ? (
          <button onClick={requestPorts}>Connetti a seriale</button>
        ) : (
          <button onClick={sendData}>Invia 1</button>
        )}
      </div>
    </>
  );
}

export default App;
