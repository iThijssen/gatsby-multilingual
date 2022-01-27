import * as React from "react"

import { LANGUAGES } from "./language-switch"
import { Link } from "gatsby"

export const PAGES = ["page-1", "page-2", "page-3"]

const Menu = ({ currentLang, currentPage }) => (
  <div
    style={{
      width: "100%",
      textAlign: "right",
      padding: `0 1rem`,
    }}
  >
    <nav>
      {PAGES.map((page, index) => (
        <Link
          key={index}
          to={`/${currentLang}/${page}`}
          style={{
            padding: `0 1rem`,
            color: currentPage === page ? "#d85f2a" : "#663399",
          }}
        >
          {
            LANGUAGES.filter(language => language.code === currentLang)
              .map(language => language.pages)
              .map(page => page[index].title)[0]
          }
        </Link>
      ))}
    </nav>
  </div>
)

export default Menu
