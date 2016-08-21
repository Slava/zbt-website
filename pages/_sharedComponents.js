import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import { prefixLink } from '../utils/urls.js'

import '../css/dropdown.less';

export function Row({ flipped, children, id, imageUrl }) {
  const imgStyle = {
    backgroundImage: `url("${prefixLink(imageUrl)}")`
  };

  return (
      <div key={id} className={"flex row" + (flipped ? " alt" : "")} id={id}>
        <div key={1} className="img col" style={imgStyle}></div>
        <div key={2} className="desc col typography"> <div className="desc-wrapper">{children}</div></div>
    </div>
  );
}

export function Splash({ id, children, additionalStyles, imageUrl }) {
  const style = {
    backgroundImage: [...(additionalStyles || []), `url("${prefixLink(imageUrl)}")`].join(', ')
  };
  return (
      <div className="background" id={id} style={style}>
        <div className="caption typography">
          {children}
        </div>
      </div>
  );
}

export const Dropdown = React.createClass({
  getInitialState: function() {
    return {
      listVisible: false,
      display: "",
      selected: null,
    };
  },

  select: function(item) {
    this.setState({ selected: item });
    this.props.onSelected(item);
  },

  show: function() {
    this.setState({ listVisible: true });
    document.addEventListener("click", this.hide);
  },

  hide: function() {
    this.setState({ listVisible: false });
    document.removeEventListener("click", this.hide);
  },

  render: function() {
    return (
        <div className={"dropdown-container" + (this.state.listVisible ? " show" : "")}>
          <div className={"dropdown-display" + (this.state.listVisible ? " clicked": "")} onClick={this.show}>
            <span>{this.state.selected || this.props.selected}</span>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="dropdown-list">
            <div>
              {this.renderListItems()}
            </div>
          </div>
        </div>
    );
  },

  renderListItems: function() {
    var items = [];
    for (var i = 0; i < this.props.list.length; i++) {
      var item = this.props.list[i];
      items.push(
          <div key={item} onClick={this.select.bind(null, item)}>
            <span>{item}</span>
            <i className="fa fa-check"></i>
          </div>
      );
    }
    return items;
  }
});
