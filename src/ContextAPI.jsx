import React, { Children, createContext, useContext, useState } from 'react'
import { useEffect } from 'react'
import { getCoin, getUpdatedNews } from './Services/Apiservices'

const myContext = createContext();

const ContextAPI = ({children}) => {
    const [globalAPIdata, setglobalAPIdata] = useState({
        totalCoinData: [],
    })
    const [newsData , setnewsData] = useState([])
    const ShowCoinInfo = async () => {
        const apiResponse = await getCoin();
        setglobalAPIdata({ totalCoinData: apiResponse })
    }
    
    const getNewsData = async () => {
        const Response = await getUpdatedNews();
        console.log("response", Response)
        setnewsData(Response.data.value ?? [])
    }
console.log("apiredata",globalAPIdata.newsData)
    useEffect(() => {
         ShowCoinInfo()
        getNewsData()
    },[])

    return (
        <myContext.Provider
        value={ {globalAPIdata , newsData} }
        >
            {children}
        </myContext.Provider>
    )
}


export { ContextAPI , myContext }