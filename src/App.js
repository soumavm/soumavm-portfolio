import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import {Homepage, Page2, Page3, NotFound} from "./pages";
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
          <Route path="/page2" element={<Page2 />}> </Route>
          <Route path="/page3" element={ <Page3 />}></Route>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
    
    

  );
}

export default App;
