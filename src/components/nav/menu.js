import * as React from "react"

import MenuItem from "./menu-item"

export const PAGES = [
  "page-1",
  "page-2",
  "page-3",
  "parent",
  "parent/child-1",
  "parent/child-2",
]

const Menu = ({ currentLang, currentSlug }) => (
  <div
    style={{
      width: "100%",
      textAlign: "right",
      padding: `1rem`,
      height: "5rem"
    }}
  >
    <nav>
      {PAGES.filter(p => !p.includes("/")).map((page, index) => (
        <MenuItem
          key={index}
          currentLang={currentLang}
          currentSlug={currentSlug}
          parentSlug={page}
        />
      ))}
    </nav>
  </div>
)

export default Menu
