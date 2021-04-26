import React from 'react'
import { Link } from 'gatsby'

import { Hero } from 'react-components'
import Layout from '../components/Layout/Layout'

const Culture = () => {
  return (
    <Layout>
      <Link to="/">Go to HOME</Link>
      <Hero />
    </Layout>
  )
}

export default Culture
