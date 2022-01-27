import * as React from "react"

import LanguageSwitch from "./nav/language-switch"
import { Link } from "gatsby"

const Header = ({ siteTitle, currentLang, currentPage }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to={`/${currentLang}`}
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <LanguageSwitch currentLang={currentLang} currentPage={currentPage} />
  </header>
)

export default Header
