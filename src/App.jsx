import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { useDocsContext } from "./Components/utils/global.context";

function App() {

  const {state} = useDocsContext()
  return (
    <div className={state.lightTheme ? "App" : "dark"}>
      <Navbar />      

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/dentist/:id" element={<Detail/>}/>
        <Route path="/favs" element={<Favs/>}/>
        <Route path="*" element={<h1>Error 404 - Page not found</h1>}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
