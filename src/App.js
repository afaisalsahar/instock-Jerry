import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

// import environment variables
const PORT = process.env.REACT_APP_PORT;
const URL = process.env.REACT_APP_URL;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
