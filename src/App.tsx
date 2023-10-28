import React from "react";
import Contacts from "./routes/Contacts"
import Home from "./routes/Home"
import Projects from "./routes/Projects";
import Skills from "./routes/Skills"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';

export default function App() {

  const MemoizedComponent = React.memo(Projects);

  return (
    <>


      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />}> </Route>

          <Route path="contacts" element={<Contacts />}></Route>
          <Route path="skills" element={<Skills />}></Route>
          <Route path="projects" element={<MemoizedComponent />}></Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}


