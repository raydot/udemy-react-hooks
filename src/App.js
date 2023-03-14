import { useState } from "react"
import Joke from './Joke'



function App() {
  const [userQuery, setUserQuery] = useState('')

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank')
  }

  const updateUserQuery = event => {
    console.log('userquery:', userQuery)
    setUserQuery(event.target.value)
  }

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      searchQuery()
    }
  }

  return (
    <div className="App">
      <h1>Booga Ning Bobo</h1>
      <div className="form">
        <input value={userQuery} onChange={updateUserQuery} onKeyUp={handleKeyPress} />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
    </div>
  );
}

export default App;
