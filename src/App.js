import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import {Homepage, Software, Hardware, Mechanical, Arcade, NotFound} from "./pages";
import GlobalStyle from "./theme"
import Header from "../src/components/header"
import Footer from "../src/components/footer"

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/Software" element={<Software />}> </Route>
          <Route path="/Hardware" element={ <Hardware />}></Route>
          <Route path="/Mechanical" element={ <Mechanical />}></Route>
          <Route path="/Arcade" element={ <Arcade />}></Route>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
    
    

  );
}

export default App;
