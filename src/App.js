import { Route, Routes } from 'react-router-dom'
import './App.scss'
import About from './components/About'
import AwsInfo from './components/AWS/AwsInfo'
import Contact from './components/Contact'
import Home from './components/Home'
import Layout from './components/Layout'
import Projects from './components/projects'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/awsinfo" element={<AwsInfo />} />
      </Route>
    </Routes>
  )
}

export default App
