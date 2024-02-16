import { useState } from "react";
import Form from "./Form";
import Counter from "./Counter";
import "./App.css";

function App() {
  const [currentTab, setCurrentTab] = useState("form");
  return (
    <>
      <nav>
        <button onClick={() => setCurrentTab("form")}>Form</button>
        <button onClick={() => setCurrentTab("counter")}>Counter</button>
      </nav>
      {currentTab === "form" ? <Form /> : <Counter />}
    </>
  );
}

export default App;
