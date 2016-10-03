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
import AwardImg from '../static/WeedonAward.jpg';

export default function (props) {
  return (
      <DocumentTitle title={"Alumni | " + config.siteTitle}>
        <div>
          <Splash id="alumni" imageUrl={CoverImg}/>
          <div className="contents typography">
            <h1>Alumni</h1>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" style={{float: 'right', padding: '1em', paddingLeft: '2em'}}>
      <input type="hidden" name="cmd" value="_s-xclick"/>
      <input type="hidden" name="hosted_button_id" value="TNHHZFFUVRH38"/>
      <p style={{fontSize: '0.7em', margin: '0 auto', textAlign: 'center'}}>Donate with</p>
      <input type="image" style={{maxHeight: 70, margin: '0 auto', display: 'block'}} src="https://getflywheel.com/wp-content/uploads/2015/10/paypal-donate-button-large-1100x500.png" border="0" name="submit" alt="Donate with Paypal"/>
      <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
      </form>
        <p style={{textAlign: 'justify'}}>
              Once you move beyond your undergrad experience as a zebe, the bonds of brotherhood remain just as strong as ever. While our lives and careers lead us to a variety of locations and situations, MIT ZBT continues to thrive and continue the excellence that we were all a part of. As fellow alumni, we encourage you to come back to the house for alumni weekend, tech reunion, or whenever you're in the area. We also encourage you to give back to help ensure the continued success of the house (you can click on the "donate" button on the left of this page).
            </p>
<h2>Alumni Weekend</h2>
<p>
The 2016 Alumni Weekend is from October 21-23 at the ZBT house.
</p>
<p>
The undergraduates host an alumni weekend every year, usually during the spring term. This has always been a great opportunity for alumni to connect with one another and current brothers. Look out for an email for the next alumni weekend or email zbt-president@mit.edu.
</p>
<p>
Our long standing chef Karen recently retired and to say a big thank you to her, we invite alumni to contribute to her <a href="https://www.gofundme.com/karengift">parting gift</a>
</p>
<h2>Tech Reunion</h2>
<p>ZBT hosts an open house every year during MIT's Tech Reunion. All alumni are welcomed and encouraged to stop by. You can email the trustees for more details.
</p>
      <div>
      <img src={prefixLink(AwardImg)} style={{ maxWidth: 350, margin: '2em auto 0 auto'}}/>
      <p style={{textAlign: 'center', marginTop: 0, fontSize: '0.8em', maxWidth: 350 }}>MIT ZBT is proud to recieve the <a href="http://awards.mit.edu/weedon">D. Reid Weedon Jr. Award</a> for the second year in a row.</p>
      </div>
      </div>
        </div>
      </DocumentTitle>
  );
}
