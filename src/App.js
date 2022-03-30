import React, { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import {Homepage, Software, Hardware, Mechanical, Arcade, NotFound} from "./pages";
import GlobalStyle from "./theme"
import Header from "../src/components/header"
import Footer from "../src/components/footer"
import firebase from "./firebase"
import { collection, getDocs } from "firebase/firestore";
import 'firebase/compat/firestore'


function App() {
  const db = firebase.firestore()
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, "pages")

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      setUsers(data.docs.map((doc) =>({...doc.data(), id: doc.id})))
      console.log(data.docs)
      console.log(users)
    }
    getUsers()
  }, [])
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
        <Footer />
      </Router>
    </>
    
    

  );
}

export default App;
