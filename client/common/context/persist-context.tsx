import { useCallback, useState } from "react"

export { persistItem, usePersistState }

function persistItem(key: string, value: string) {
    localStorage.setItem(key, value)
    return value
}

function usePersistState(key: string, initialValue: string) {
    const [state, setState] = useState(
        () => localStorage.getItem(key) || persistItem(key, initialValue)
    )
    const setStateAndPersist = useCallback(
        (newState: string) => {
            setState(newState)
            return persistItem(key, newState)
        },
        [key, setState]
    )
    return [state, setStateAndPersist]
}