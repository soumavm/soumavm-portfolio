import React from "react"
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom"

import {Homepage, Software, Hardware, Mechanical, Arcade, NotFound, Draw} from "./pages"
import GlobalStyle from "./theme"
import Header from "../src/components/header"
import Footer from "../src/components/footer"
import firebase from "./firebase"
import 'firebase/compat/firestore'




function App() {
  const db = firebase.firestore()

  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/Software" element={<Software db = {db}/>}> </Route>
          <Route path="/Hardware" element={ <Hardware db = {db}/>}></Route>
          <Route path="/Mechanical" element={ <Mechanical db = {db}/>}></Route>
          <Route path="/Arcade" element={ <Arcade />}></Route>
          <Route path="/Draw" element={ <Draw db = {db}/>}></Route>
          <Route path="/" element={<Homepage db = {db}/>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </HashRouter>
    </>
  )
}

export default App
