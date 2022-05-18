import AnimatedLetters from '../animatedLetters'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'

export default function AwsInfo() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const AWS = ['A', 'W', 'S']
  const architecture = [
    'A',
    'r',
    'c',
    'h',
    'i',
    't',
    'e',
    'c',
    't',
    'u',
    'r',
    'e',
  ]
  const info = ['i', 'n', 'f', 'o']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4500)
  }, [])

  return (
    <>
      <div>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={AWS}
            index={13}
          />{' '}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={architecture}
            index={16}
          />{' '}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={info}
            index={27}
          />
        </h1>
      </div>
      <Loader type="pacman" />
    </>
  )
}
