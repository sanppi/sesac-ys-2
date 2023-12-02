import "./App.css";
import StateClass from "./components/StateClass";
import StateFunc from "./components/StateFunc";
import StateClass1 from "./components/실습_StateClass";
import StateFunc1 from "./components/실습_StateFunc";
import EventClass from "./components/EventClass";
import Eventfunc from "./components/EventFunc";
import EventClass1 from "./components/HandlerEx";
import EventFunc1 from "./components/실습_EventHandler2";
import EventFunc2 from "./components/실습_EventHandler3";
import EventFunc3 from "./components/실습_EventHandler4";
import Practice4 from "./components/Practice4";

function App() {
  return (
    <div>
      <StateClass name="Sanha" />

      <StateFunc />

      <StateClass1 />

      <StateFunc1 />

      <EventClass />

      <Eventfunc />

      <EventClass1 />

      <EventFunc1 />

      <EventFunc2 />

      <EventFunc3 />

      <Practice4 />
    </div>
  );
}

export default App;
