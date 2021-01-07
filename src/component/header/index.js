import React from 'react';

import './header.scss';

const Header = () => (
  <div className="navigation">
    <div className="leftSide">
      <div className="details">
        <div className="back"><img src="assets/arrow.svg" alt={'arrow'}/></div>
        <div className="names">
          <p className="title">Your automation pipeline</p>
          <p className="subtitle">Marketing automation</p>
        </div>
      </div>
    </div>
    <div className="centerSwitch">
      <div className="leftSwitch">Diagram view</div>
      <div className="rightSwitch">Code editor</div>
    </div>
    <div className="buttonsRight">
      <div className="discard">Discard</div>
      <div className="publish">Publish to site</div>
    </div>
  </div>
);

export default Header;
