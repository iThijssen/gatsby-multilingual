import * as React from "react"

import { LANGUAGES } from "./language-switch"
import { Link } from "gatsby"
import { PAGES } from "./menu"

const MenuItem = ({ currentLang, currentSlug, parentSlug }) => {
  const [showSubmenu, setShowSubmenu] = React.useState(false)
  const extractPageAfterLanguage = (page, currentLang) =>
    LANGUAGES.filter(language => language.code === currentLang)
      .map(language => language.pages)[0]
      .filter(p => p.path === page)[0]
  const hasSubmenu = pageItem =>
    PAGES.filter(p => p.includes(`${pageItem}/`)).length > 0
  return (
    <Link
      to={`/${currentLang}/${
        extractPageAfterLanguage(parentSlug, currentLang).path
      }`}
      style={{
        color: currentSlug === parentSlug ? "#d85f2a" : "#000",
        marginLeft: "1rem",
      }}
      className="parent-page"
      onMouseEnter={hasSubmenu(parentSlug) ? () => setShowSubmenu(true) : null}
    >
      {extractPageAfterLanguage(parentSlug, currentLang).title}
      {showSubmenu &&
        PAGES.filter(p => p.includes(`${parentSlug}/`)).map((page, index) => (
          <Link
            key={index}
            to={`/${currentLang}/${page}`}
            style={{
              display: "block",
              color:
                currentSlug === page.split("/").pop() ? "#d85f2a" : "#663399",
            }}
            className="child-page"
          >
            {extractPageAfterLanguage(page, currentLang).title}
          </Link>
        ))}
    </Link>
  )
}

export default MenuItem
