import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import InventoryPage from "./pages/InventoryPage/InventoryPage";

// import environment variables
const PORT = process.env.REACT_APP_PORT;
const URL = process.env.REACT_APP_URL;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element />
        <Route path="/inventories" element={<InventoryPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
