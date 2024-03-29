import Create from "./components/Create";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
