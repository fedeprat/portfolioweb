import Loader from 'react-loaders'
import './projects.scss'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../animatedLetters'
import NFTickets from '../assets/imagesProjects/NFTickets.png'
import ReañtorAssistantBase from '../assets/imagesProjects/RealtorAssistant.png'
import ReañtorAssistantConfigured from '../assets/imagesProjects/RealtorAssistantConfigured.png'

export default function Projects() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['P', 'r', 'o', 'j', 'e', 'c', 't', 's']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div style={{ height: '100%', overflow: 'auto' }}>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            index={8}
          />
        </h1>
        <div className="individualProjects">
          <img src={NFTickets} alt="NFTickets" />
          <div style={{ position: 'relative', width: '1500px' }}>
            <h2>NFTickets</h2>
            <br />
            <p className="description">
              NFTickets is an app that lets you buy and sell actual NFT tickets
              that can be used to attend the event, but you are able to hold it
              forever in your metamask extension as the NFT that it is.
              <br /> You can create your own event also with a fixed amount of
              tickets and the price you want, to sell to other people.
              <br /> We use the Ropsten's test network as blockchain, to see how
              to switch from your current blockchain in metamask head to "quick
              start" section. <br />
              We also have a video tour through the app to see all the features.{' '}
              <br />
              App deployed:{' '}
              <a href="https://nftickets.netlify.app/">NFTickets</a> | github
              repo:{' '}
              <a href="https://github.com/fedeprat/NFTickets">gitHub repo</a>
            </p>
          </div>
        </div>

        <hr />

        <div className="individualProjects">
          <img
            className="realtor"
            src={ReañtorAssistantConfigured}
            alt="NFTickets"
          />
          <img className="realtor" src={ReañtorAssistantBase} alt="NFTickets" />
          <div style={{ position: 'relative', width: '1500px' }}>
          <h2>Realtor Assistant</h2>
            <br />
            <p className="description">
              RealtorAssistant was born because my brother is a real estate
              agent and one day he told me he was wasting a lot of time daily
              making pictures to upload to WhatsApp status or Instagram stories
              to advertise the houses for sale or rent. So I thought it would be
              a good idea to make an app to easily put together some pics of a
              house and be able to add key information and features like how
              many rooms of bathrooms it has. For more information on what
              technologies I used to build it head over to{' '}
              <a href="https://github.com/fedeprat/RealtorAssistant">
                the GitHub repo
              </a>
            </p>
          </div>
        </div>

        <hr />

        <div className="individualProjects">
          <img
            className="realtor"
            src={ReañtorAssistantConfigured}
            alt="NFTickets"
          />
          <img className="realtor" src={ReañtorAssistantBase} alt="NFTickets" />
          <div style={{ position: 'relative', width: '1500px' }}>
          <h2>Dogs Database</h2>
            <br />
            <p className="description">
              Dogs database is an app that gives all kind of information about different dog races such as temperaments, life span and weight etc. It has a back-end deployed
              to heroku as well as a postgres database. The front-end is deployed to vercel. <br/>
              It has a searchbar that work together with different front-end and back-end filters to find any kind of dog. You can also create your own dog and filter by created
              to find it amongst all the real races. The form to create the dog is fully validated as well as the back-end that gets the post request to add the new entry to
              the database
            </p>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
