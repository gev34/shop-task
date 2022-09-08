import React, { useReducer } from "react";
import { BaseUrl } from "./api/BaseUrl";


function reducer(state , action){
    switch (action.type){
        case "GET_DATA":
            return

    }

}

function getData(dispatch){
    dispatch({type:"GET_DATA"})
    fetch(BaseUrl).then((res) => res.json()).then((res) => dispatch({type:"GET", payload: res}))
  
}

const ShopDataContext = React.createContext()


function ShopDataProvider({children}){
    const [state , dispatch] = useReducer(reducer , {
        loading:false,
        ShopData:[]
    })
        return (
            <ShopDataContext.Provider value={{state , dispatch}}> 
                {children}
            </ShopDataContext.Provider>
        )

}
export default {ShopDataContext , ShopDataProvider}