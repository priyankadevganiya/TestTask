import React from 'react';

import './rightSidebar.scss';

const RightSidebar = () => {
  return(
    <div className="propwrap itson">
      <div className="properties expanded">
        <div className="close">
          <img src="assets/close.svg" />
        </div>
        <p className="header2">Properties</p>
        <div className="propswitch">
          <div className="dataprop">Data</div>
          <div className="alertprop">Alerts</div>
          <div className="logsprop">Logs</div>
        </div>
        <div className="proplist">
          <p className="inputlabel">Select database</p>
          <div className="dropme">Database 1 <img src="assets/dropdown.svg" /></div>
          <p className="inputlabel">Check properties</p>
          <div className="dropme">All<img src="assets/dropdown.svg" /></div>
          <div className="checkus"><img src="assets/checkon.svg" /><p>Log on successful performance</p></div>
          <div className="checkus"><img src="assets/checkoff.svg" /><p>Give priority to this block</p></div>
        </div>
        <div className="divisionthing" />
        <div className="removeblock">Delete blocks</div>
      </div>
    </div>
  )
};

export default RightSidebar;
