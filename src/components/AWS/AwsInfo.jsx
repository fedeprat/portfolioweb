import Loader from 'react-loaders'
import './awsinfo.scss'
import schema from '../assets/imagesProjects/schema.png'
import awsFree from '../assets/imagesProjects/awsFree.png'
import chatApp from '../assets/imagesProjects/chatapp.png'

export default function AwsInfo() {
  return (
    <>
      <div className="container" style={{ height: '100%' }}>
        <div>
          <h1 id="animatedLetters" className="h1">
            AWS Architecture info
          </h1>
        </div>

        <div className="containerPicante">
          <div className="papurri">
            <h2 className="h2" style={{ marginBottom: '40px' }}>
              Architecture
            </h2>
            <h2 className="h2">
              This portfolio website is a S3 bucket that anyone can consume
              through the subdomain{' '}
              <h2
                className="h2"
                style={{ display: 'inline', color: '#ffd700' }}
              >
                app.fedeprat.com
              </h2>
              . <br />
              All of my projects are being deployed to AWS currently, all being
              accessible through a subdomain of{' '}
              <h2
                className="h2"
                style={{ display: 'inline', color: '#ffd700' }}
              >
                {' '}
                fedeprat.com{' '}
              </h2>
              <br /> i.e{' '}
              <h2
                className="h2"
                style={{ display: 'inline', color: '#ffd700' }}
              >
                movies-database.fedeprat.com{' '}
              </h2>{' '}
              is one of them
            </h2>
          </div>

          <div>
            <h1 className="h2" style={{ marginLeft: '80px' }}>
              Services used so far
            </h1>
            <img src={schema} alt="schema" />
          </div>
        </div>

        <div style={{ width: '100%', height: '150px' }}>
          a <br /> a
        </div>

        <div className="containerBudget">
          <div>
            <img src={awsFree} alt="aws free tier usage" />
          </div>
          <div className="budget">
            <h2 className="h2" style={{ marginBottom: '10px' }}>
              Budget management
            </h2>
            <h2 className="h2">
              I've set a budget alert limit to the whole account as well as
              individual budget limits for each subdomain. I've also set up an
              alert to the forecasted use, so if AWS calculates that the current
              use rate will lead to exceeding the limit I will notice before it
              actually happens.{' '}
            </h2>
          </div>
        </div>

        <div className="nextcontainer">
          <h2 id="whatsnext" className="h2">
            Chat Apps <br />
            Currently I am migrating my chat apps. I am going to use a lambda
            function along with a WebSocket ApiGateway for the back-end
            connection
          </h2>
          <div className='imagenNext'>
            <h2 className="h2" style={{marginLeft: "65px"}}>
              This is the architecture I am working on
            </h2>
            <img src={chatApp} alt="chatApp diagram" />
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
