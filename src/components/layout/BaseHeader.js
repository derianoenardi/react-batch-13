import React, { Component } from 'react';
import PropTypes from 'prop-types';


class BaseHeader extends Component {
  render() {
    const {mainTitle, subTitle, title1, title2} = this.props;
    // const {index0: mainTitle, index1: subTitle, index2: title1, index3: title2} = this.props.list;
    return (
      <ul className="nav fixed-top justify-content-between text-white-50 py-3 px-2">
        <li className="nav-item text-white font-weight-bold mr-5 ml-2">{mainTitle}</li>
        <li className="nav-item mr-5">{subTitle}</li>
        <li className="nav-item">{title1}</li>
        <li className="nav-item flex-grow-1 text-right mr-2">{title2}</li>
      </ul>
    );
  }
}

BaseHeader.propTypes = { //just for checking
  mainTitle: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
};

export default BaseHeader;
