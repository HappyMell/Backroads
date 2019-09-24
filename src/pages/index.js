import React from "react"
import {Link} from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"

export default () => (
  <Layout>
    <SimpleHero>
      <Banner 
      title="continue exploring" info="No matter what you decide, making your holiday a great one is our utmost priority"
>
        <Link to="/tours" className="btn-white">
          Explore Tours
          </Link>
        </Banner>
      </SimpleHero>
  </Layout>
)
