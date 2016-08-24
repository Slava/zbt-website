import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

import { prefixLink } from '../utils/urls.js'

import {
  Row,
  Splash,
  Split,
  ImgGallery,
} from './_sharedComponents'

export default function (props) {
  return (
      <DocumentTitle title={"Alumni | " + config.siteTitle}>
        <div>
          <Splash id="alumni" imageUrl={CoverImg}/>
          <div className="contents typography">
            <h1>Alumni</h1>
          </div>
        </div>
      </DocumentTitle>
  );
}
