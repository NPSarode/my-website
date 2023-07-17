import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import HeadLine from "./components/HeadLine";
import MyProject from "./components/MyProject";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

function App() {
  return (
    
    <div className="container-flex back">
      <div className="col-md-12">
        <HeadLine title="Welcome..." />
      </div>

      <Navbar />

      <div className="col-md-12">
        <Routes>
          <Route path="/content" element={<Content />}></Route>
          <Route path="/project" element={<MyProject />}></Route>
          <Route path="/contact" element={<ContactMe />}></Route>
        </Routes>
      </div>
      <Footer title="Nikhil Sarode" />
      
    </div>

  );
}

export default App;
