import { Route, Routes } from "react-router-dom";
import PersonalDetails from "./pages/personalDetails";
import Education from "./pages/education";
import { Suspense } from "react";
import Projects from "./pages/projects";
import Experience from "./pages/Experience";
import Extra from "./pages/Extra";
import Display from "./pages/Display";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <PersonalDetails />
            </Suspense>
          }
        />
        <Route
          path="/education"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Education />
            </Suspense>
          }
        />
        <Route
          path="/projects"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Projects />
            </Suspense>
          }
        />

        <Route
          path="/experience"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Experience />
            </Suspense>
          }
        />

        <Route
          path="/extra"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Extra />
            </Suspense>
          }
        />

        <Route
          path="/resume"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Display />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
