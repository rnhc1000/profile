import React from "react";
import Contacts from "./routes/Contacts"
import Home from "./routes/Home"
import Projects from "./routes/Projects";
import Skills from "./routes/Skills"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';

export default function App() {

  const MemoizedProjects = React.memo(Projects);
  const MemoizedSkills = React.memo(Skills);
  const MemoizedHome = React.memo(Home);
  const MemoizedContacts = React.memo(Contacts);

  return (
    <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MemoizedHome />}> </Route>
          <Route path="contacts" element={<MemoizedContacts />}></Route>
          <Route path="skills" element={<MemoizedSkills />}></Route>
          <Route path="projects" element={<MemoizedProjects />}></Route>
        </Routes>
      </BrowserRouter>
  )
}


