import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import ImageGallery from 'react-image-gallery'

import {
  Row,
  Splash,
} from './_sharedComponents'

import { prefixLink } from '../utils/urls.js'
import CoverImg from '../static/rush-cover.jpg';

import '../node_modules/react-image-gallery/build/image-gallery.css';

import RushImg1 from '../static/rush-photo-1.jpg';
import RushImg2 from '../static/rush-photo-2.jpg';
import RushImg3 from '../static/rush-photo-3.jpg';
import RushImg4 from '../static/rush-photo-4.jpg';
import RushImg5 from '../static/rush-photo-5.jpg';
import RushImg6 from '../static/rush-photo-6.jpg';

import RushImg1Thumb from '../static/rush-photo-1.thumb.jpg';
import RushImg2Thumb from '../static/rush-photo-2.thumb.jpg';
import RushImg3Thumb from '../static/rush-photo-3.thumb.jpg';
import RushImg4Thumb from '../static/rush-photo-4.thumb.jpg';
import RushImg5Thumb from '../static/rush-photo-5.thumb.jpg';
import RushImg6Thumb from '../static/rush-photo-6.thumb.jpg';

const thumbs = [RushImg1Thumb, RushImg2Thumb, RushImg3Thumb, RushImg4Thumb, RushImg5Thumb, RushImg6Thumb];
const rushPhotos = [RushImg1, RushImg2, RushImg3, RushImg4, RushImg5, RushImg6].map((url, i) => ({original: url, thumbnail: thumbs[i]}));

export default function ({}) {
  return (
      <DocumentTitle title={"Rush ZBT | " + config.siteTitle}>
        <div>
          <Splash id="rush" imageUrl={CoverImg}></Splash>
          <div className="contents typography">
            <h1>Rush ZBT this fall!</h1>
            <WithBoringTextOnSide>
              <Schedule/>
            </WithBoringTextOnSide>
            <ImageGallery items={rushPhotos}/>
          </div>
        </div>
      </DocumentTitle>
  );
}

function WithBoringTextOnSide ({children}) {
  return (
      <div className="flex rush">
        <div className="flex-cell">
          <p className="important">Call ZBT for rides at <a href="tel:6172323257">617-232-3257</a> to get to any Rush event</p>
          <p className="extra">This fall we will be opening our house to visitors, come join us for Rush activities! Discover ZBT's culture, chat to brothers, become part of this excellent community. </p>
          <p className="extra">We have all sorts of activities and mountains of <b>free food</b> available for Rush, giving the freshmen the chance to really get to know us and have a fun time doing so.</p>
        </div>
        <div className="flex-cell-bigger schedule">{children}</div>
      </div>
  );
}

function Schedule() {
  return (
      <div className="schedule">
      <table>
      <tbody>
<tr><th></th><th>Friday, September 4th</th></tr>
      <tr><td>9am-10am</td><td>Breakfast for the Chapmions</td></tr>
      <tr><td>12:30 pm</td><td>BBQ and Sports with Zebes (Kresge Oval)</td></tr>
      <tr><td>3 pm</td><td>Ice Cream, Games, and House Tours</td></tr>
      <tr><td>6 pm</td><td>Lobsterfest</td></tr>
      <tr><td>8 pm</td><td>Casino Night: Win an HDTV!</td></tr>
      <tr><th></th><th>Saturday, September 5th:</th></tr>
      <tr><td>12:30 pm</td><td>BBQ and Sports with Zebes (Kresge Oval)</td></tr>
      <tr><td>3 pm</td><td>Ice Cream, Games, and House Tours</td></tr>
      <tr><td>6 pm</td><td>Lobsterfest</td></tr>
      <tr><td>8 pm</td><td>Casino Night: Win an HDTV!</td></tr>
      <tr><th></th><th>Friday, September 4th</th></tr>
      <tr><td>9am-10am</td><td>Breakfast for the Chapmions</td></tr>
      <tr><td>12:30 pm</td><td>BBQ and Sports with Zebes (Kresge Oval)</td></tr>
      <tr><td>3 pm</td><td>Ice Cream, Games, and House Tours</td></tr>
      <tr><td>6 pm</td><td>Lobsterfest</td></tr>
      <tr><td>8 pm</td><td>Casino Night: Win an HDTV!</td></tr>
      <tr><th></th><th>Saturday, September 5th:</th></tr>
      <tr><td>12:30 pm</td><td>BBQ and Sports with Zebes (Kresge Oval)</td></tr>
      <tr><td>3 pm</td><td>Ice Cream, Games, and House Tours</td></tr>
      <tr><td>6 pm</td><td>Lobsterfest</td></tr>
      <tr><td>8 pm</td><td>Casino Night: Win an HDTV!</td></tr>
</tbody>
      </table>
      </div>
  );
}
