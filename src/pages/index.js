import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Unstyled is a multimedia agency creating audio, visual and physical productions.</h1>

    <p>We make podcasts, websites, books, events and much more.</p>
    <p>Challenge us! We’re a creative group of people who like to help people make inspiring products that engage with a range of audiences, using our skills as relatable leaders in tech and education.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
