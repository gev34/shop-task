import DataInfo from "./DataInfo"
import { useEffect , useContext } from "react"
import { ShopDataContext , getData} from "./GetData"

function BrandPage (){
const context = useContext(ShopDataContext)

useEffect(() => {
    getData(context.dispatch)
} , [])


return(
    <DataInfo/>
)

}

export default BrandPage