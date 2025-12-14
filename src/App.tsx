import { useState } from 'react'
import './App.css'

function App() {
  const [responses, setResponses] = useState<unknown | null>(null)

  return (
    <div>
      <div style={{display: 'flex', gap: '10px', flexFlow: 'row wrap'}}>
        <button onClick={() => fetch('/api/health').then(res => res.json()).then(data => setResponses(data))}>fetch health</button>
        <button onClick={() => fetch('/api/hello_world').then(res => res.json()).then(data => setResponses(data))}>fetch hello world</button>
        <button onClick={() => fetch('/api/users').then(res => res.json()).then(data => setResponses(data))}>fetch users</button>
        <button onClick={() => fetch('/api/users/1').then(res => res.json()).then(data => setResponses(data))}>fetch user 1</button>
        <button onClick={() => fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({ name: 'John Doe', email: 'john.doe@example.com' })
        }).then(res => res.json()).then(data => setResponses(data))}>create user</button>
        <button onClick={() => fetch('/api/users/1', {
          method: 'PUT',
          body: JSON.stringify({ name: 'John Doe', email: 'john.doe@example.com' })
          }).then(res => res.json()).then(data => setResponses(data))}>update user 1</button>
        <button onClick={() => fetch('/api/users/1', {
          method: 'DELETE',
        }).then(res => res.json()).then(data => setResponses(data))}>delete user 1</button>
      </div>
      
      <div style={{marginTop: '20px', backgroundColor: 'grey', color: 'white', padding: '10px', borderRadius: '5px'}}>
        <p style={{fontSize: '12px'}}>{JSON.stringify(responses)}</p>
      </div>
    </div>
  )
}

export default App
