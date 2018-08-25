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
            <h1>Rush ZBT this fall! (2018)</h1>
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

function WithBoringTextOnSide ({children}) {
  return (
      <div className="flex rush">
        <div className="flex-cell">
          <p className="important">Call ZBT for rides at <a href="tel:6172323257">617-232-3257</a> to get to any Rush event.</p>
          <p className="extra">This fall we will be opening our house to visitors, come join us for Rush activities! Discover ZBT's culture, chat to brothers, become part of this excellent community. </p>
          <p className="extra">We have all sorts of activities and mountains of <b>free food</b> available for Rush, giving the freshmen the chance to really get to know us and have a fun time doing so.</p>
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
            <h3>{this.state.time} - {this.state.day}</h3>
            <h3>{this.state.location}</h3>
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

const text = `Title: ZBT BBQ and Grill
Time: Saturday, September 1st, 12:30pm - 3:00pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description:
Come grill & chill with ZBT at the Kresge BBQ pits. There’ll be burgers, hot dogs, snacks, and vegetarian options available. Enjoy the great food, music, and company, or play some sports on the lawn!

Title: Ice Cream Sundae Bar and Games
Time: Saturday, September 1st, 3:00 pm - 6:00 pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description:
Come to ZBT for ice cream and chocolate sauce, chips and dips and grapes and a good time. Hang out and play video games, board games, foosball, and ping pong. Call ZBT for rides at 617-232-3257.

Title: Lobsterfest!
Time: Saturday, September 1st, 6:00pm - 8:00pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description:
Endless lobster, all you can eat. Not a fan of lobster? We'll have chicken and vegetarian options available. For rides, call us at 617-232-3257!

Title: Casino Night
Time: Saturday, September 1, 8:00 pm - 12:00 am
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description:
Feeling lucky? Think you can outsmart our dealers? Come to ZBT for Casino night! We will have poker, blackjack, and other casino games. There'll be loads of prizes, with a grand prize of a 40-inch TV! Call us at 617-232-3257 for a ride.

Title: ZBT Breakfast of Champions
Time: Sunday, September 2, 9:00am - 12:00 pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description:
Come to ZBT for the Breakfast of Champions! Eggs, bacon, sausage, fresh fruit and muffins for days. Vegetarians welcome! Call us at 617-232-3257 for your ride.

Title: Battle Canoeing on the Charles River
Time: Sunday, September 2, 12:00pm - 4:30 pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description:
This is SPARTA!! Actually, it’s just the Charles river. Wanna get soaked in the river just for the fun of it? Wanna throw some water balloons at people because why not? Come to ZBT Battle Canoeing! We will be renting boats to go on the Charles. Life jackets will be available and your electronics will be taken care of. Call us at 617-232-3257 for rides.

Title: Dinner at ZBT, Taste of Italy
Time: Sunday, September 2, 5:00pm - 6:15pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description:
His palms are sweaty, knees weak, arms are heavy...mom's spaghetti; He's nervous, but on the surface he looks calm and ready; To go to ZBT for Taste of Italy! We will have our own ITALIAN (first order approximation) chef cook spaghetti and meatballs, chicken parmesan, desserts, and other snacks. Vegetarians welcome! We will also have games such as pinball, foosball, etc! Call us at 617-232-3257 for rides.

Title: Laser Tag
Time: Sunday, September 2, 6:15pm - 9:00pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description:
Come battle for victory with laser tag! We will meet at ZBT and go to Xtreme Craze for a fun, competitive time. Call us at 617-232-3257 for rides.

Title: ZBT Breakfast of Champions
Time: Monday, September 3, 9:00am - 12:00 pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description:
Come to ZBT for the Breakfast of Champions! Eggs, bacon, sausage, fresh fruit and muffins for days. Vegetarians welcome! Call us at 617-232-3257 for your ride.

Title: Paintball
Time: Monday, September 3, 12:30 pm - 4:30 pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description
Splatter your opponents with paint on the battlefield. Join our ranks to show your strength in glorious battle. Provisions will be provided, thanks to our chef, with vegetarian options available. Extra t-shirts will be available, but it is recommended to bring clothes you don’t mind getting dirty. Meet at ZBT to start your journey. Call us at 617-232-3257 for your ride!

Title: Dinner at ZBT: Teriyaki Salmon
Time: Monday, September 3, 6:00 pm - 8 pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description
Come enjoy some delicious teriyaki salmon! Vegetarian options will also be available. Call us at 617-232-3257 for a ride!

Title: Bowling
Time: Monday, September 3, 8:00 pm - 11:00 pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description
Have some spare time? Come bowl with the brothers of ZBT! Whether you strike it lucky or end up in the gutter, it’ll be a great time! Need a ride? Call us at 617-232-3257!

Title: Late night run to IHOP
Time: Monday, September 3, 11:00 pm - 12:00am
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description Up late? Hungry from bowling? Join ZBT in eating America’s best pancakes at a late-night run to IHOP. Bring your appetites because this meal is on us! We will be providing transportation from the house to IHOP and from bowling directly to IHOP as well. Call 617-232-3257 for a ride.

Title: ZBT Breakfast of Champions
Time: Tuesday, September 4, 9:00am - 12:00pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description
Come to ZBT for the Breakfast of Champions! Eggs, bacon, sausage, fresh fruit and muffins for days. Vegetarians welcome! Call us at 617-232-3257 for your ride.

Title: Dinner at ZBT: Steak Night
Time: Tuesday, September 4, 5:30pm-7:30pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description
Steak dinner at ZBT. Come hang out with brothers and friends. Vegetarian options will be available as well! Call ZBT for rides at 617-232-3257.

Title: Escape the Room
Time: Tuesday, September 4, 7:30pm - 10:00pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description
Using only your wits and your friends, can you break free in under an hour? We’ll meet at ZBT and then head out to Escape the Room Boston. Those who make it out will be driven back to ZBT afterwards; those left inside may never be seen again. What will your fate be? Call ZBT for rides at 617-232-3257.

Title: Dinner at ZBT: Jambalaya
Time: Wednesday, September 5, 5:30pm - 7:30pm
Safety plan: none
Description
Jambalaya dinner at ZBT! Vegetarian options available. Call ZBT for rides at 617-232-3257.

Title: Skyzone
Time: Wednesday, September 5th, 7:30pm - 10:00pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description
Massive wall-to-wall trampolines, cushy foam pits, the ultimate in dodgeball. And of course, a basketball hoop to dunk. Come to Skyzone with ZBT! Call 617-232-3257 for your ride.

Title: Dinner at ZBT: Roasted Beef Tips
Time: Thursday, September 6th, 5:30pm - 7:00pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description
Enjoy some sirloin tip roast at ZBT! Vegetarian options also available. Call ZBT for rides at 617-232-3257.

Title: Minigolf
Time: Thursday, September 6th, 7:00pm - 10:00pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description
Ever wanted to putt like Tiger? Come play minigolf with the brothers of ZBT. For rides, call us at 617-232-3257!
`;
