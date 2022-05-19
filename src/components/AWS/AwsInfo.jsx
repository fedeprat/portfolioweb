import AnimatedLetters from '../animatedLetters'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import './awsinfo.scss'

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
      <div className="container" style={{ height: '100%' }}>
        <div>
          <h1 id="animatedLetters" className='h1'>
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
        <div className="papurri" style={{ width: '700px' }}>
          <h2 className='h2'>
            Architecture <br />
            This portfolio website is a S3 bucket that anyone can consume
            through the subdomain{' '}
            <h2 className='h2' style={{ display: 'inline', color: '#ffd700' }}>
              app.fedeprat.com
            </h2>
            . <br />
            All of my projects are being deployed to AWS currently, all being
            accessible through a subdomain of{' '}
            <h2 className='h2' style={{ display: 'inline', color: '#ffd700' }}>
              {' '}
              fedeprat.com{' '}
            </h2>
            <br /> i.e{' '}
            <h2 className='h2' style={{ display: 'inline', color: '#ffd700' }}>
              movies-database.fedeprat.com{' '}
            </h2>{' '}
            is one of them
          </h2>
        </div>

        <div style={{width: "100%", height: "150px"}}>a <br/> a</div>

        <div className="budget">
          <h1 className='h1'>Budget management</h1>
          <h2 className='h2'>
            I've set a budget alert limit to the whole account as well as individual
            budget limits for each subdomain. I've also set up a limit for
            request that the same client can make to a subdomain{' '}
          </h2>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
