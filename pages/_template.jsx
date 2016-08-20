import React from 'react'
import { Link } from 'react-router'

import { prefixLink } from '../utils/urls.js'
import '../css/markdown-styles'

import LogoImg from '../static/zbt-logo.png';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <header>
          <div className="logo">
            <span className="logo-pic">
              <Link to={prefixLink("/")}>
                <span className="logo-span" style={{backgroundImage: `url("${prefixLink(LogoImg)}")`}}></span>
              </Link>
            </span>
          </div>
          <div className="nav">
            <div className="contents flex">
              <span className="left flex-cell flex">
                <Link className="flex-cell" to={prefixLink("/")}>HOME</Link>
                <Link className="flex-cell" to={prefixLink("/rush/")}>RUSH</Link>
                <Link className="flex-cell" to={prefixLink("/brothers/")}>BROTHERS</Link>
              </span>
              <span className="right flex-cell flex">
                <Link className="flex-cell" to={prefixLink("/house/")}>HOUSE</Link>
                <Link className="flex-cell" to={prefixLink("/history/")}>HISTORY</Link>
                <Link className="flex-cell" to={prefixLink("/alumni/")}>ALUMNI</Link>
              </span>
            </div>
          </div>
        </header>
        <div className="page-container">
        {this.props.children}
        <footer>
          <span>
            <div> MIT Zeta Beta Tau Xi Chapter 2016 </div>
            <div> <a href="mailto:slv@mit.edu">Contact the tech-chair</a> </div>
          </span>
        </footer>
        </div>
      </div>
    )
  },
})
