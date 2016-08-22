import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import {
  Row,
  Splash,
  Split,
} from './_sharedComponents'

import { prefixLink } from '../utils/urls.js'
import CoverImg from '../static/events-cover.jpg';

export default function (props) {
  return (
      <DocumentTitle title={"Events | " + config.siteTitle}>
        <Splash id="events" imageUrl={CoverImg}></Splash>
      </DocumentTitle>
  );
}
