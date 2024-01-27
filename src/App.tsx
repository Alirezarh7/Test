import Create from "./components/Create";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";
import Delete from "./components/Delete";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
