import AnimatedLetters from '../animatedLetters'
import { useState, useEffect } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJava,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

export default function About() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['a', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              index={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I am a fullstack developer eager to be part of a team and apply all
            the knowledge and experience I have gathered in a real life
            scenario.
          </p>
          <p>
            NextJS, ReactJS, React Native, ExpressJS along with NodeJS,
            Sequelize and testing are my strong areas but I am always learning
            about other technologies, right now I am studying Java.
          </p>
          <p>
            Apart from my tech skills I have studied 4 years for a degree in
            Biotechnology. During 4th year I was asigned to a task for
            Bioinformatics involving ExpressJS and making a server to call a
            proteins API. Since then I couldn't stop learning about it until I
            decided I definitely wanted to dedicate my life to it.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
