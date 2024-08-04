import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Movelist from "./Components/Movelist";
import Movedetails from "./Components/Movedetails";
import About from "./Components/About";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="" element={<Movelist />}></Route>
        <Route
          path="move/:moveId"
          element={
            <>
              <Movedetails />
            </>
          }
        ></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
