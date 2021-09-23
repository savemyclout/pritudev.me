import React from 'react'
import reactLogo from './svgs/react.svg'
import gatsbyLogo from './svgs/gatsby.svg'
import nodeLogo from './svgs/nodejs.svg'
import instagram from './svgs/instagram.svg'
import github from './svgs/github.svg'
import discord from './svgs/discord.svg'
import twitter from './svgs/twitter.svg'
import youtbe from './svgs/youtube.svg'
import donate from './svgs/donate.svg'

const Footer = () => {
  return (
    <div id="footer">
      <br />
      <br />
      <h5>
        Found issue on this page?{' '}
        <span>
          <a href="https://github.com/pritudev/pritudev.me" target="_blank">
            Fix it on Github
          </a>
          <hr id="hr-footer" />
        </span>
      </h5>
      <h5>Copyright &copy; Prit HQ</h5>
      <h5>
        Created with
        <abbr title="Gatsby">
          <img
            style={{ cursor: 'pointer' }}
            id="gatsbylogo"
            src={gatsbyLogo}
            alt="gatsby"
          />
        </abbr>
        <abbr title="React Js">
          <img
            style={{ cursor: 'pointer' }}
            id="reactlogo"
            src={reactLogo}
            alt="react js"
          />
        </abbr>
        <abbr title="Node Js">
          <img
            style={{ cursor: 'pointer' }}
            id="nodelogo"
            src={nodeLogo}
            alt="node js"
          />
        </abbr>{' '}
        by{' '}
        <span>
          <a target="_blank" href="https://github.com/pritudev">
            prit dev
          </a>
        </span>
      </h5>
      <div id="icons">
        <abbr title="pritudev | Github">
          <a
            href="https://github.com/pritudev"
            target="_blank"
            id="github-icon"
          >
            <img src={github} alt="Github" />
          </a>
        </abbr>
        <abbr title="Pritudev | YouTube">
          <a href="https://youtube.com/pritu" target="_blank" id="youtube-icon">
            <img src={youtbe} alt="Youtube" />
          </a>
        </abbr>
        <abbr title="Pritudev | Discord">
          <a
            href="https://discord.io/prituhq"
            target="_blank"
            id="discord-icon"
          >
            <img src={discord} alt="Discord" />
          </a>
        </abbr>
        <abbr title="@PrituDevYt | Twitter">
          <a
            href="https://twitter.com/PrituDevYT"
            target="_blank"
            id="twitter-icon"
          >
            <img src={twitter} alt="Twitter" />
          </a>
        </abbr>

        <abbr title="_pritu_004_ | Instagram">
          <a
            href="https://instagram.com/_pritu_004_"
            target="_blank"
            id="insta-icon"
          >
            <img src={instagram} alt="Instagram" />
          </a>
        </abbr>
        <abbr title="Become a Patreon">
          <a
            style={{ marginBottom: '-4px' }}
            href="https://Patreon.com/pritu"
            target="_blank"
            id="ko-fi-icon"
          >
            <img
              style={{ marginBottom: '-5px' }}
              src={donate}
              alt="Become A Patreon"
            />
          </a>
        </abbr>
      </div>
      <hr id="hr-footer" />
      <h5>
        <a href="https://github.com/pritudev/pritudev.me" target="_blank">
          <svg
            style={{ marginBottom: '5.1px' }}
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="white"
            class="bi bi-code-square"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
          </svg>{' '}
          Contribute Now 😎
        </a>
        , It's Open Source!
      </h5>
    </div>
  )
}

export default Footer
