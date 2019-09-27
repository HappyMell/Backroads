import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Images from "../examples/Images"

const blog = () => {
  return (
    <Layout>
      Hello from Blog page!
      <Link to="/">Home</Link>
      <Images />
    </Layout>
  )
}

export default blog
