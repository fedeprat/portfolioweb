import Loader from 'react-loaders'
import './projects.scss'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../animatedLetters'
import NFTickets from '../assets/imagesProjects/NFTickets.png'
import ReañtorAssistantBase from '../assets/imagesProjects/RealtorAssistant.png'
import ReañtorAssistantConfigured from '../assets/imagesProjects/RealtorAssistantConfigured.png'
import dogsDatabase from '../assets/imagesProjects/dogsdatabase.png'
import moviesdatabase from '../assets/imagesProjects/moviesplace.png'
import chat from '../assets/imagesProjects/chat2.png'
import Fredchat from '../assets/imagesProjects/chat1fred.png'

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
      <div
        style={{ height: '100%', overflow: 'auto' }}
        className="containerdetodo"
      >
        <h1 className='h1'>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            index={8}
          />
        </h1>
        <div className="individualProjects">
          <img src={NFTickets} alt="NFTickets" />
          <div style={{ position: 'relative', width: '1500px' }}>
            <h2 className='h2'>NFTickets</h2>
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
              We also have a video tour through the app to see all the features.
              <br />
              App deployed:{' '}
              <a href="https://nftickets.netlify.app/">NFTickets</a> |{' '}
              <a href="https://github.com/fedeprat/NFTickets">gitHub repo</a>
            </p>
          </div>
        </div>

        <hr />

        <div className="individualProjects">
          <img
            className="realtor"
            src={ReañtorAssistantConfigured}
            alt="ReañtorAssistantConfigured"
          />
          <img
            className="realtor"
            src={ReañtorAssistantBase}
            alt="ReañtorAssistantBase"
          />
          <div style={{ position: 'relative', width: '1500px' }}>
            <h2 className='h2'>Realtor Assistant</h2>
            <br />
            <p className="description">
              RealtorAssistant is a React Native mobile app that was born
              because my brother is a real estate agent and one day he told me
              he was wasting a lot of time daily making pictures to upload to
              WhatsApp status or Instagram stories to advertise the houses for
              sale or rent. So I thought it would be a good idea to make an app
              to easily put together some pics of a house and be able to add key
              information and features like how many rooms of bathrooms it has.
              For more information on what technologies I used to build it head
              over to{' '}
              <a href="https://github.com/fedeprat/RealtorAssistant">
                the GitHub repo
              </a>
            </p>
          </div>
        </div>

        <hr />

        <div className="individualProjects">
          <img className="dogsDatabase" src={dogsDatabase} alt="dogsDatabase" />
          <div style={{ position: 'relative', width: '1500px' }}>
            <h2 className='h2'>Dogs Database</h2>
            <br />
            <p className="description">
              Dogs database is an app that gives all kind of information about
              different dog races such as temperaments, life span and weight
              etc. It has a back-end deployed to heroku as well as a postgres
              database. The front-end is deployed to vercel. <br />
              It has a searchbar that work together with different front-end and
              back-end filters to find any kind of dog. You can also create your
              own dog and filter by created to find it amongst all the real
              races. The form to create the dog is fully validated as well as
              the back-end that gets the post request to add the new entry to
              the database. <br /> Deployed App:{' '}
              <a href="https://dogs-database.vercel.app/">
                Dogs database
              </a> |{' '}
              <a href="https://github.com/fedeprat/dogsProject">GitHub repo</a>
            </p>
          </div>
        </div>

        <hr />

        <div className="individualProjects">
          <img
            className="moviesdatabase"
            src={moviesdatabase}
            alt="moviesdatabase"
          />
          <div style={{ position: 'relative', width: '1500px' }}>
            <h2 className='h2'>Movies place</h2>
            <br />
            <p className="description">
              This was one of my first react projects, with it I learnt how to
              make somehow complex custom hooks to pass information from one
              component to others. It is a single page app styled with styled
              components that fetches information about movies from an external
              API. It uses react-router to navigate. <br />
              It has a hero image on home section, searchbar and a movie detail
              section when you click a movie that shows details such as
              director, casting, year of release, hero image and more.
              <br /> Deployed App:{' '}
              <a href="https://movies-place.netlify.app/">
                Movies database
              </a> |{' '}
              <a href="https://github.com/fedeprat/moviesdatabase">
                GitHub Repo
              </a>
            </p>
          </div>
        </div>

        <hr />

        <div className="individualProjects">
          <img className="chatImage" src={chat} alt="Fred's chat app" />
          <div style={{ position: 'relative', width: '1500px' }}>
            <h2 className='h2'>Fred's realtime chat app</h2>
            <br />
            <p className="description">
              This is my first chat app, the purpose was learning webSocket
              protocol and how to use it on a real environment. I used socket.io
              library to manage the connections. I deployed the back-end to
              heroku and the front-end to Vercel. It has emojis, I also
              configured CORS to accept only connections from the front-end
              deployed to vercel. <br /> Deployed App:{' '}
              <a href="https://fredrealtimechat.vercel.app/">Fred's chat app</a>{' '}
              |{' '}
              <a href="https://github.com/fedeprat/Fredrealtimechat">
                GitHub repo
              </a>
            </p>
          </div>
        </div>

        <hr />

        <div className="individualProjects">
          <img className="chatImage" src={Fredchat} alt="Fred's chat app" />
          <div style={{ position: 'relative', width: '1500px' }}>
            <h2 className='h2'>Fred's realtime chat app 2.0</h2>
            <br />
            <p className="description">
              Second chat app I made to practice WebSocket protocol, This time I didn't use React or any other
              js framework. I used plain javascript, html and css. This one has
              the rooms already preset and it displays the user names that are
              connected to the current room, you just have to choose one and
              join to chat. I passed the instanciated socketio variable using a
              script tag in the html main file. It also has CORS set up to
              accept connections only from the deployed web itself. It is
              deployed to Heroku. <br /> Deployed App:{' '}
              <a href="https://fredschatapp.herokuapp.com/">Fred's chat app</a>{' '}
              |{' '}
              <a href="https://github.com/fedeprat/RealTimeChat">GitHub repo</a>
            </p>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
