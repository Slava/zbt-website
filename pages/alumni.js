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

import CoverImg from '../static/alumni-cover.jpg';

export default function (props) {
  return (
      <DocumentTitle title={"Alumni | " + config.siteTitle}>
        <div>
          <Splash id="alumni" imageUrl={CoverImg}/>
          <div className="contents typography">
            <h1>Alumni</h1>
            <p>
              Once you move beyond your undergrad experience as a zebe, the bonds of brotherhood remain just as strong as ever. While our lives and careers lead us to a variety of locations and situations, MIT ZBT continues to thrive and continue the excellence that we were all a part of. As fellow alumni, we encourage you to come back to the house for alumni weekend, tech reunion, or whenever you're in the area. We also encourage you to give back to help ensure the continued success of the house (you can click on the "donate" button on the left of this page).
            </p>
<h2>Alumni Weekend</h2>
<p>
The undergraduates host an alumni weekend every year, usually during the spring term. This has always been a great opportunity for alumni to connect with one another and current brothers. Look out for an email for the next alumni weekend or email zbt-president@mit.edu.

</p>
<h2>Tech Reunion</h2>
<p>ZBT hosts an open house every year during MIT's Tech Reunion. All alumni are welcomed and encouraged to stop by. You can email the trustees for more details.
</p>
          </div>
        </div>
      </DocumentTitle>
  );
}
