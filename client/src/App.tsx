import { Suspense, lazy } from "react"
import { Route, Routes } from "react-router"

const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login"));


function App() {

  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
}

export default App
