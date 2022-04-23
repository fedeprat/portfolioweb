import './index.scss'
import LogoTitle from '../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../animatedLetters'
import Loader from 'react-loaders'

export default function Home() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['F', 'r', 'e', 'd']
  const jobArray = ['F', 'u', 'l', 'l', 's', 't', 'a', 'c', 'k']
  const dev = ['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <br />
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _9`}>i,</span>{' '}
            <span className={`${letterClass} _11`}>I</span>
            <span className={`${letterClass} _12`}>'m</span>{' '}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              index={13}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              index={17}
            />{' '}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={dev}
              index={26}
            />
          </h1>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
