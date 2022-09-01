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
          <h1>Rush ZBT this fall! (2022)</h1>
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
    days.push({ date: new Date(key.split(", ")[1] + " 2018"), key });
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

const text = `Title: Kresge Kickoff
Time: Saturday, September 3, 12:00pm - 2:00pm
Location: Kresge Lawn
Description:
Come chill with ZBT and get to know the brothers as we kick off the rush season!

Title: Raising Canes and Outdoor Games
Time: Saturday, September 3, 2:00pm - 5:00pm
Location: Briggs Field
Description:
The infamous Canes chicken and outdoor games with ZBT! Come hang out with brothers and friends. Vegetarian options will be available as well!

Title: ZBT Sushi Night
Time: Saturday, September 3, 6:00pm - 8:00pm
Location: BC Porter Room
Description:
Think you can beat the brothers at a sushi eating contest? Stop by for some delicious sushi (vegetarian options available) and a great time with the brothers!

Title: ZBT Poker Night
Time: Saturday, September 3, 8:00pm - 12:00am
Location: BC Porter Room
Description:
Try your luck with the brothers of ZBT playing some classic, no limit, texas hold'em. Come for a chance to win some amazing prizes, such as TVs and AirPods! Maybe you'll even face off against some members of the MIT Poker Club...

Title: Paintball
Time: Sunday, September 4, 11:00am - 4:00pm
Location: Meet at Kresge Turnaround
Description:
Splatter your opponents with paint on the battlefield. Join our ranks to show your strength in glorious battle. Provisions will be provided to all soldiers, thanks to our chef, with vegetarian options available. Make sure to bring clothes you don't mind getting dirty!

Title: House Tours and Thai Food
Time: Sunday, September 4, 5:30pm - 7:30pm
Location: ZBT
Description: 
Come join the brothers at the house for Thai food and house tours! Chill with the brothers and friends, and get to see the ZBT house for yourself. Vegetarian options available, and Muay Thai is discouraged but not illegal.

Title: Minigolf
Time: Sunday, September 4, 7:30pm - 10:00pm
Location: Meet at ZBT (from dinner) or Kresge Turnaround
Description: 
Come and join the brothers for a fun night of minigolf! A night filled with missing swings, eating dirt, and digging golf balls out of bushes awaits you.

Title: Battle Canoeing
Time: Monday, September 5, 12:00pm - 4:00pm
Location: Meet at Kresge Turnaround
Description:
This is SPARTA!! Actually, it’s just the Charles river. Wanna get soaked in the river just for the fun of it? Wanna throw some water balloons at people because why not? Come to ZBT Battle Canoeing! We will be renting boats to go on the Charles. Life jackets will be available and your electronics will be taken care of.

Title: Dinner at the House: Korean Fried Chicken
Time: Monday, September 5, 5:30pm - 7:00pm
Location: ZBT
Description:
Wanna know how I got these scars? Well... it was from doing the Hot Ones challenge at ZBT. Join us at the house for dinner, where we'll be packing the heat (and chicken)!

Title: Bowling
Time: Monday, September 5, 7:00pm - 10:00pm
Location: Meet at ZBT (from dinner) or Kresge Turnaround
Description:
Have some spare time? Come bowl with the brothers of ZBT! Whether you strike it lucky or end up in the gutter, it’ll be a great time! 

Title: Late Night IHOP
Time: Monday, September 5, 10:00pm - 12:00am
Location: Meet at Kresge Turnaround
Description:
Up late? Hungry from bowling? Join ZBT in eating America’s best pancakes at a late-night run to IHOP. Bring your appetites because this meal is on us! We will be providing transportation from campus to IHOP and from bowling directly to IHOP as well. 

Title: Rock Climbing
Time: Tuesday, September 6, 10:00am - 12:00pm
Location: Meet at Kresge Turnaround
Description:
What better thing to do at 10 in the morning than climb rocks? 

Title: Skyzone
Time: Tuesday, September 6, 2:00pm - 5:00pm
Location: Meet at Kresge Turnaround
Description:
Massive wall-to-wall trampolines, cushy foam pits, the ultimate in-door dodgeball. And of course, a basketball hoop to dunk. Come to Skyzone with ZBT!
`;
