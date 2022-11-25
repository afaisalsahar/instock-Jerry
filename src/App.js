import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import AddWarehousePage from './pages/AddWarehouse/AddWarehouse'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
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
          <Route path="/warehouses" element={<WarehouseDetailsPage />} />
          <Route path="/warehouses/:id" element />
          <Route path="/warehouses/:id/edit" element />
          <Route path="/warehouses/add" element={<AddWarehousePage />}/>

          <Route path="/inventories" element />
          <Route path="/inventories/:id" element />
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
