import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import AddWarehousePage from "./pages/AddWarehouse/AddWarehouse";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import WarehouseList from "./pages/WarehouseList/WarehouseList";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";
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
          <Route path="/warehouses/:id" element={<WarehouseDetailsPage />} />
          <Route path="/warehouses/:id/edit" element={<EditWarehouse />} />
          <Route path="/warehouses/add" element={<AddWarehousePage />} />

          <Route path="/inventories" element={<InventoryPage />} />
          <Route path="/inventories/:id" element={<InventoryDetailsPage />} />
          <Route path="/inventories/:id/edit" element />
          <Route path="/inventories/add" element />

          <Route path="/*" element />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
