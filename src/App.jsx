import { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Service from "./components/service/Service";

function App() {
  const [toggleMood, setToggleMood] = useState("light");

  return (
    <section
      className={`w-full transition-all duration-200 ease-in relative ${
        toggleMood == "light" ? "light" : toggleMood == "dark" ? "dark" : null
      }`}
    >
      <Header toggleMood={toggleMood} setToggleMood={setToggleMood} />
      <Hero toggleMood={toggleMood} />
      <Hero toggleMood={toggleMood} />
      <Service />
    </section>
  );
}

export default App;
