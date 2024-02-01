import React, { useState } from 'react'

const Toggled = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="px-3">
    <button onClick={() => setIsToggled(!isToggled)} className="mb-2 px-3 bg-myBlue py-1 rounded-md text-myYellow">
      {isToggled ? 'Hide' : 'Show'} Content
    </button>
    {isToggled && <div className="p-4 bg-myYellow rounded">This content is now visible!</div>}
  </div>
  )
}

export default Toggled
