import React from 'react'
import { Link, browserHistory } from 'react-router'

import { prefixLink } from '../utils/urls.js'
import { Dropdown } from './_sharedComponents';
import '../css/markdown-styles'

import '../analytics.js';

import LogoImg from '../static/zbt-logo.png';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div id="zbt-root">
        <header>
          <div className="logo">
            <span className="logo-pic">
              <Link to={prefixLink("/")}>
                <span className="logo-span" style={{backgroundImage: `url("${prefixLink(LogoImg)}")`}}></span>
              </Link>
            </span>
          </div>
          <Nav/>
        </header>
        <div className="page-container">
        {this.props.children}
        <footer className="flex">
          <span>
            <div> MIT Zeta Beta Tau Xi Chapter 2016 </div>
            <div> Photography by <a href="https://www.facebook.com/JohnWChow">John Chow</a> </div>
            <div> Webdev by <a href="https://github.com/Slava">Slava Kim</a> </div>
            <div> <a href="mailto:zbt-webmaster@mit.edu">Contact the tech-chair</a> </div>
          </span>
        </footer>
        </div>
      </div>
    )
  },
})

function Nav() {
  const links = [
    'rush',
    'events',
    'brothers',
    'house',
    'history',
    'alumni',
  ];

  const linkify = (x) => <Link key={x} className="flex-cell" to={prefixLink(`/${x}/`)}>{x.toUpperCase()}</Link>;
  const leftLinks = links.slice(0, 3).map(linkify);
  const rightLinks = links.slice(3, 6).map(linkify);

  const navigate = (route) => {
    if (route === 'HOME') {
      browserHistory.push('/');
    } else {
      browserHistory.push(prefixLink(route.toLowerCase() + "/"));
    }
  };

  const dropdownList = ['home', ...links].map(x => x.toUpperCase());

  return (
    <div className="nav">
      <div className="big-nav contents flex">
        <span className="left flex-cell flex">
          {leftLinks}
        </span>
        <span className="right flex-cell flex">
          {rightLinks}
        </span>
      </div>
      <div className="small-nav contents">
        <Dropdown list={dropdownList} selected={"GO TO PAGE"} onSelected={navigate}/>
      </div>
    </div>
  );
}
