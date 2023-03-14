import React, { useEffect, useState } from 'react'

function Joke() {
    const [joke, setJoke] = useState({})

    useEffect(() => {
        fetch('https://official-joke-api.appspot.com/jokes/random')
            .then(response => response.json())
            .then(json => {
                console.log('joke json', json)
                setJoke(json)
            })
    }, [])

    const { setup, punchline } = joke

    return (
        <div>
            <h3>Joke</h3>
            <p>Q: {setup}</p>
            <p><em>A: {punchline}</em></p>
        </div>
    )
}

export default Joke