import React, { Children, createContext, useContext, useState } from 'react'
import { useEffect } from 'react'
import { getCoin } from './Services/Apiservices'

const myContext = createContext();

const ContextAPI = ({children}) => {
    const [globalAPIdata, setglobalAPIdata] = useState({
        totalCoinData: [],
        coinCardsData: []
    })
    const ShowCoinInfo = async () => {
        const apiResponse = await getCoin();
        setglobalAPIdata({ totalCoinData: apiResponse }),
        // console.log("apiRes.block", block)
        console.log("API RES11111--->", globalAPIdata.totalCoinData)
    }
    
    useEffect(() => {

        ShowCoinInfo()
    },[])
    return (
        <myContext.Provider
        value={ globalAPIdata  }
        >
            {children}
        </myContext.Provider>
    )
}


export { ContextAPI , myContext }