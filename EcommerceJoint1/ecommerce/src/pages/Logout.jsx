
import { persistor1 } from "../redux/store";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button
        onClick={() => {
          persistor1.purge();
        }}
      >
        purge state
      </button>
    </div>
  );
}
