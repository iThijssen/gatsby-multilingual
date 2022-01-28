import * as React from "react"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const DeParent = () => (
  <Layout>
    <Seo title="Deutsch" />
    <h1>Deutsch Elternteil</h1>
    <StaticImage
      src="../../../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

export default DeParent