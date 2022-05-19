import './index.scss'
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
        <div className="containerMigration">
          <h1>
            I deployed this web and its features <br />
            to <h1 style={{display: "inline", color: "#fee556"}}>Amazon Web Services.</h1>{' '}
          </h1>
          <Link to="/awsinfo" className="boton">MORE INFO ON THIS</Link>
          <h2 className='h2'>
            For practice purposes right now as I get <br />some time I am migrating all of my <br/> projects
            to AWS as well
          </h2>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
