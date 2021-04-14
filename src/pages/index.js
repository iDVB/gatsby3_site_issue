import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/Layout'

const IndexPage = () => {
  return (
    <Layout>
      <Link to="/page2">Go to PAGE 2</Link>
    </Layout>
  )
}

export default IndexPage
