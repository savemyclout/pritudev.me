import React, { Fragment, useEffect, useState } from 'react'
import Wrapper from './Wrapper'
import { Link } from 'gatsby'
import styles from '../css/BlogPost.module.css'
import Image from 'gatsby-image'
import Layout from './Layout.js'
import About from './About.js'
import githubCat from './svgs/github-cat.svg'
import mentor from './svgs/mentor.svg'

const Showcase = ({ data }) => {
  const [followers, setFollowers] = useState(0)

  useEffect(() => {
    async function getGithubAPI() {
      const response = await fetch('https://api.github.com/users/pritudev')
      const data = await response.json()

      return data
    }

    getGithubAPI().then((data) => {
      setFollowers(data.followers)
    })
    const fb = document.getElementById('follow-btn')
    const fn = document.getElementById('followers-num')

    if (isNaN(fb)) {
      document.getElementById('follow-btn').innerText = ' '
    }
  }, [])
  return (
    <>
      <Wrapper>
        <div className="showcase">
          <div className="container">
            <h1
              style={{
                fontSize: '7em',
                paddingTop: '5rem',
              }}
            >
              Hi, my name is <span id="gradient-text">PRIT.</span>
            </h1>
            <div className="showcase_buttons" style={{ textAlign: 'center' }}>
              <Link
                rel="noopener"
                to="https://github.com/pritudev"
                target="_blank"
              >
                <button id="indigo-btn" to="https://github.com/pritudev">
                  <span id="follow-btn">
                    {' '}
                    <img
                      height="30px"
                      widht="30px"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAlFJREFUWEfVmLtKA0EUhg1iETD2ETtJbATFlHaxtLFSMAHB0sZOsPLSCGkkCj5BougrCNamWBMrQ6JdRDshEawk4pn9zcwwl911i9k0k90zc+afb8+cuaTG9L+hb0oZ6sRhMvZj6txZgSSsXNokOrX6JShhMBAelZ7gx9AP+VcRTJbAp3abRuJ5D1RixMAHe1Ccsh/ZvwzNStAlgcKnDUsmKEFdvUH/k0ydbkeIeZ5gMgViZP8lhPaZqUmlq8gEEyOQi41YYBYKS+RHBhA6BhXo3RKIvPV1dxSLMDhJFw/or0wyNEFnBWIN7jevBXKZxXXhedC6MZLV1Z/4YCuUTBJAsKJo82DiBILE7doyjfzq+Z3Kau1ESdBWP3aCtg5llbb6EQSO+0vdBvVVq7PY6zfZfhAdbs/PClpsBHX1RwKP/dm8QKXnPfr+vyn8uBhMuEBbErw/rAaKTZAb5cOYCDogEBLMn9omVGcPSw5+FDtq9wRqjpfhhO6W9wV4F+dbSpjpIou5fI5lg073RZi1cqNfgokRqPvsNIB8Li+NOFo0jsiJZw+dN56gmwKzjSERWjkrkUDuJsGPFUYu7p+879MSdF4glEPo9E6BXmFfhthDPZzKdIepoHZ532eKQbI5L5AbAcVktsGyT6Y8589eNutwN4ObB/lQFdZuI6m9m3FZIGBK+e8vb5EdpzEFAWpns9vuBXU5j49VtwRWeiwf7s2ob4UrPRaTMdiNN7VcP+KO2lmBEIZve/oqZqS3FnuurLISdrxH7bB2tJP9yPkw5brAHy6QY3VmdklZAAAAAElFTkSuQmCC"
                    />{' '}
                    {Number(followers)}
                  </span>{' '}
                  <span id="followers-num">GitHub followers</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <hr id="hr-body" />
        <About />
        {/* <br /> */}
      </Wrapper>
    </>
  )
}

export default Showcase
