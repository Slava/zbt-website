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
import KarenImg from '../static/karen-photo.jpg';
import SfImg from '../static/sf-alumn-2018.jpeg';
import ArchivesImg from '../static/archives.png';
import GenImg from '../static/geneology.png';

export default function (props) {
  const cardsStyle = {display: 'flex', justifyContent: 'center', flexWrap: 'wrap'};
  return (
    <DocumentTitle title={"Alumni | " + config.siteTitle}>
      <div>
        <Splash id="alumni" imageUrl={CoverImg}/>
        <div className="contents typography" style={{marginBottom: '3em'}}>
          <Section title="Alumni">
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" style={{float: 'right', padding: '1em', paddingLeft: '2em'}}>
              <input type="hidden" name="cmd" value="_s-xclick"/>
              <input type="hidden" name="hosted_button_id" value="TNHHZFFUVRH38"/>
              <p style={{fontSize: '0.7em', margin: '0 auto', textAlign: 'center'}}>Donate with</p>
              <input type="image" style={{maxHeight: 70, margin: '0 auto', display: 'block'}} src="https://getflywheel.com/wp-content/uploads/2015/10/paypal-donate-button-large-1100x500.png"  name="submit" alt="Donate with Paypal"/>
              <img alt=""  src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
            </form>
            <p style={{textAlign: 'justify'}}>
              Once you move beyond your undergrad experience as a zebe, the bonds of brotherhood remain just as strong as ever. While our lives and careers lead us to a variety of locations and situations, MIT ZBT continues to thrive and continue the excellence that we were all a part of. As fellow alumni, we encourage you to come back to the house for alumni weekend, tech reunion, or whenever you're in the area. We also encourage you to give back to help ensure the continued success of the house (you can click on the "donate" button).
            </p>
          </Section>
          <Section title="Alumni Weekend">
            <p>
              The 2018 Alumni Weekend is from October 19-20 at the ZBT house.
            </p>
            <p>
              The undergraduates host an alumni weekend every year, usually during the spring term. This has always been a great opportunity for alumni to connect with one another and current brothers. Look out for an email for the next alumni weekend or email zbt-president@mit.edu.
            </p>
          </Section>
          <Section title="Alumni Tools">
            <div style={cardsStyle}>
              <LinkCard img={ArchivesImg} href="https://zbt.mit.edu/archives/">An archive of the brotherhood composites dating back to 1960s.</LinkCard>
              <LinkCard img={GenImg} href="https://zbt.mit.edu/gen/">An interactive map of all big-little lines recorded since the Alpha Gamma class.</LinkCard>
            </div>
          </Section>
          <Section title="Tech Reunion">
            <p>ZBT hosts an open house every year during MIT's Tech Reunion. All alumni are welcomed and encouraged to stop by. You can email the trustees for more details.</p>
          </Section>
        </div>
        <div className="cards typography" style={cardsStyle}>
          <Card img={AwardImg}>MIT ZBT is proud to recieve the <a href="https://alum.mit.edu/communities/mit-students/weedon-award-grant" style={{whiteSpace: 'nowrap'}}>D. Reid Weedon Jr. Award</a> for the second year in a row: 2016-2017</Card>
          <Card img={SfImg}>ZBT Alumni reunion in San Francisco Bay Area. Summer 2018.</Card>
          <Card img={KarenImg}>Our long standing chef Karen recently retired and to say a big thank you to her, we invited alumni to contribute to her <a href="https://www.gofundme.com/karengift" style={{whiteSpace: 'nowrap'}}>parting gift</a>.</Card>
        </div>
      </div>
    </DocumentTitle>
  );
}

function Section({title, children}) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
      <div style={{clear: 'both'}}/>
    </div>
  );
}

function Card({img, children}) {
  const style = {width: 350, height: 200, backgroundImage: `url(${prefixLink(img)})`, backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: 10};
  return (
    <div className="sidebar-img" style={{margin: '1em'}}>
      <a href={prefixLink(img)}><div style={style}/></a>
      <p style={{textAlign: 'center', marginTop: 0, fontSize: '0.8em', maxWidth: 350 }}>{children}</p>
    </div>
  );
}

function LinkCard({href, img, children}) {
  const style = {width: 350, height: 200, backgroundImage: `url(${prefixLink(img)})`, backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: 10};
  return (
    <div className="sidebar-img" style={{margin: '1em', border: 'solid 1px blue'}}>
      <a href={href} target="_blank">
        <div style={style}/>
        <p style={{textAlign: 'center', marginTop: 0, fontSize: '0.8em', maxWidth: 350, color: '#333', padding: 5, boxSizing: 'border-box' }}>{children}</p>
      </a>
    </div>
  );
}
