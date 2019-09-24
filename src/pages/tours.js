import React, { Component } from "react"
import Layout from "../components/Layout"
import Button from "../examples/Button"

export default class tours extends Component {
  render() {
    return (
      <Layout>
        <div>
          Hello from tours page!
          <Button>first button</Button>
          <Button>second button</Button>
        </div>
      </Layout>
    )
  }
}
