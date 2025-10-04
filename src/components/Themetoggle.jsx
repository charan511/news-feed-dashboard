import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button className="theme-toggle-btn" onClick={toggleTheme}>
      {theme === "light" ? (
        <>
         <img src="/moon.png"alt="Light Mode" className="toggle-icon" />
          <span className="toggle-label">Dark</span>
        </>
      ) : (
        <>
          
           <img src="/sun.png"  alt="Dark Mode" className="toggle-icon" />
          <span className="toggle-label">Light</span>
        </>
      )}
    </button>
  );
}
