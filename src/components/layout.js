/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import "./layout.css"

import * as React from "react"

import { graphql, useStaticQuery } from "gatsby"

import Header from "./header"
import Menu from "./nav/menu"
import PropTypes from "prop-types"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  let currentLang = ""
  let currentPage = ""
  if (typeof window !== `undefined`) {
    const pathR = window.location.pathname.split("/")
    currentLang = pathR[1] === "" ? "de" : pathR[1]
    currentPage = pathR.pop()
  }

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        currentLang={currentLang}
        currentPage={currentPage}
      />
      <Menu currentLang={currentLang} currentPage={currentPage} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
