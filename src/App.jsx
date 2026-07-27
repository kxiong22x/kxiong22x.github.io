import Navbar from './components/Navbar/Navbar'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'
import Crosswords from './components/Crosswords/Crosswords'
import { SECTIONS } from './constants/sections'

const sectionComponents = {
  about: AboutMe,
  projects: Projects,
  crosswords: Crosswords,
}

function App() {
  return (
    <>
      <Navbar />
      {SECTIONS.map(({ id }) => {
        const SectionComponent = sectionComponents[id]
        return (
          <div id={id} key={id}>
            <SectionComponent />
          </div>
        )
      })}
    </>
  )
}

export default App
