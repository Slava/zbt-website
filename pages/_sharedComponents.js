import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

export function Row({ flipped, children, id, imageUrl }) {
  const imgStyle = {
    backgroundImage: `url("${imageUrl}")`
  };
  const imgDiv = (<div key={1} className="img col" style={imgStyle}></div>);
  const descDiv = (<div key={2} className="desc col typography"> <div className="desc-wrapper">{children}</div></div>);
  const divs = flipped ? [descDiv, imgDiv] : [imgDiv, descDiv];

  return (
      <div key={id} className={"row" + (flipped ? " alt" : "")} id={id}>
      {divs}
    </div>
  );
}

export function Splash({ id, children, additionalStyles, imageUrl }) {
  const style = {
    backgroundImage: [...(additionalStyles || []), `url("${imageUrl}")`].join(', ')
  };
  return (
      <div className="background" id={id} style={style}>
        <div className="caption typography">
          {children}
        </div>
      </div>
  );
}
