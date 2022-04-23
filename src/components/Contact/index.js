import Loader from 'react-loaders'
import AnimatedLetters from '../animatedLetters'
import './index.scss'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  function sendEmail(e) {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_30o9jq8',
        'template_1aham4q',
        refForm.current,
        'tXaJ-zLieMslAgrAn'
      )
      .then(
        () => {
          alert('Message successfully sent!')
        },
        (error) => {
          console.log(error)
        }
      )
  }

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3300)
  }, [])
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              index={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I am looking for my first fulltime job. If you think I can add value
            to your team don't hesitate to contact me!
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="subject"
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
