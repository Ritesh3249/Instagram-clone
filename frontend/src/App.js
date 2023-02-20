import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainRoute from "./routes/MainRoute";
function App() {
  return (
    <>
   
    <BrowserRouter>
    <Routes>
    <Route path="*" element={<MainRoute />} />
 
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
