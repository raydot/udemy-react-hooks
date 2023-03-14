import React from 'react'
import { useFetch } from './hooks'



function Joke() {
    const { setup, punchline } = useFetch('https://official-joke-api.appspot.com/jokes/random', {})

    return (
        <div>
            <h3>Joke</h3>
            <p>Q: {setup}</p>
            <p><em>A: {punchline}</em></p>
        </div>
    )
}

export default Joke