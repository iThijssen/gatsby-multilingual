import * as React from "react"

import { Link } from "gatsby"
import { PAGES } from "./menu"

export const LANGUAGES = [
  {
    code: "en",
    name: "English",
    pages: [
      { path: PAGES[0], title: "Page 1" },
      { path: PAGES[1], title: "Page 2" },
      { path: PAGES[2], title: "Page 3" },
      { path: PAGES[3], title: "Parent" },
      { path: PAGES[4], title: "Child 1" },
      { path: PAGES[5], title: "Child 2" },
    ],
  },
  {
    code: "de",
    name: "Deutsch",
    pages: [
      { path: PAGES[0], title: "Seite 1" },
      { path: PAGES[1], title: "Seite 2" },
      { path: PAGES[2], title: "Seite 3" },
      { path: PAGES[3], title: "Elternteil" },
      { path: PAGES[4], title: "Kind 1" },
      { path: PAGES[5], title: "Kind 2" },
    ],
  },
  {
    code: "cz",
    name: "čeština",
    pages: [
      { path: PAGES[0], title: "strana 1" },
      { path: PAGES[1], title: "strana 2" },
      { path: PAGES[2], title: "strana 3" },
      { path: PAGES[3], title: "rodiče" },
      { path: PAGES[4], title: "dítě 1" },
      { path: PAGES[5], title: "dítě 2" },
    ],
  },
]

const LanguageSwitch = ({ currentLang, currentPath }) => (
  <div
    style={{
      width: "100%",
      textAlign: "right",
      padding: `1rem`,
    }}
  >
    <nav>
      {LANGUAGES.map((lang, index) => (
        <Link
          key={index}
          to={`/${lang.code}${
            currentPath.includes("/")
              ? currentPath.slice(currentPath.indexOf("/"))
              : ""
          }`}
          style={{
            paddingLeft: `1rem`,
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
