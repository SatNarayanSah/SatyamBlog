import { Routes, BrowserRouter, Route } from "react-router-dom";
import Index from "./views/cors";
import MainWrapper from "./layouts/MainWrapper";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainWrapper>
          <Routes>
            <Route path="/" element={<Index />}></Route>
          </Routes>
        </MainWrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
