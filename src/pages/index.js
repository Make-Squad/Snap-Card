import React from 'react'
import { Link } from 'gatsby'
import Demo from './demo'
import Layout from '../components/layout'
import Image from '../components/image'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch('/.netlify/functions/hello')
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>
          <button onClick={this.handleClick}>
            {loading ? 'Loading...' : 'Call Lambda'}
          </button>
          <br />
          <span>{msg}</span>
        </p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
          <Image />
        </div>
        <Link to="/demo/">Go to Demo</Link>
        <div>
          <Link to="/video/">Go to Video</Link>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
