import { useState, useEffect } from 'react'

// This is our own custom hook!
export const useFetch = (url, initialValue) => {
    const [result, setResult] = useState(initialValue);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => { setResult(json) })
    }, []);

    return result
}