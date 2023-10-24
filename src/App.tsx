import Contacts from "./routes/Contacts"
import Home from "./routes/Home"
import Projects from "./routes/Projects";
import Skills from "./routes/Skills"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="contacts" element= {<Contacts />}></Route>
        <Route path="skills" element={<Skills />}></Route>
        <Route path="projects" element={<Projects />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}


