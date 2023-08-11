import { useState, useEffect } from 'react'
import MATRIX_FRAMES from './data/matrix'

const minimumDelay = 10;
const minimumIncrement = 1

function Matrix() {
    const [index, setIndex] = useState(0)
    const [delay, setDelay] = useState(500)
    const [increment, setIncrement] = useState(5)

    useEffect(() => {
        // console.log("Matrix index:", index, "Delay:", delay)
        const interval = setInterval(
            () => {
                setIndex(storedIndex => {
                    return ((storedIndex + increment) % MATRIX_FRAMES.length)
                })
            },
            delay
        );

        return () => clearInterval(interval)
    }, [delay, increment])

    const updateDelay = event => {
        const delay = Number(event.target.value)

        setDelay(delay < minimumDelay ? minimumDelay : delay)
    }

    const updateIncrement = event => {
        const increment = Number(event.target.value)

        setIncrement(increment < minimumIncrement ? minimumIncrement : increment)
    }

    return (
        <div className="Matrix">
            <img
                src={MATRIX_FRAMES[index]}
                alt="error"
            />
            <div>Frame transition delay (seconds):<input type="number" onChange={updateDelay} /></div>
            <div>Frame increment: <input type="number" onChange={updateIncrement} /></div>
        </div>
    )
}

export default Matrix