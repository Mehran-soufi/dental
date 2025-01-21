import { useState } from "react";

function App() {
  const [toggleMood, setToggleMood] = useState("light");

  return (
    <section
      className={`w-full transition-all duration-200 ease-in ${
        toggleMood == "light" ? "light" : toggleMood == "dark" ? "dark" : null
      }`}
    ></section>
  );
}

export default App;
