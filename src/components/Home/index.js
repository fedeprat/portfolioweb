import './index.scss'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'

export default function Home() {
  return (
    <>
      <div className="container home-page">

        <div className="text-zone">
          <h1 className='h1'>
            Hi, I'm Fred. <br /> Fullstack developer
          </h1>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>

        <div className="containerMigration">
          <h1 className='h1'>
            I deployed this web and its features <br />
            to{' '}
            <h1 style={{ display: 'inline', color: '#fee556' }} className="h1">
              Amazon Web Services.
            </h1>{' '}
          </h1>
          <Link to="/awsinfo" className="boton">
            ARCHITECTURE INFO
          </Link>
          <h2 className="h2">
            For practice purposes right now as I get <br />
            some time I am migrating all of my <br /> projects to AWS as well
          </h2>
        </div>
        
      </div>

      <Loader type="pacman" />
    </>
  )
}

/* <span className={letterClass}>H</span>
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
/> */
