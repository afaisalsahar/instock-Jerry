import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

// import environment variables
const PORT = process.env.REACT_APP_PORT;
const URL = process.env.REACT_APP_URL;

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/warehouses" element />
        <Route path="/warehouses/:id" element />
        <Route path="/warehouses/:id/inventories/:id" element />
        <Route path="/inventories" element />
        <Route path="/inventories/:id" element />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
