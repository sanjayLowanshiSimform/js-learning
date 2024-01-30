import React, { useState } from 'react'

function Counter() {
  var [a, b] = useState(10);
  return (
    <div>
      <h1>{a}</h1>
      <button
        onClick={() => b(a + 1)}
        className="px-3 bg-myBlue text-myYellow py-1 rounded-md me-2"
      >
        +
      </button>
      <button
        onClick={() => b(a - 1)}
        className="px-3 bg-myBlue text-myYellow py-1 rounded-md"
      >
        -
      </button>
    </div>
  )
}

export default Counter
