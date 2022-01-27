import * as React from "react"

import { Link } from "gatsby"
import { PAGES } from "./menu"

export const LANGUAGES = [
  {
    code: "en",
    name: "English",
    pages: [
      { slug: PAGES[0], title: "Page 1" },
      { slug: PAGES[1], title: "Page 2" },
      { slug: PAGES[2], title: "Page 3" },
    ],
  },
  {
    code: "de",
    name: "Deutsch",
    pages: [
      { slug: PAGES[0], title: "Seite 1" },
      { slug: PAGES[1], title: "Seite 2" },
      { slug: PAGES[2], title: "Seite 3" },
    ],
  },
  {
    code: "cz",
    name: "čeština",
    pages: [
      { slug: PAGES[0], title: "strana 1" },
      { slug: PAGES[1], title: "strana 2" },
      { slug: PAGES[2], title: "strana 3" },
    ],
  },
]

const LanguageSwitch = ({ currentLang, currentPage }) => (
  <div
    style={{
      width: "100%",
      textAlign: "right",
      padding: `1rem`,
    }}
  >
    <nav>
      {console.log(currentLang, currentPage)}
      {LANGUAGES.map((lang, index) => (
        <Link
          key={index}
          to={
            currentLang === currentPage
              ? `/${lang.code}`
              : `/${lang.code}/${currentPage}`
          }
          style={{
            padding: `1rem`,
            color: currentLang === lang.code ? "#d85f2a" : "#ffae1d",
          }}
        >
          {lang.name}
        </Link>
      ))}
    </nav>
  </div>
)

export default LanguageSwitch
