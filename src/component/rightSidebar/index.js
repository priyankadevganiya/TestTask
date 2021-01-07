import React from 'react';

import './rightSidebar.scss';

const RightSidebar = () => {

  const deleteBlocks = () => {
    window.flowy.deleteBlocks();
  };

  return(
    <div className="propwrap itson" id="propwrap">
      <div className="properties expanded" id="properties">
        <div className="close" id="close">
          <img src="assets/close.svg" alt={'close'}/>
        </div>
        <p className="header2">Properties</p>
        <div className="propswitch">
          <div className="dataprop">Data</div>
          <div className="alertprop">Alerts</div>
          <div className="logsprop">Logs</div>
        </div>
        <div className="proplist">
          <p className="inputlabel">Select database</p>
          <div className="dropme">Database 1 <img src="assets/dropdown.svg" alt={'dropdown'}/></div>
          <p className="inputlabel">Check properties</p>
          <div className="dropme">All<img src="assets/dropdown.svg" alt={'dropdown'}/></div>
          <div className="checkus"><img src="assets/checkon.svg" alt={'checkon'}/><p>Log on successful performance</p></div>
          <div className="checkus"><img src="assets/checkoff.svg" alt={'checkoff'}/><p>Give priority to this block</p></div>
        </div>
        <div className="divisionthing" />
        <div id="removeblock" className="removeblock" onClick={deleteBlocks}>Delete blocks</div>
      </div>
    </div>
  )
};

export default RightSidebar;
