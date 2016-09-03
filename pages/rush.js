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
            <h1>Rush ZBT this fall!</h1>
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
    days.push({ date: new Date(key.split(', ')[1] + ' 2016'), key });
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
            <p>{this.state.desc}</p>
          </SkyLight>
    );
  }
}

function parseText() {
  return text.split('\n\n').map((paragraph) => {
    const lines = paragraph.split('\n');
    return {
      title: lines[0].split(': ')[1],
      time: lines[1].split(', ')[2],
      day: lines[1].split(', ').slice(0, 2).join(', ').split(': ')[1],
      desc: lines[4]
    };
  });
}

const text = `Title: ZBT BBQ and Grill
Time: Saturday, September 3, 12:30pm-3:00pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description:
Come grill & chill with ZBT at the Kresge BBQ pits.  There’ll be burgers, hot dogs, snacks and vegetarian options available.  Enjoy the great food, music, and company, or play some sports on the lawn!

Title: Ice Cream Sundae Bar and Games
Time: Saturday, September 3, 3:00pm-6:00pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description:
Come to ZBT if you wish to be greeted by a house filled with ice cream and chocolate sauce, chips and dips and grapes and a good time. Hang out and play video games, foosball, board games, and four square-- transportation will be provided! Call ZBT for rides at 617-232-3257.

Title: Lobster Fest and Chicken Grill
Time: Saturday, September 3, 6:00pm-8:00pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description:
Come have all the lobster you can eat! Not “considering the lobster”? Come enjoy the chicken also! Vegetarian options also available. For rides, call us at 617-232-3257!

Title: Casino Night
Time: Saturday, September 3, 8:00pm-12:00am
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description:
Have you heard of the legendary MIT blackjack team that ruled the world? Do you want to know their secrets? Think you can outsmart our dealers? Come to ZBT for Casino night! We will have poker, blackjack, and other casino games. Win tickets and increase your chance to WIN A 40 INCH TV! Free transportation to and from! Call us at 617-232-3257 for rides.
(Note: Chips have no monetary value)

Title: ZBT Breakfast of Champions
Time: Sunday, September 4, 9:00am-12:00pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description:
Are you the hero MIT needs but doesn’t deserve? Are you hungry but broke? Do you wanna eat what Donald Trump eats every morning? Come to ZBT for the Breakfast of Champions! We have made to order breakfast by our chef. Everything from omelettes to french toast, sausages to a lavish continental spreads will be available. Vegetarians welcome! More food than you can stuff in your mouth! Free transportation! Call us at 617-232-3257 for rides.

Title: Battle Canoeing on the Charles River
Time: Sunday, September 4, 12:00pm-4:30pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description:
This is SPARTA!! Actually, it’s just the Charles river. Wanna get soaked in the river just for the fun of it? Wanna throw some water balloons at people because why not?  Come to ZBT Battle Canoeing! We will be renting boats to go on the Charles. Life jackets will be available and your electronics will be taken care of. Free transportation! Call us at 617-232-3257 for rides.

Title: Dinner at ZBT: Taste of Italy
Time: Sunday, September 4, 5:15pm-6:15pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description:
His palms are sweaty, knees weak, arms are heavy...mom's spaghetti; He's nervous, but on the surface he looks calm and ready; To go to ZBT for Taste of Italy! We will have our own ITALIAN (first order approximation) chef cook spaghetti and meatballs, chicken parmesan, desserts, and other snacks. Vegetarians welcome! We will also have games such as pinball, foosball, etc! Call us at 617-232-3257 for rides.

Title: Laser Tag
Time: Sunday, September 4, 6:15pm-9:00pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description: Come battle for victory with laser tag! We will meet at ZBT and go to Laser Quest for a fun, competitive time. Free transportation! Call us at 617-232-3257 for rides.

Title: ZBT Breakfast of Champions
Time: Monday, September 5, 9:00am-10:00am
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description:
Are you the hero MIT needs but doesn’t deserve? Are you hungry but broke? Do you wanna eat what Donald Trump eats every morning? Come to ZBT for the Breakfast of Champions! We have made to order breakfast by our chef. Everything from omelettes to french toast, sausages to a lavish continental spreads will be available. Vegetarians welcome! More food than you can stuff in your mouth! Free transportation! Call us at 617-232-3257 for rides.

Title: Pickup sports at Devotion Park
Time: Monday, September 5, 10:00am-12:00pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description:
Just missed out on the 2016 NBA draft? Want to showcase your skills to the best sports teams in the nation? Then come play sports with ZBT at Devotion Park in Brookline! We will be playing a variety of sports such as frisbee, soccer, and basketball. Transportation will be provided from campus. In case you want to flop, a brother who is a trained medlink/EMT will be present.
Free transportation! Call us at 617-232-3257 for rides.

Title: Paintball
Time: Monday, September 5, 1:00pm-4:30pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description
Become an artist as you splatter your opponents with paint to create a masterpiece on the battlefield of P&L Paintball. Join our ranks to show your strength in glorious battle and become an elite baller. Provisions will be provided, thanks to our chef, with vegetarian options available. Extra body canvases (white T-shirts) will be available, but it is recommended to bring clothes you don’t mind to dirty. Meet at ZBT house to start your journey. For rides, call us at 617-232-3257!

Title: Dinner at ZBT: Teriyaki Salmon
Time: Monday, September 5, 6:00pm-7:30pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description
Come have delicious Teriyaki Salmon, prepared by our chef Karen. (Vegetarian options will also be available). Call us at (617)-232-3257 for a ride!

Title: Bowling
Time: Monday, September 5, 8:00pm-11:00pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description
Have some spare time? Come bowl with the brothers of ZBT! Whether you strike it lucky or end up in the gutter, it’ll be a great time! Need a ride? Call us at 617-232-3257!

Title: Late night run to IHOP
Time: Monday, September 5, 11:00pm-12:00am
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description Up late? Hungry from bowling? Join ZBT in eating America’s best pancakes at a late-night run to IHOP. Bring your appetites because this meal is on us! We will be providing transportation from the house to IHOP or from bowling directly to IHOP as well. Call (617)-232-3257 for a ride.

Title: ZBT Breakfast of Champions
Time: Tuesday, September 6, 9:00am-12:00pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description
Are you the hero MIT needs but doesn’t deserve? Are you hungry but broke? Do you wanna eat what Donald Trump eats every morning? Come to ZBT for the Breakfast of Champions! We have made to order breakfast by our chef. Everything from omelettes to french toast, sausages to a lavish continental spreads will be available. Vegetarians welcome! More food than you can stuff in your mouth! Free transportation! Call us at 617-232-3257 for rides.

Title: Dinner at ZBT: Steak Night
Time: Tuesday, September 6, 6:00pm-8:00pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description
Steak dinner at ZBT.  Enjoy succulent steak and hang out with brothers and friends.  Call ZBT for rides at 617-232-3257.

Title: Skyzone: Trampoline Dodgeball
Time: Tuesday, September 6, 8:00pm-10:00pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description
Parents told you to reach for the stars but you don’t want to try hard? Well, then come to Trampoline Dodgeball with ZBT! We will be going to Skyzone and jumping higher than Neil Armstrong on the moon! For transportation, call ZBT for rides at 617-232-3257.

Title: Dinner at ZBT: Jambalaya
Time: Wednesday, September 7, 5:30pm-7:00pm
Safety plan: none
Description
Jambalaya dinner at ZBT.  This is one of our chef’s most popular dishes, get it while it’s hot! Vegetarian options available.  Call ZBT for rides at 617-232-3257.

Title: Escape the Room
Time: Wednesday, September 7, 7:00pm-10:00pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description
Using only your wits, your friends, and one hour of your time, see if you can break free from a room filled with puzzles, locks, and mysterious items of all varieties. We’ll meet a ZBT and then head out to one of two Escape Room locations in Boston.  Those who make it out will be driven back to ZBT afterwards; those left inside may never be seen again*.  What will your fate be?
*just kidding, of course- after one hour all groups will be let out and taken back to our house. Need a ride? Call ZBT for rides at 617-232-3257.

Title: Dinner at ZBT: Beef Kebabs
Time: Thursday, September 8, 5:30pm-7:00pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description
Beef kebabs for dinner at ZBT.  Enjoy our mouthwatering, perfectly grilled beef kebabs, or fill up on appetizers and desserts if you’d prefer.  Before and after dinner, chat with ZBT bros or go for the glory at our pinball machine, foosball table, video gaming room, and four-square corner. Call ZBT for rides at 617-232-3257.

Title: Minigolf
Time: Thursday, September 8, 7:00pm-10:00pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description
Want to channel your inner Happy Gilmore? Ever wanted to putt like Tiger? Come play minigolf with the brothers of ZBT. For rides, call us at 617-232-3257!

Title: Dinner and MetroRock
Time: Friday, September 9, 6:00pm-10:00pm
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description
Meet at the house before heading out to dinner at a nearby restaurant.  Following dinner, we’ll head to Metro Rock for a night of climbing up walls- or falling off of them.  No experience required; we’ll teach you what you need to know.  Call ZBT for rides at 617-232-3257.
Tag: Invite Only

Title: Harbor Cruise to George’s Island
Time: Saturday, September 10
Location: Zeta Beta Tau: 58 Manchester Road, Brookline MA 02446
Description
Explore the Boston harbor with ZBT! We’ll voyage out to George’s island, home of great views and a colonial fort with towers, dungeons, and cannons that’ll bring you right back to the good old days- cerca 1825.  We’ll explore the island, take a dip in the ocean, and then met back in the central courtyard to chill, picnic, and play frisbee, soccer, and football. We’ll meet at ZBT before and after the event- call for rides at 617-232-3257.
Tag: Invite Only
`;
