'use client'

import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Counter</h1>
      <p>Counter details will go here.</p>
      <div>
        <h2>Count</h2>
        <p>{count}</p>
      </div>
      <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  )
}