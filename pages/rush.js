import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import SkyLight from 'react-skylight'
import { config } from 'config'

import {
  Row,
  Splash,
  ImgGallery,
} from './_sharedComponents'

import { prefixLink } from '../utils/urls.js'
import CoverImg from '../static/rush-cover.jpg';

import RushImg1 from '../static/rush-photo-1.jpg';
import RushImg2 from '../static/rush-photo-2.jpg';
import RushImg3 from '../static/rush-photo-3.jpg';
import RushImg4 from '../static/rush-photo-4.jpg';
import RushImg5 from '../static/rush-photo-5.jpg';
import RushImg6 from '../static/rush-photo-6.jpg';

const rushPhotos = [RushImg1, RushImg2, RushImg3, RushImg4, RushImg5, RushImg6].map(url => ({src: prefixLink(url)}));

export default function ({}) {
  return (
      <DocumentTitle title={"Rush ZBT | " + config.siteTitle}>
        <div>
          <Splash id="rush" imageUrl={CoverImg}></Splash>
          <div className="contents typography">
            <h1>Rush ZBT this fall! (2021)</h1>
            <WithBoringTextOnSide>
              <Schedule/>
            </WithBoringTextOnSide>
            <ImgGallery images={rushPhotos} useLightbox />
          </div>
          <div className="contents typography">
            <h2></h2>
          </div>
        </div>
      </DocumentTitle>
  );
}

// this was in the flex-cell div: <p className="important">Call ZBT for rides at <a href="tel:6172323257">617-404-9663</a> to get to any Rush event.</p>
function WithBoringTextOnSide ({children}) {
  return (
      <div className="flex rush">
        <div className="flex-cell">
        * invite only
        </div>
        <div className="flex-cell-bigger schedule">{children}</div>
      </div>
  );
}

function Schedule() {
  let openDeetsFn = () => {};
  let _details;

  const events = parseText();
  const byDay = {};
  events.forEach(x => { byDay[x.day] = byDay[x.day] ? [...byDay[x.day], x] : [x] });

  const days = [];
  Object.keys(byDay).forEach((key) => {
    days.push({ date: new Date(key.split(', ')[1] + ' 2018'), key });
  });

  days.sort((a, b) => -a.date + b.date);
  const tableRows = [];
  days.forEach(({key}) => {
    tableRows.push(
      <tr key={key}><th></th><th>{key}</th></tr>
    );
    byDay[key].forEach((x, i) => {
      const deets = (e) => {
        _details.setState(x);
        openDeetsFn();
        e.preventDefault();
      };
      tableRows.push(
        <tr key={key + i}>
          <td className="time">{x['time']}</td>
          <td>{x['title']} <a href="#" onClick={deets}>details</a></td>
        </tr>
      );
    });
  });

  return (
      <div className="schedule">
        <DetailsPane ref={(ref) => _details = ref } cb={(f) => openDeetsFn = f}/>
        <table>
        <tbody>
          {tableRows}
          </tbody>
        </table>
        {/*<div className="note">Events marked with asterisk(*) are invite-only</div>*/}
      </div>
  );
}

class DetailsPane extends React.Component {
  constructor() {
    super();
    this.state = { title: '', day: '', time: '', desc: '' };
  }

  render() {
    this.props.cb(() => this.refs.deetsPopup.show());
    return (
          <SkyLight hideOnOverlayClicked ref="deetsPopup" title={this.state.title}>
            <h3>Time: {this.state.time} - {this.state.day}</h3>
            <h3>Location: {this.state.location}</h3>
            <p>{this.state.desc}</p>
          </SkyLight>
    );
  }
}

function parseText() {
  return text.split('\n\n').map((paragraph) => {
    const lines = paragraph.split('\n');
    return {
      title: lines[0].split(': ').slice(1).join(': '),
      time: lines[1].split(', ').slice(2).join(', '),
      day: lines[1].split(', ').slice(0, 2).join(', ').split(': ').slice(1).join(': '),
      location: lines[2].split(': ').slice(1).join(': '),
      desc: lines[4]
    };
  });
}

const text = `Title: BBQ with ZBT
Time: Saturday, September 4, 1:00pm - 4:00pm
Location: Walker
Description:
Come chill with ZBT and eat some BBQ chicken and snacks! Vegetarian options available. Enjoy the great food, music, and company, or join us for some games of spikeball!

Title: Dinner in the City
Time: Saturday, September 4, 6:00pm - 8:00pm
Location: Walker
Description:
Dinner with ZBT! Come hang out with brothers and friends. Vegetarian options will be available as well!

Title: Night in the City
Time: Saturday, September 4, 8:00pm - 12:00am
Location: Walker
Description:
Try your luck with the brothers of ZBT playing some of the most popular games enjoyed on a Saturday night, right here in Walker Memorial! Hundreds of dollars in prizes are available for you to win!

Title: ZBT Breakfast of Champions
Time: Sunday, September 5, 9:00am - 12:00pm
Location: Student Center Steps
Description:
Come to the stud for ZBT’s Breakfast of Champions! Eggs, bacon, sausage, fresh fruit and muffins for days. Vegetarians welcome! Call us at 617-420-2928

Title: Battle Canoeing
Time: Sunday, September 5, 12:00pm - 4:30pm
Location: Meet at Student Center Steps
Description:
This is SPARTA!! Actually, it’s just the Charles river. Wanna get soaked in the river just for the fun of it? Wanna throw some water balloons at people because why not? Come to ZBT Battle Canoeing! We will be renting boats to go on the Charles. Life jackets will be available and your electronics will be taken care of. Call us at 617-420-2928 for rides.

Title: Dinner with ZBT: Taste of Italy
Time: Sunday, September 5, 5:00pm - 6:30pm
Location: ZBT
Description:
His palms are sweaty, knees weak, arms are heavy...mom's spaghetti; He's nervous, but on the surface he looks calm and ready; To go to ZBT for Taste of Italy! We will have our own ITALIAN (first order approximation) chef cook spaghetti and meatballs, chicken parmesan, desserts, and other snacks. Vegetarians welcome! We will also have games such as pinball, foosball, etc! Call us at 617-420-2928.

Title: Laser Tag
Time: Sunday, September 5, 6:30pm - 9:00pm
Location: Meet at Walker
Description:
Come battle for victory with laser tag! We will meet at Walker and go to Xtreme Craze for a fun, competitive time. Call us at 617-420-2928 for rides.

Title: ZBT Breakfast of Champions
Time: Monday, September 6, 9:00am - 12:00pm
Location: Student Center Steps
Description:
Come to the stud for ZBT’s Breakfast of Champions! Eggs, bacon, sausage, fresh fruit and muffins for days. Vegetarians welcome! Call us at 617-420-2928

Title: Paintball
Time: Monday, September 6, 12:00pm - 4:30pm
Location: Meet at Student Center Steps
Description:
Splatter your opponents with paint on the battlefield. Join our ranks to show your strength in glorious battle. Provisions will be provided, thanks to our chef, with vegetarian options available. Extra t-shirts will be available, but it is recommended to bring clothes you don’t mind getting dirty. Meet at the Student Center to start your journey. Call us at 617-420-2928 for your ride!

Title: Dinner with ZBT: Steak Night
Time: Monday, September 6, 6:00pm - 8:00pm
Location: ZBT
Description:
Steak dinner with ZBT at the house. Come hang out with brothers and friends. Vegetarian options will be available as well!

Title: Bowling
Time: Monday, September 6, 8:00pm - 11:00pm
Location: Meet at Walker
Description:
Have some spare time? Come bowl with the brothers of ZBT! Whether you strike it lucky or end up in the gutter, it’ll be a great time! Need a ride? Call us at 617-420-2928!

Title: Late Night IHOP
Time: Monday, September 6, 11:00pm - 12:00am
Location: Meet at Walker
Description:
Up late? Hungry from bowling? Join ZBT in eating America’s best pancakes at a late-night run to IHOP. Bring your appetites because this meal is on us! We will be providing transportation from campus to IHOP and from bowling directly to IHOP as well. Call 617-420-2928 for a ride.

Title: *ZBT Breakfast of Champions
Time: Tuesday, September 7, 9:00am - 11:00am
Location: Student Center Steps
Description:
Come to the stud for ZBT’s Breakfast of Champions! Eggs, bacon, sausage, fresh fruit and muffins for days. Vegetarians welcome! Call us at 617-420-2928

Title: *Skyzone
Time: Tuesday, September 7, 5:30pm - 8:00pm
Location: Meet at Walker
Description:
Massive wall-to-wall trampolines, cushy foam pits, the ultimate in dodgeball. And of course, a basketball hoop to dunk. Come to Skyzone with ZBT! Call 617-420-2928 for your ride.

Title: *Dinner with ZBT
Time: Tuesday, September 7, 8:00pm - 10:00pm
Location: Meet at Walker
Description:
Call ZBT for rides at 617-420-2928.

Title: *Dinner with ZBT
Time: Wednesday, September 8, 5:30pm - 7:30pm
Location: Meet at Walker
Description:
Call ZBT for rides at 617-420-2928.

Title: *Escape Room
Time: Wednesday, September 8, 7:30pm - 10:00pm
Location: Meet at Walker
Description:
Using only your wits and your friends, can you break free in under an hour? We’ll meet on campus and then head out to Escape the Room Boston. Those who make it out will be driven back to MIT; those left inside may never be seen again. What will your fate be? Call ZBT for rides at 617-420-2928.

Title: *Dinner with ZBT
Time: Thursday, September 9, 5:30pm - 7:30pm
Location: Meet at Walker
Description:
Call ZBT for rides at 617-420-2928.

Title: *Minigolf
Time: Thursday, September 9, 7:30pm - 10:00pm
Location: Meet at Walker
Description:
Ever wanted to putt like Tiger? Come play minigolf with the brothers of ZBT. For rides, call us at 617-420-2928!
`
