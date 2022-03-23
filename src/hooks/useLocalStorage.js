import {useState,useEffect} from 'react'

export const useLocalStorage = (key, defaultValue) => {

    const [storageData, setStorageData] = useState(() =>{
        const savedData = localStorage.getItem(key);
        return savedData ? JSON.parse(savedData) : defaultValue;
    })

    useEffect(() =>{
        localStorage.setItem(key, JSON.stringify(storageData))
    },[key, storageData])

  return [storageData, setStorageData]
}
