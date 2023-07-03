import { Suspense } from "react";
import "./App.css";
import Content from "./pages/Content";

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Content />
      </Suspense>
    </>
  );
}

export default App;
