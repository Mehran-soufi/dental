import { useState } from "react";
import Header from "./components/header/Header";

function App() {
  const [toggleMood, setToggleMood] = useState("light");

  return (
    <section
      className={`w-full transition-all duration-200 ease-in ${
        toggleMood == "light" ? "light" : toggleMood == "dark" ? "dark" : null
      }`}
    >
      <Header toggleMood={toggleMood} setToggleMood={setToggleMood} />
    </section>
  );
}

export default App;
