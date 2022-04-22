import './index.scss'
import LogoTitle from '../assets/images/logo-s.png'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={LogoTitle} alt="developer" />
          Fred
          <br />
          fullstack developer
        </h1>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}
