import React from "react"
import PropTypes from "prop-types"
import GlobalStyles from '../styles/global';

const Layout = ({ children }) => {
  return (
    <>
        <GlobalStyles/>
        <header>
          cabecalho
        </header>
        <main>
          {children}
        </main>
        <footer>
          rodape
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
