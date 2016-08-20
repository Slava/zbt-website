import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import {
  Row,
  Splash,
} from './_sharedComponents'

const aLotOfText = `
The Xi Chapter at MIT was founded in 1911 with help from Zebes from New York and Boston University. We were the 15th chapter of Zeta Beta Tau formed (there are now over 80). For the first few years, we moved about from house to house and location to location. Many of the first houses were on Newbury Street. When MIT moved from Boston to its current location in 1916, however, there was some tumult in our chapter, and it eventually found its way down to one man. World War I also weakened the chapter. Xi attempted to rebuild itself after this, but it eventually failed. By 1926, the chapter had dissolved.

The Xi chapter could have easily become fodder for the history books had not a group of men decided in the late 1950s to reform the chapter. In 1956, Jack Segall from McGill University and Lyle Brown from Syracuse transferred to MIT. They had both been Zebes at their former schools, and tried to restart the dead Xi chapter here	at MIT. Interest in the movement grew and, in late 1956, the IFC approved their petition to form the Dover Club with the intention of later rejoining ZBT. (The name Dover Club was chosen because the IFC forbade any group petitioning to become a fraternity to use the letters of that fraternity until they became full members of the IFC; the name comes from Lee Dover, the general secretary of ZBT at the time who was instrumental in getting Xi reformed.)

For several years, the Dover Club lived in a special section of Baker, one of the dorms at MIT. In 1957, after a relative period of inactivity, the Dover Club rushed its first class, the Class of 1961 (the Alpha Class). Shortly after, they moved into a house near Boston College at 2018 Commonwealth Avenue. Although this was nearly twenty minutes away from MIT, the Dover Club was not discouraged and the Rush numbers show it--they typically rushed more members than many of the other fraternities at MIT!

The Dover club remained well-known on campus for athletics (for example winning an intramural volleyball tournament) and academics, achieving the number one GPA of all living groups in 1960.

Finally, on February 25, 1961, ZBT accepted the Dover Club as the re-instatement of the Xi Chapter at MIT. The Dover club was not forgotten though--it is now the name of our trustee organization.


A couple of years later, a huge opportunity opened up. A two-year old fraternity house in Brookline was suddenly vacated by a BU fraternity. Xi immediately acquired the $250,000 house, the same house that we live in today at 58 Manchester Road. The purchase of the house made big news in The Tech, the MIT newspaper, which described the house as "the ultimate in fraternity living.

The Xi Chapter continued to grow after its foundings. At one point, the house had six nearby apartments to house all of the additional Brothers. Each year, there were about 72 Zebes in the Xi Chapter! This is a lot compared to the 50 Brothers we normally have in the house, a more comfortable number that fits in our House and annex.

Throughout the rest of the 1960s, 1970s, and 1980s, the Xi Chapter remained a potent force at MIT. Our IM teams excelled, we consistently won top honors in terms of academics, and we were involved in many important parts of MIT life (including the IFC and the Tech newspaper).

When ZBT abolished pledging in 1989, it was somewhat difficult to adjust. Many old traditions and the old way of doing things had to be thrown out. After a brief struggle and changes in the way our Chapter thought, we were able to successfully implement a freshman program that did not include any pledging practices at all. By 1997, everything that had made freshmen pledges had been completely removed, officially and in practice.

Today, the Xi Chapter continues to excel in all aspects: academics, athletics, social life, and most importantly Brotherhood. We approach the future optimistically, realizing that Xi is reaching and will maintain an unmatched level of excellence!
`;

export default class History extends React.Component {
  render() {
    const { children } = this.props;
    return (
        <DocumentTitle title={"History | " + config.siteTitle}>
          <div className="contents typography">
            <h1>History of Xi Chapter</h1>
            {aLotOfText.split("\n").map((text) => <p>{text}</p>)}
          </div>
        </DocumentTitle>
    );
  }
}
