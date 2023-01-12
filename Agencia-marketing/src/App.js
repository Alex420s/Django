// Aquí manejamos las rutas con react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store";
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/home";
import { Provider } from "react-redux";
import About from "containers/pages/about";
import Portfolio from "containers/pages/portfolio";
import Contact from "containers/pages/contact";
import Blog from "containers/pages/blog";

 function App() {
  return (
    <Provider store={store}>
     <Router>
       <Routes>
           {/* Error Display (Rutas no definidas) */}
           <Route path="*" element={<Error404 />} />

           {/* Home Display */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />

       </Routes>
      </Router>
    </Provider>
  );
}

export default App;
