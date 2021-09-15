import React, { Fragment } from 'react'
import Wrapper from './Wrapper'
import { Link } from 'gatsby'
import styles from '../css/BlogPost.module.scss'
import Image from 'gatsby-image'
import Layout from './Layout'

const Courses = () => {
  return (
    <Fragment>
      <div className="container post-container">
        <div className="post">
          <div className="post-content">
            <Image
              src="https://images.unsplash.com/photo-1628191081071-a2b761bf21d9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="html course"
              className="image"
            />

            <h2>
              <Link
                to="https://www.youtube.com/watch?v=gVD0EVFQdoA&t"
                target="_blank"
                className="link"
              >
                🔥🔥 Full HTML Course For Absolute Beginners Without Paying a
                single dollar!
              </Link>
            </h2>
            <p>
              Free yet Amazing HTML 5 Course For absolute Beginners Anyone can
              join and learn HTML Without Giving A single Doller!
            </p>

            <Link
              to="https://www.youtube.com/watch?v=gVD0EVFQdoA&t"
              target="_blank"
              className="link-read-more"
            >
              Check Out on YouTube For Free!
            </Link>
          </div>
        </div>
        <div className="post">
          <div className="post-content">
            <Image
              src="https://images.unsplash.com/photo-1628191081071-a2b761bf21d9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="html course"
              className="image"
            />

            <h2>
              <Link
                to="https://www.youtube.com/watch?v=hGs3nQI1Tbg&t"
                target="_blank"
                className="link"
              >
                🐱‍🏍 Create A Basic Web Server Using Node Js & Express Js In
                2021!
              </Link>
            </h2>
            <p>
              Creating a real server is very complex thing but creating a web
              server is very easy thing in 2021 cuz we have some framework like
              express and soo many other..
            </p>

            <Link
              to="https://www.youtube.com/watch?v=hGs3nQI1Tbg&t"
              target="_blank"
              className="link-read-more"
            >
              Check Out on YouTube For Free!
            </Link>
          </div>
        </div>
        <div className="post">
          <div className="post-content">
            <Image
              src="https://images.unsplash.com/photo-1628191081071-a2b761bf21d9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="html course"
              className="image"
            />

            <h2>
              <Link
                to="https://www.youtube.com/watch?v=hGs3nQI1Tbg&t"
                target="_blank"
                className="link"
              >
                🌙 Create A simple Theme Toggler in youur website using
                Javascript Easily.
              </Link>
            </h2>
            <p>
              Now we can create a simple dark to light theme and light to dark
              theme toggler in our website using few lines of code in javasript.
            </p>

            <Link
              to="https://www.youtube.com/watch?v=hTsqeA-7pEo&t"
              target="_blank"
              className="link-read-more"
            >
              Check Out on YouTube For Free!
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Courses
