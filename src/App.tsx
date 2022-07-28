import { useEffect } from "react";
import "./App.css";
import { useLocais } from "./hooks/useLocais";

function App() {
  const { execute, loading, data, error } = useLocais();

  useEffect(() => {
    execute("rj", "");
  }, []);

  loading ? <p>loading...</p> : null;

  return <p>{JSON.stringify(data)}</p>;
}

export default App;
