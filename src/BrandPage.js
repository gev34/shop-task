
import { useCallback , useContext, useEffect } from "react";
import ShowData from "./ShowData"
import GetData from './GetData'
import ShopDataContext from "./GetData"

function BrandPage (){
  const context = useContext(ShopDataContext)

    useEffect(() => {
        GetData(context.dispatch)
    } , [])
    
    return (
        <>
       
        </>
    )
  
}

export default BrandPage