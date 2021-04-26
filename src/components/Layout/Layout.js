import React from 'react'
import { CookieBanner } from 'react-components'
import styled from 'styled-components'

const Layout = ({ children }) => {
  return (
    <Page>
      <Main>{children}</Main>
      <CookieBanner />
    </Page>
  )
}

const Page = styled.div`
  position: relative;
  margin: 0;
  background: white;
  transition: background 300ms ease-in-out;
`

const Main = styled.main`
  margin: 0;
  padding: 0;
  transition: background 300ms ease-out, color 300ms ease-out;
`

export default Layout
