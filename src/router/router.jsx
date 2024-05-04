import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Nav from '../components/Nav/Nav'
import Theme from '../components/Theme/Theme'
import Projects from '../pages/Projects/Projects'
import Education from '../pages/Education/Education'

export default function router() {
  return (
    <BrowserRouter>
    <Nav />
    <Theme />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/Education' element={<Education />} />
    </Routes>
    </BrowserRouter>
  )
}
