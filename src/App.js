import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseList from "./pages/WarehouseList";
import "./App.scss";

// import environment variables
const PORT = process.env.REACT_APP_PORT;
const URL = process.env.REACT_APP_URL;

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="app">
        <Routes>
          <Route path="/" element={<WarehouseList />} />
          <Route path="/warehouses" element={<WarehouseDetailsPage />} />
          <Route path="/warehouses/edit-warehouse/:id" element />
          <Route path="/warehouses/:id" element />
          <Route path="/inventories" element />
          <Route path="/inventories/add-inventory-item/:id" element />
          <Route path="/inventories/:id" element />
          <Route path="/*" element />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
