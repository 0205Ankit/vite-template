import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router";
import useTheme from "./hooks/useTheme";

const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login"));

function App() {
  const { isDark , toggleTheme } = useTheme();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <Suspense fallback={<>Loading...</>}>
      <button onClick={toggleTheme}>toggle</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
}

export default App;
