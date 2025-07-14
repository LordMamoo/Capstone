import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);


  return (
    <>
      <h1>Student Register</h1>
      <h2>Login</h2>
      <form action="">
        <input type="text" placeholder='Username'/>
        <input type="text" placeholder='Password'/>
        <button>Submit</button>
      </form>
      <div className="card">
      </div>
    </>
  )
}

export default App