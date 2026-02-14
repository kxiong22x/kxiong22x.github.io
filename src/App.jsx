import './App.css'
import Navbar from './components/Navbar/Navbar'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'
import Crosswords from './components/Crosswords/Crosswords'

function App() {
  return (
    <>
      <Navbar />
      <div id="about"><AboutMe /></div>
      <div id="projects"><Projects /></div>
      <div id="crosswords"><Crosswords /></div>
    </>
  )
}

export default App
