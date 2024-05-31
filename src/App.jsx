import ClockName from "./components/ClockName";
import ClockHead from "./components/ClockHead";
import ClockTime from "./components/ClockTime";
import "./App.css";

function App() {
  return (
    <div className="CLock-Container ">
      <ClockName />
      <ClockHead />
      <ClockTime />
    </div>
  );
}

export default App;
