import Loader from 'react-loaders'
import './index.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import fullstack from '../assets/imagesProjects/fullstack.png'

export default function Contact() {
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
  return (
    <>
      <div className="container contact-page">

        <div className="containerForm">
          <h1>Contact Me</h1>
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
        <div className='imagen'>
          <img src={fullstack} alt="fullstack development" />
        </div>
        
      </div>
      <Loader type="pacman" />
    </>
  )
}
