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
import DinnerImg from '../static/dinner.jpg';
import FormalImg from '../static/formal.jpg';
import GotbImg from '../static/gotb.jpg';

export default function (props) {
  return (
      <DocumentTitle title={"Events | " + config.siteTitle}>
        <div>
          <Splash id="events" imageUrl={CoverImg}></Splash>
            <div className="contents typography">
      <div className="important full-size">If you are a freshman or a sophomore looking to rush ZBT, make sure to look at the <Link to={prefixLink('/rush/')}>rush page</Link> for fall events and activites.</div>
              <h2>Parties</h2>
              <p>Everyone needs a break from work, and being MIT students we know well how difficult the work can be. ZBT house is an often host of social events and parties, an opportunity for brothers to hang out with friends, relax and to have a good time.</p>
              <p>ZBT throws a dozen of big parties open to anyone in MIT community and friends over the duration of the school year. It is a great place to get to know the ZBT community, make new friends or show off your latest dance moves.</p>
      </div>
      <Row flipped id="formals" imageUrl={FormalImg}>
              <h2>Formal Events</h2>
              <p>Every semester brothers have an opportunity to bring a date to a semi-annual formal event. Events range from a nice special dinner to a boat cruise on the Charles River.</p>
              <p>Another formal event is Soiree. It is an invite-only evening at the house with fancy desserts, drinks and a karaoke night to follow.</p>
      </Row>
              <Row id="dinners" imageUrl={DinnerImg}>
                <h2>Dinners</h2>
                <p>We invite our friends to dinners at the house on weekdays. Let us delight you with a great company and a high quality dinner. Researches has shown that dinners of ribs and teriyaki salmon improve friendships and strengthen the bond by 50% each time.</p>
              </Row>
      <Row id="gotb" flipped imageUrl={GotbImg}>
      <h2>Get On The Ball</h2>
      <p>Get On The Ball is a philantropy event that ZBT brothers organize every year in order to raise donations for various non-profit organisations.</p>
      <p>During MIT's Campus Preview Weekend, our campus is filled with prospective students and their parents.  Get on the Ball spreads awareness about the work of the Boston Children’s Hospital by asking students and visitors to sign a giant, rainbow-colored ball.  Our sponsors pledge to donate a certain amount for every signature we collect or a lump sum to support the event.  We show our appreciation for our sponsors by displaying their logos on the physical ball that we roll around for people to sign, and on Twitter, Facebook, and posters.</p>
      </Row>
        </div>
      </DocumentTitle>
  );
}
