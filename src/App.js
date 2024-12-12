import { BrowserRouter, Route, Routes } from "react-router";
import ProductList from "./screens/productList";
import ProductAdd from "./screens/productAdd";
import NavBar from "./component/navBar";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<ProductAdd />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
