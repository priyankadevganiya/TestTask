import React from 'react';
import Header from "./component/header";
import Sidebar from "./component/sidebar";
import Canvas from "./component/canvas";
import RightSidebar from "./component/rightSidebar";

function App() {

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
