import React from 'react'
import FetchApi from './FetchApi'
import ClickLogger from './Events'
import Timer from './Timer'

function UseEffHook() {
  return (
    <div>
      <h2>UseEffect Hook Ex#1) Fetching Data from an API:</h2>
      <FetchApi />
      <h2>UseEffect Hook Ex#2) Subscribing to Events:</h2>
      <ClickLogger />
      <h2>UseEffect Hook Ex#3) Cleanup on Component Unmount:</h2>
      <Timer />
    </div>
  )
}

export default UseEffHook
