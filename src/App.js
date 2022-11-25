import Navbar from "./components folder/Navbar";
import Main from "./components folder/Main";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <Navbar toggleTheme={toggleTheme} />
      <Main />
    </div>
  );
}
