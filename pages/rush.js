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
            <h1>Rush ZBT this spring! (2021)</h1>
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
        <p className="important">Each Rush Event will be on Zoom. All times are in EST. </p>
          <p className="extra">We have all sorts of activities and mountains of <b>free food</b> available for Rush (even virtually; we will reimburse you!), giving the freshmen the chance to really get to know us and have a fun time doing so.</p>
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

const text = `Title: ZBT Welcome
Time: Saturday, February 6, 3:00pm - 6:00pm
Location: https://mit.zoom.us/j/2895765138
Description:
Welcome to MIT IFC, Come hang out and meet the brothers of Zeta Beta Tau!

Title: Poker Night
Time: Saturday, February 6, 7:00pm - 9:30pm
Location: https://mit.zoom.us/j/2895765138
Description:
Come play poker with the brothers of Zeta Beta Tau! Doesn’t matter if you’re a pro or you’ve never played poker in your life, we welcome all to join and have a shot at winning multiple prizes (including a grand prize of a TV to keep you entertained in quarantine).

Title: ZBT Rise 'N Shine
Time: Sunday, February 7, 9:00am - 10:30am
Location: https://mit.zoom.us/j/2895765138
Description:
Grab some breakfast (we will reimburse!) and start your day off right with the brothers of Zeta Beta Tau!

Title: Super Bowl Warmup
Time: Sunday, February 7, 5:00pm - 6:30pm
Location: https://mit.zoom.us/j/2895765138
Description:
Come hangout with the brothers of Zeta Beta Tau as the clock winds down on gameday!

Title: ZBT Lunch of Champions
Time: Monday, February 8, 12:00pm - 1:30pm
Location: https://mit.zoom.us/j/95981465913
Description:
Grab some lunch (we will reimburse!), unwind and take a midday break with the brothers of Zeta Beta Tau

Title: Escape Room
Time: Monday, February 8, 7:00pm - 9:00pm
Location: https://mit.zoom.us/j/2895765138
Description:
Try your shot at virtual Escape Room with the brothers of Zeta Beta Tau. Will you escape the room?

Title: ZBT Lunch of Champions
Time: Tuesday, February 9, 12:00pm - 1:30pm
Location: https://mit.zoom.us/j/95981465913
Description:
Grab some lunch (we will reimburse!), unwind and take a midday break with the brothers of Zeta Beta Tau

Title: Among Us
Time: Tuesday, February 9, 7:00pm - 9:00pm
Location: https://mit.zoom.us/j/2895765138
Description:
Quarantine got you down? No worries, test your deductive reasoning skills to catch the imposter...or throw a wrench in the plan as you hunt crewmates!

Title: ZBT Lunch of Champions
Time: Wednesday, February 10, 12:00pm - 1:30pm
Location: https://mit.zoom.us/j/4828673245
Description:
Grab some lunch (we will reimburse!), unwind and take a midday break with the brothers of Zeta Beta Tau

Title: ZBT Game Night
Time: Wednesday, February 10, 7:00pm - 9:00pm
Location: https://mit.zoom.us/j/2895765138
Description:
As the first week of rush winds down, come hangout and play a variety of games.

Title: ZBT Lunch of Champions
Time: Thursday, February 11, 12:00pm - 1:30pm
Location: https://mit.zoom.us/j/4828673245
Description:
Grab some lunch (we will reimburse!), unwind and take a midday break with the brothers of Zeta Beta Tau

Title: ZBT Game Night
Time: Thursday, February 11, 7:00pm - 9:00pm
Location: https://mit.zoom.us/j/2895765138
Description:
As the first week of rush winds down, come hangout and play a variety of games.
`
/*const text = `Title: ZBT BBQ and Grill
Time: Saturday, August 31, 12:00pm - 3:00pm
Location: Kresge BBQ Pits
Description:
Come grill & chill with ZBT at the Kresge BBQ pits. There’ll be burgers, hot dogs, snacks, and vegetarian options available. Enjoy the great food, music, and company, or play some sports on the lawn!

Title: Ice Cream Bar and Games	
Time: Saturday, August 31, 3:00pm - 6:00pm
Location: ZBT House
Description:
Grab some ice cream on a hot summer day!

Title: Dinner with ZBT: Dinner in the City
Time: Saturday, August 31, 6:00pm - 8:00pm
Location: Burton Conner Porter Room
Description:
Dinner with ZBT! Come hang out with brothers and friends. Vegetarian options will be available as well!

Title: Night in the City
Time: Saturday, August 31, 8:00 pm - 12:00 am
Location:  Burton Conner Porter Room
Description:
Try your luck with the brothers of ZBT playing some of the most popular games enjoyed on a Saturday night out in the city!

Title: ZBT Breakfast of Champions
Time: Sunday, September 1, 9:00am - 11:00am
Location: MIT Student Center
Description:
Come to the stud for ZBT’s Breakfast of Champions! Eggs, bacon, sausage, fresh fruit and muffins for days. Vegetarians welcome! Call us at 617-404-9663.

Title: Battle Canoeing on the Charles River
Time: Sunday, September 1, 11:00am - 4:00pm
Location: Meet at Student Center Steps
Description:
This is SPARTA!! Actually, it’s just the Charles river. Wanna get soaked in the river just for the fun of it? Wanna throw some water balloons at people because why not? Come to ZBT Battle Canoeing! We will be renting boats to go on the Charles. Life jackets will be available and your electronics will be taken care of. Call us at 617-404-9663 for rides.

Title: Dinner with ZBT: Taste of Italy
Time: Sunday, September 1, 5:00pm - 6:00pm
Location: ZBT House
Description:
His palms are sweaty, knees weak, arms are heavy...mom's spaghetti; He's nervous, but on the surface he looks calm and ready; To go to ZBT for Taste of Italy! We will have our own ITALIAN (first order approximation) chef cook spaghetti and meatballs, chicken parmesan, desserts, and other snacks. Vegetarians welcome! We will also have games such as pinball, foosball, etc! Call us at 617-404-9663.

Title: Laser Tag
Time: Sunday, September 1, 6:00pm - 8:00pm
Location: Meet at ZBT House
Description:
Come battle for victory with laser tag! We will meet at Walker and go to Xtreme Craze for a fun, competitive time. Call us at 617-404-9663 for rides.

Title: ZBT Breakfast of Champions
Time: Monday, September 2, 9:00am - 11:00am
Location: MIT Student Center
Description:
Come to the Stud for ZBT’s Breakfast of Champions! Eggs, bacon, sausage, fresh fruit and muffins for days. Vegetarians welcome! Call us at 617-404-9663.

Title: Paintball
Time: Monday, September 2, 12:30 pm - 4:30 pm
Location: Meet at Student Center Steps
Description
Splatter your opponents with paint on the battlefield. Join our ranks to show your strength in glorious battle. Provisions will be provided, thanks to our chef, with vegetarian options available. Extra t-shirts will be available, but it is recommended to bring clothes you don’t mind getting dirty. Meet at the Student Center to start your journey. Call us at 617-404-9663 for your ride!

Title: Dinner at ZBT: Teriyaki Salmon	
Time: Monday, September 2, 6:00 pm - 8 pm
Location: ZBT House
Description
Salmon dinner with ZBT. Come hang out with brothers and friends. Vegetarian options will be available as well!

Title: Bowling
Time: Monday, September 2, 8:00 pm - 11:00 pm
Location: Meet at ZBT House
Description
Have some spare time? Come bowl with the brothers of ZBT! Whether you strike it lucky or end up in the gutter, it’ll be a great time! Need a ride? Meet at Stata Cafe, or call us at 617-404-9663!

Title: Late night run to IHOP
Time: Monday, September 2, 11:00 pm - 12:00am
Location: Meet at stud steps
Description Up late? Hungry from bowling? Join ZBT in eating America’s best pancakes at a late-night run to IHOP. Bring your appetites because this meal is on us! We will be providing transportation from Stata to IHOP and from bowling directly to IHOP as well. Call 617-404-9663 for a ride.

Title: ZBT Breakfast of Champions
Time: Tuesday, September 3, 9:00am - 11:00am
Location: MIT Student Center
Description:
Come to the Stud for ZBT’s Breakfast of Champions! Eggs, bacon, sausage, fresh fruit and muffins for days. Vegetarians welcome! Call us at 617-404-9663.

Title: Dinner with ZBT: Steak Dinner
Time: Tuesday, September 3, 5:00pm-7:00pm
Location: Meet at ZBT
Description
Call ZBT for rides at 617-404-9663.

Title: Skyzone
Time: Tuesday, September 3, 7:00pm - 10:00pm
Location: Meet at stud steps
Description
Massive wall-to-wall trampolines, cushy foam pits, the ultimate in dodgeball. And of course, a basketball hoop to dunk. Come to Skyzone with ZBT! Call 617-404-9663 for your ride.

Title: Dinner with ZBT: Jamalya*
Time: Wednesday, September 4, 5:00pm - 7:00pm
Location: ZBT House
Description
Call ZBT for rides at 617-404-9663.

Title: Escape the Room*
Time: Wednesday, September 4, 7:00pm - 10:00pm
Location: Meet at ZBT House
Description
Using only your wits and your friends, can you break free in under an hour? We’ll meet at on campus and then head out to Escape the Room Boston. Those who make it out will be driven back to MIT; those left inside may never be seen again. What will your fate be? Call ZBT for rides at 617-404-9663.

Title: Dinner with ZBT: Beef Kabobs*
Time: Thursday, September 5, 5:00pm - 7:00pm
Location: ZBT House
Description
Call ZBT for rides at 617-404-9663.

Title: Minigolf*
Time: Thursday, September 5, 7:00pm - 10:00pm
Location: Meet at stud steps
Description
Ever wanted to putt like Tiger? Come play minigolf with the brothers of ZBT. For rides, call us at 617-404-9663!
`;
*/
