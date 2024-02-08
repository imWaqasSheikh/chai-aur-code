import Header from "./componet/Header/Header";
import Footer from "./componet/Footer/Footer";
import "./App.css";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  );
}

export default App;
