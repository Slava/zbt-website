import React from "react";
import { Link } from "react-router";
import DocumentTitle from "react-document-title";
import SkyLight from "react-skylight";
import { config } from "config";

import { Row, Splash, ImgGallery } from "./_sharedComponents";

import { prefixLink } from "../utils/urls.js";
import CoverImg from "../static/rush-cover.jpg";

import RushImg1 from "../static/rush-photo-1.jpg";
import RushImg2 from "../static/rush-photo-2.jpg";
import RushImg3 from "../static/rush-photo-3.jpg";
import RushImg4 from "../static/rush-photo-4.jpg";
import RushImg5 from "../static/rush-photo-5.jpg";
import RushImg6 from "../static/rush-photo-6.jpg";

const rushPhotos = [
  RushImg1,
  RushImg2,
  RushImg3,
  RushImg4,
  RushImg5,
  RushImg6,
].map((url) => ({ src: prefixLink(url) }));

export default function ({}) {
  return (
    <DocumentTitle title={"Rush ZBT | " + config.siteTitle}>
      <div>
        <Splash id="rush" imageUrl={CoverImg}></Splash>
        <div className="contents typography">
          <h1>Rush ZBT this fall! (2023)</h1>
          <WithBoringTextOnSide>
            <Schedule />
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
function WithBoringTextOnSide({ children }) {
  return (
    <div className="flex rush">
      <div className="flex-cell">* invite only</div>
      <div className="flex-cell-bigger schedule">{children}</div>
    </div>
  );
}

function Schedule() {
  let openDeetsFn = () => {};
  let _details;

  const events = parseText();
  const byDay = {};
  events.forEach((x) => {
    byDay[x.day] = byDay[x.day] ? [...byDay[x.day], x] : [x];
  });

  const days = [];
  Object.keys(byDay).forEach((key) => {
    days.push({ date: new Date(key.split(", ")[1] + " 2023"), key });
  });

  days.sort((a, b) => -a.date + b.date);
  const tableRows = [];
  days.forEach(({ key }) => {
    tableRows.push(
      <tr key={key}>
        <th></th>
        <th>{key}</th>
      </tr>
    );
    byDay[key].forEach((x, i) => {
      const deets = (e) => {
        _details.setState(x);
        openDeetsFn();
        e.preventDefault();
      };
      tableRows.push(
        <tr key={key + i}>
          <td className="time">{x["time"]}</td>
          <td>
            {x["title"]}{" "}
            <a href="#" onClick={deets}>
              details
            </a>
          </td>
        </tr>
      );
    });
  });

  return (
    <div className="schedule">
      <DetailsPane
        ref={(ref) => (_details = ref)}
        cb={(f) => (openDeetsFn = f)}
      />
      <table>
        <tbody>{tableRows}</tbody>
      </table>
      {/*<div className="note">Events marked with asterisk(*) are invite-only</div>*/}
    </div>
  );
}

class DetailsPane extends React.Component {
  constructor() {
    super();
    this.state = { title: "", day: "", time: "", desc: "" };
  }

  render() {
    this.props.cb(() => this.refs.deetsPopup.show());
    return (
      <SkyLight hideOnOverlayClicked ref="deetsPopup" title={this.state.title}>
        <h3>
          Time: {this.state.time} - {this.state.day}
        </h3>
        <h3>Location: {this.state.location}</h3>
        <p>{this.state.desc}</p>
      </SkyLight>
    );
  }
}

function parseText() {
  return text.split("\n\n").map((paragraph) => {
    const lines = paragraph.split("\n");
    return {
      title: lines[0].split(": ").slice(1).join(": "),
      time: lines[1].split(", ").slice(2).join(", "),
      day: lines[1]
        .split(", ")
        .slice(0, 2)
        .join(", ")
        .split(": ")
        .slice(1)
        .join(": "),
      location: lines[2].split(": ").slice(1).join(": "),
      desc: lines[4],
    };
  });
}

const text = `Title: Raising Canes and Outdoor Games
Time: Saturday, September 2, 1:00pm - 4:00pm
Location: Briggs Field
Description:
Come to Briggs Field for Cane's chicken and have a ball playing of spikeball, soccer, ultimate, football, and more! Vegetarian options available.

Title: ZBT Sushi Night
Time: Saturday, September 2, 5:00pm - 7:00pm
Location: Walker Memorial
Description:
Sushi Dinner! Come meet the brothers of ZBT and stay for our poker tournament where we'll give out over $1000 in prizes.

Title: ZBT Poker Night
Time: Saturday, September 2, 7:00pm - 10:00am
Location: Walker Memorial
Description:
Come join the brothers of ZBT for our signature poker night where we'll give out over $1000 in prizes, including airpods, a nintendo switch, and gift cards! All skill levels welcome; we'll teach you how to play.

Title: Paintball
Time: Sunday, September 3, 11:00am - 4:00pm
Location: Action Games Paintball
Description:
Come play paintball with the brothers of ZBT! Meet outside Maseeh or call us at (857) 576-4928 for your ride!

Title: House Tours + Dinner
Time: Sunday, September 3, 5:00pm - 8:00pm
Location: ZBT House
Description: 
Meet the brothers, tour the ZBT house, and enjoy some of Boston's best thai food. Meet outside Maseeh or text (857) 576-4928 for your ride!

Title: Minigolf
Time: Sunday, September 3, 8:00pm - 10:00pm
Location: McGolf
Description: 
Come play minigolf with the brothers of ZBT. For rides, call us at (857) 576-4928!

Title: K1 Speed Go-karts
Time: Monday, September 4, 2:00pm - 6:00pm
Location: K1 Speed
Description:
Join the brothers of ZBT for our rendition of Fast and Furious! Call (857) 576-4928 for a ride!

Title: Bonchon Dinner (Korean Fried Chicken)
Time: Monday, September 4, 5:00pm - 7:00pm
Location: ZBT House
Description:
Come join ZBT for some delicious bonchon chicken and good times. Vegetarian options available! Call us at (857) 576-4928 for rides.

Title: Bowling
Time: Monday, September 4, 7:00pm - 10:00pm
Location: Kings Dining & Entertainment
Description:
Have some spare time? Come bowl with the brothers of ZBT! Whether you strike it lucky or end up in the gutter, it’ll be a great time! Need a ride? Call us at (857) 576-4928!

Title: Late Night IHOP
Time: Monday, September 4, 10:00pm - 12:00am
Location: IHOP
Description:
Up late? Hungry from bowling? Join ZBT in eating America’s best pancakes at a late-night run to IHOP. We will be providing transportation from campus to IHOP and from bowling directly to IHOP as well. Call (857) 576-4928 for a ride.

Title: Rock Climbing*
Time: Tuesday, September 5, 12:00pm - 2:30pm
Location: Central Rock Gym
Description:
Come boulder with the brothers of ZBT. Call (857) 576-4928 for rides.

Title: Trampoline Dodgeball*
Time: Tuesday, September 5, 2:30pm - 5:00pm
Location: Get Air Trampoline Park
Description:
Hop around with the brothers of ZBT and take your shot at showing off your best stunts! Call (857) 576-4928 for a ride!

Title: House Dinner*
Time: Tuesday, September 5, 5:30pm - 8:00pm
Location: ZBT House
Description:
Mediteranean dinner with the brothers of ZBT!

Title: Level 99*
Time: Tuesday, September 5, 8:00pm - 10:00pm
Location: Level99
Description:
A night of mental puzzles, physical challenges, and crushing your friends in competitions!

Title: Escape the Room*
Time: Wednesday, September 6, 5:30pm - 8:00pm
Location: Escape the Room Boston
Description:
Using only your wits and your friends, can you break free in under an hour? We’ll meet on campus and then head out to Escape the Room Boston. Those who make it out will be driven back to MIT; those left inside may never be seen again. What will your fate be? Call ZBT for rides at (857) 576-4928.

Title: Sushi Dinner*
Time: Wednesday, September 6, 8:00pm - 10:00pm
Location: Yamato II
Description:
Come to Yamatos for some all you can eat Sushi! Vegetarian options available.

Title: Boat Cruise*
Time: Thursday, September 7, 6:00pm - 10:00pm
Location: Odyssey Boston
Description:
Enjoy a sunset boat cruise over the Charles River! Food will be provided.
`;
