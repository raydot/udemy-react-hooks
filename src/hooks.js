import { useState, useEffect } from 'react'

// This is our own custom hook!
export const useFetch = (url, initialValue) => {
    const [result, setResult] = useState(initialValue);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => { setResult(json) })
    }, [url]);

    return result
}

// Another custom hook!  
// Wrap variables in an object so we don't have to worry about order.  
export const useDynamicTransition = ({ increment, delay, length }) => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(storedIndex => {
                return ((storedIndex + increment) % length) // without this callback storedIndex will not increase due to scope
            })
        }, delay);
        return () => {
            clearInterval(interval) // cleanup function for interval side effects (although it wasn't throwing an error for me)
        }
    }, [delay, increment, length]) // [] means only fire after Gallery renders
    return index;
}