import Welcome from "./components/Welcome"
import Contacts from "./routes/Contacts"
import Feet from "./routes/Feet"
import Home from "./routes/Home"
import Skills from "./routes/Skills"


export default function App() {

  return (
    <>
      <Home />
      <Welcome />
      <Skills />
      <Contacts />
      <Feet />
    </>
  )
}


