import React, { useEffect } from 'react';
import Header from "./component/header";
import Sidebar from "./component/sidebar";
import Canvas from "./component/canvas";
import RightSidebar from "./component/rightSidebar";

function App() {

  useEffect(() => {
    const spacing_x = 40;
    const spacing_y = 100;

    // Initialize Flowy
    window.flowy(document.getElementById("canvas"), onGrab, onRelease, onSnap, onRearrange, spacing_x, spacing_y)
  }, []);

  const  onGrab = (block) => {
    // When the user grabs a block
    console.log('grab is called..!!');
  };

  const onRelease = () => {
    // When the user releases a block
    console.log('release is called..!!');
  };

  const onSnap = (block, first, parent) => {
    // When a block snaps with another one
    let grab = block.querySelector(".grabme");
    grab?.parentNode.removeChild(grab);
    let blockin = block.querySelector(".blockin");
    blockin?.parentNode.removeChild(blockin);
    const value = block.querySelector(".blockelemtype").value;
    if (value === "1") {
      block.innerHTML += "<div class='blockyleft'><img src='assets/eyeblue.svg' alt={'eye'}><p class='blockyname'>New visitor</p></div><div class='blockyright'><img src='assets/more.svg'></div><div class='blockydiv'></div><div class='blockyinfo'>When a <span>new visitor</span> goes to <span>Site 1</span></div>";
    }
    if (value === "2") {
      block.innerHTML += "<div class='blockyleft'><img src='assets/actionblue.svg' alt={'action'}/><p class='blockyname'>Action is performed</p></div><div class='blockyright'><img src='assets/more.svg'></div><div class='blockydiv'></div><div class='blockyinfo'>When <span>Action 1</span> is performed</div>";
    }
    if (value === "3") {
      block.innerHTML += "<div class='blockyleft'><img src='assets/timeblue.svg' alt={'time'}/><p class='blockyname'>Time has passed</p></div><div class='blockyright'><img src='assets/more.svg'></div><div class='blockydiv'></div><div class='blockyinfo'>When <span>10 seconds</span> have passed</div>";
    }
    if(value === "4") {
      block.innerHTML += "<div class='blockyleft'><img src='assets/errorblue.svg' alt={'error'}/><p class='blockyname'>Error prompt</p></div><div class='blockyright'><img src='assets/more.svg'></div><div class='blockydiv'></div><div class='blockyinfo'>When <span>Error 1</span> is triggered</div>";
    }
    if (value === "5") {
      block.innerHTML += "<div class='blockyleft'><img src='assets/databaseorange.svg' alt={'database'}/><p class='blockyname'>New database entry</p></div><div class='blockyright'><img src='assets/more.svg'></div><div class='blockydiv'></div><div class='blockyinfo'>Add <span>Data object</span> to <span>Database 1</span></div>";
    }
    if (value === "6") {
      block.innerHTML += "<div class='blockyleft'><img src='assets/databaseorange.svg' alt={'database'}/><p class='blockyname'>Update database</p></div><div class='blockyright'><img src='assets/more.svg'></div><div class='blockydiv'></div><div class='blockyinfo'>Update <span>Database 1</span></div>";
    }
    if (value === "7") {
      block.innerHTML += "<div class='blockyleft'><img src='assets/actionorange.svg' alt={'action'}/><p class='blockyname'>Perform an action</p></div><div class='blockyright'><img src='assets/more.svg'></div><div class='blockydiv'></div><div class='blockyinfo'>Perform <span>Action 1</span></div>";
    }
    if (value === "8") {
      block.innerHTML += "<div class='blockyleft'><img src='assets/twitterorange.svg' alt={'twitter'}/><p class='blockyname'>Make a tweet</p></div><div class='blockyright'><img src='assets/more.svg'></div><div class='blockydiv'></div><div class='blockyinfo'>Tweet <span>Query 1</span> with the account <span>@alyssaxuu</span></div>";
    }
    if (value === "9") {
      block.innerHTML += "<div class='blockyleft'><img src='assets/logred.svg' alt={'log'} /><p class='blockyname'>Add new log entry</p></div><div class='blockyright'><img src='assets/more.svg'></div><div class='blockydiv'></div><div class='blockyinfo'>Add new <span>success</span> log entry</div>";
    }
    if (value === "10") {
      block.innerHTML += "<div class='blockyleft'><img src='assets/logred.svg' alt={'log'}><p class='blockyname'>Update logs</p></div><div class='blockyright'><img src='assets/more.svg'></div><div class='blockydiv'></div><div class='blockyinfo'>Edit <span>Log Entry 1</span></div>";
    }
    if (value === "11") {
      block.innerHTML += "<div class='blockyleft'><img src='assets/errorred.svg' alt={'error'}/><p class='blockyname'>Prompt an error</p></div><div class='blockyright'><img src='assets/more.svg'></div><div class='blockydiv'></div><div class='blockyinfo'>Trigger <span>Error 1</span></div>";
    }
    return true;
  };
  const onRearrange = (block, parent) => {
    // When a block is rearranged
    console.log('rearrange is called..!!');
    return true;
  };

  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <RightSidebar />
        <Canvas />
      </div>
    </div>
  );
}

export default App;
