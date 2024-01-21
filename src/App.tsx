import React from "react";
import Contacts from "./routes/Contacts"
import Home from "./routes/Home"
import Projects from "./routes/Projects";
import Skills from "./routes/Skills";
import Background from "./routes/Background";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import Wakatime from "./routes/Wakatime";

export default function App() {

  const MemoizedProjects = React.memo(Projects);
  const MemoizedSkills = React.memo(Skills);
  const MemoizedHome = React.memo(Home);
  const MemoizedContacts = React.memo(Contacts);
  const MemoizedHistory = React.memo(Background);
  const MemoizedWakatime = React.memo(Wakatime);

  return (
    <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MemoizedHome />}> </Route>
          <Route index element={<MemoizedHome />}></Route>
          <Route path="contacts" element={<MemoizedContacts />}></Route>
          <Route path="skills" element={<MemoizedSkills />}></Route>
          <Route path="projects" element={<MemoizedProjects />}></Route>
          <Route path="history" element={<MemoizedHistory />}></Route>
          <Route path="wakatime" element={<MemoizedWakatime />}></Route>
        </Routes>  

      </BrowserRouter>
  )
}


