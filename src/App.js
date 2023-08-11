import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home.js";
const NoMatch = lazy(() => import("./pages/NoMatch.js"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
