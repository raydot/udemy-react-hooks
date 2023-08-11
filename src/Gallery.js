import React, { useState, useEffect } from 'react'
import PICTURES from './data/pictures'

const SECONDS = 1000
const minimumDelay = 1 * SECONDS
const minimumIncrement = 1

function Gallery() {
    const [index, setIndex] = useState(0)
    const [delay, setDelay] = useState(3 * SECONDS)
    const [increment, setIncrement] = useState(1)

    useEffect(() => {
        // console.log('delay:', delay, 'interval:', interval)
        const interval = setInterval(() => {
            setIndex(storedIndex => {
                return ((storedIndex + increment) % PICTURES.length) // without this callback storedIndex will not increase due to scope
            })
        }, delay);
        return () => {
            clearInterval(interval) // cleanup function for interval side effects (although it wasn't throwing an error for me)
        }
    }, [delay, increment]) // [] means only fire after Gallery renders

    // console.log('index', index)

    const updateDelay = event => {
        const delay = Number(event.target.value) * SECONDS

        setDelay(delay < minimumDelay ? minimumDelay : delay)
    }

    const updateIncrement = event => {
        const increment = Number(event.target.value)

        setIncrement(increment < minimumIncrement ? minimumIncrement : increment)
    }

    return (
        <div className='Gallery'>
            <img
                src={PICTURES[index].image}
                alt='gallery'
            />
            <div className='multiform'>
                <div>
                    Gallery transition delay (seconds):
                    <input type='number' onChange={updateDelay} />
                </div>
                <div>
                    Gallery increment:
                    <input type='number' onChange={updateIncrement} />
                </div>
            </div>
        </div>
    )
}

export default Gallery