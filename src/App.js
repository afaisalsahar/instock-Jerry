import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehouseDetailsPage from "./pages/WarehouseDetails/WarehouseDetailsPage";

// import environment variables
const PORT = process.env.REACT_APP_PORT;
const URL = process.env.REACT_APP_URL;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WarehouseDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
