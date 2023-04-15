import { useEffect, useState } from 'react'
import api from './lib/axios';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const login = async () => {
      const res = await api.post("/login");

      console.log(res.data);
    }

    login();
  })

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  )
}

export default App
