import { useState } from "react"

export default function Counter() {
  const [value, setValue] = useState(0)
  return (
    <div>
      <p>{value}</p>
      <button onClick={() => { setValue(value + 2) }}>Click Change</button>
    </div>
  )
}