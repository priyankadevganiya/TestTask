import React,{ useState } from 'react';

import './sidebar.scss';
import Footer from "../footer";

const data = {
  triggers: [
    {
      icon: 'eye.svg',
      title: 'New visitor',
      subTitle: 'Triggers when somebody visits a specified page',
      value: "1",
    },
    {
      icon: 'action.svg',
      title: 'Action is performed',
      subTitle: 'Triggers when somebody performs a specified action',
      value: "2",
    },
    {
      icon: 'time.svg',
      title: 'Time has passed',
      subTitle: 'Triggers after a specified amount of time',
      value: "3",
    },
    {
      icon: 'error.svg',
      title: 'Error prompt',
      subTitle: 'Triggers when a specified error happens',
      value: "4",
    },
  ],
  actions: [
    {
      icon: 'database.svg',
      title: 'New database entry',
      subTitle: 'Adds a new entry to a specified database',
      value: "5",
    },
    {
      icon:'database.svg',
      title: 'Update database',
      subTitle: 'Edits and deletes database entries and properties',
      value: "6",
    },
    {
      icon: 'action.svg',
      title: 'Perform an action',
      subTitle: 'Performs or edits a specified action',
      value: "7",
    },
    {
      icon: 'twitter.svg',
      title: 'Make a tweet',
      subTitle: 'Makes a tweet with a specified query',
      value: "8",
    },
  ],
  loggers: [
    {
      icon: 'log.svg',
      title: 'Add new log entry',
      subTitle: 'Adds a new log entry to this project',
      value: "9",
    },
    {
      icon: 'log.svg',
      title: 'Update logs',
      subTitle: 'Edits and deletes log entries in this project',
      value: "10",
    },
    {
      icon: 'error.svg',
      title: 'Prompt an error',
      subTitle: 'Triggers a specified error',
      value: "11",
    },
  ],
}


const Sidebar = () => {
  const [selectedNav, setSelectedNav] = useState('triggers');
  const [navDataList, setNavDataList] = useState(data[selectedNav]);

  const handleSubnav = (type) => () => {
    setSelectedNav(type);
    setNavDataList(data[type]);
  };

  return (
    <div className="leftcard">
      <div className="closecard">
        <img src="assets/closeleft.svg"alt={'closeleft'}/>
      </div>
      <p className="header">Blocks</p>
      <div className="search">
        <img src="assets/search.svg" alt={'search'}/>
          <input type="text" placeholder="Search blocks"/>
      </div>
      <div className="subnav">
        <div id="triggers" className={selectedNav=== 'triggers' ? "navactive side" : "navdisabled side"} onClick={handleSubnav('triggers')}>Triggers</div>
        <div id="actions" className={selectedNav=== 'actions' ? "navactive side" : "navdisabled side"} onClick={handleSubnav('actions')}>Actions</div>
        <div id="loggers" className={selectedNav=== 'loggers' ? "navactive side" : "navdisabled side"} onClick={handleSubnav('loggers')}>Loggers</div>
      </div>
      <div className="blocklist" id="blocklist">
        {
          navDataList?.map((item, key) => (
            <div className="blockelem create-flowy noselect">
              <input type="hidden" name='blockelemtype' className="blockelemtype" value={item.value} />
              <div className="grabme">
                <img src="assets/grabme.svg" alt={'grab'}/>
              </div>
              <div className="blockin">
                <div className="blockico">
                  <span />
                  <img src={`assets/${item.icon}`}/>
                </div>
                <div className="blocktext">
                  <p className="blocktitle">{item.title}</p>
                  <p className="blockdesc">{item.subTitle}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <Footer/>
    </div>
  )
};

export default Sidebar;


