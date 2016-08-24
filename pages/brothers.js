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

const brothersInfo = require('./_brothers-data.js')

import CoverImg from '../static/brothers-cover.jpg';
import BrothersImg1 from '../static/brothers-1.jpg';
import BrothersImg2 from '../static/brothers-2.jpg';
import BrothersImg3 from '../static/brothers-3.jpg';
import BrothersImg4 from '../static/brothers-4.jpg';
import BrothersImg5 from '../static/brothers-5.jpg';
import BrothersImg6 from '../static/brothers-6.jpg';
import BrothersImg7 from '../static/brothers-7.jpg';
import BrothersImg8 from '../static/brothers-8.jpg';
import BrothersImg9 from '../static/brothers-9.jpg';
import BrothersImg10 from '../static/brothers-10.jpg';
import BrothersImg11 from '../static/brothers-11.jpg';
import BrothersImg12 from '../static/brothers-12.jpg';

const brothersPhotos = [BrothersImg1, BrothersImg2, BrothersImg3, BrothersImg4, BrothersImg5, BrothersImg6, BrothersImg7, BrothersImg8, BrothersImg9, BrothersImg10, BrothersImg11, BrothersImg12 ].map(url => ({src: prefixLink(url)}));

console.log(brothersInfo);

export default function (props) {
  return (
      <DocumentTitle title={"Brothers | " + config.siteTitle}>
        <div>
          <Splash id="brothers" imageUrl={CoverImg}/>
          <div className="contents typography">
            <h1>Brothers</h1>
            <p>ZBT, originally a jewish fraternity, is open to All Men of Good Character. Our house attracts smart and energetic young men interested in sciences and engineering with wide range of athletic and academic interests. Many brothers are very active on campus, leading various student organisations and clubs, dancing in troups, trading, playing poker and teaching web development to the wider MIT community. Many brothers are also involved in student clubs working with kids in Boston area such as <a href="http://campkesem.org/mit">Camp Kesem</a> and <a href="http://mitdynamit.weebly.com/">DynaMIT</a>.</p>
            <ImgGallery images={brothersPhotos} useLightbox />
          </div>
        </div>
      </DocumentTitle>
  );
}
