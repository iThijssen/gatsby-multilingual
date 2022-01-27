import * as React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <Layout>
    <Seo title="Deutsch" />
    <h1>Deutsch</h1>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/de">Deutsch</Link> <br />
      <Link to="/en">English</Link> <br />
      <Link to="/cz">Tschechisch</Link>
    </p>
  </Layout>
)

export default IndexPage
