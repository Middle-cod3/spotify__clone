import React from 'react';
import Body from './Body';
import Footer from './Footer';
import Sidebar from './Sidebar';
import './Player.css';

function Player({spotify}) {
  return (
    <div className="player">
      <div className="player__body">
        {/* sidebar */}
        <Sidebar/>
        {/* body */}
        <Body spotify={spotify}/>

      </div>
      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default Player