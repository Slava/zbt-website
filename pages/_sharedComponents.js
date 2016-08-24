import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import { prefixLink } from '../utils/urls.js'

import '../css/dropdown.less';
import '../css/img-gallery.css';

export function Split({ children, id }) {
  if (children.length !== 2)
    throw new Error('Split expects exactly 2 children!');

  return (
      <div id={id} className={"flex row"}>
      <div key={1} className="col">{children.slice(0, 1)}</div>
      <div key={2} className="col">{children.slice(1, 2)}</div>
      </div>
  );
}

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


const Lightbox = React.createClass({
  displayName: 'Lightbox',
  propTypes: {
    src: React.PropTypes.string
  },
  render() {
    return (
      React.DOM.div({ id: 'lg-img' },
        React.DOM.img({ src: this.props.src }, null)
      )
    );
  }
});

export const ImgGallery = React.createClass({
  displayName: 'ImgGallery',
  propTypes: {
    id: React.PropTypes.string,
    class: React.PropTypes.string,
    images: React.PropTypes.array.isRequired,
    useLightbox: React.PropTypes.bool
  },
  getDefaultProps() {
    return {
      id: '',
      class: '',
      images: [],
      useLightbox: false
    };
  },
  getInitialState() {
    return {
      activeImage: false
    };
  },
  displayLightbox(imageSrc) {
    if (imageSrc) {
      this.setState({ activeImage: { src: imageSrc } });
    } else {
      this.setState({ activeImage: false });
    }
  },
  render() {
    const images = [];
    this.props.images.forEach((image, index) => {
      images.push(
        this.props.useLightbox ?
          React.DOM.img({ key: index, src: image.src, onClick: this.displayLightbox.bind(null, image.src),
            style: { cursor: 'pointer' } }, null)
          :
          React.DOM.a({ key: index, href: image.href },
            React.DOM.img({ key: index, src: image.src }, null)
          )
      );
    });

    return (
      React.DOM.div({},
        React.DOM.div({ id: this.props.id, className: 'img-gallery ' + this.props.class },
          images
        ),
        React.DOM.div({},
          this.state.activeImage ?
            React.DOM.div({ id: 'img-lightbox', onClick: this.displayLightbox.bind(null, false) },
              React.createElement(Lightbox, { src: this.state.activeImage.src })
            ) : null
        )
      )
    );
  }
});
