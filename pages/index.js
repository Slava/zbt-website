import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import {
  Row,
  Splash,
} from './_sharedComponents'

import '../css/reset.css';
import '../css/fonts.css';
import '../css/styles.less';

import CoverImg from '../static/homepage.jpg';
import ExcellenceImg from '../static/excellence.jpg';
import RushImg from '../static/rush.jpg';
import PartyImg from '../static/party.jpg';

export default class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <Splash id="homepage" additionalStyles={['linear-gradient(rgba(0, 86, 180, 0.45), rgba(0, 86, 180, 0.45))']} imageUrl={CoverImg}>
            Zeta Beta Tau <br/>
            Xi Chapter <br/>
            <Link className="call-to-action" to={prefixLink("./rush/")}>
              <span>
                RUSH SCHEDULE
              </span>
            </Link>
          </Splash>
            <div className="contents">
              <div className="big-letters typography">
                <p>ZBT has existed at MIT for over 100 years, and spent the last 50 of those nestled away at our home in Brookline. We are a brotherhood of over 50 members from across the United States and various foreign countries, representing a diverse array of majors at MIT and a broad range of on campus activities.</p>
              </div>
            </div>
            <hr/>
            <Row id="excellence" imageUrl={ExcellenceImg}>
              <h2>The Powerhouse of Excellence</h2>
              <p>Fraternity is much more than a place to live or a social outlet for our brothers during their four years at MIT.</p>
              <p>We remain dedicated to our reasons for being here, earning consistently high GPAs, doing over 1000 hours of community service, and raising over $1500 for Children's Miracle Network.</p>
              <p><Link to={prefixLink("/history/")}>Read more on the history of Xi Chapter.</Link></p>
            </Row>
            <Row flipped id="rush" imageUrl={RushImg}>
              <h2>Rush ZBT!</h2>
              <p>Rush is a week-long period at the start of the school year at MIT, when freshmen get to meet us and see all of the other fraternities and living options available to them.</p>
              <p>We have all sorts of activities and mountains of FREE FOOD available for Rush, giving the freshmen the chance to really get to know us and have a fun time doing so.</p>
              <p><Link to={prefixLink("/rush/")}>Checkout the rush page for details.</Link></p>
            </Row>
            <Row id="party" imageUrl={PartyImg}>
              <h2>Come get to know us!</h2>
              <p>No matter if you go to MIT, Harvard, Wellesley or BU - we welcome new friends to our house.</p>
              <p>Come to events hosted at our house during the school year. We host traditional dance parties open to everyone, as well as classy invite-only Karaoke and desserts evenings called Soiree, and semi-annual formals for brothers and their dates.</p>
              <p><Link to="https://www.facebook.com/groups/224105661000485/">Join the "ZBT friends" Facebook group</Link> to stay in touch and learn about the upcoming parties.</p>
            </Row>
        </div>
      </DocumentTitle>
    );
  }
}
