import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseList from "./pages/WarehouseList";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="app">
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/warehouses" replace={true} />}
          />
          <Route path="/warehouses" element={<WarehouseList />} />
          <Route path="/warehouses/edit-warehouse/:id" element />
          <Route path="/warehouses/:id" element={<WarehouseDetailsPage />} />
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
