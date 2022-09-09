import { useContext ,useState } from "react";
import { ShopDataContext , deleteItem } from "./GetData";
import PopUp from "./PopUp"
import "./DataInfo.css"

function DataInfo() {
  const context = useContext(ShopDataContext);
  //console.log(context.state)
    const [popUp , setPopUp] = useState(false);
    const [value , setValue] = useState();
    return (
      <div className="items" >
        { context.state.shopData && context.state.shopData.map((item , index) => {
            return (
                <div className="item"  key={"item" + index}>
                    <img src = {item.image}/>    
                    <div>Category : {item.category} </div>   
                    <div>Name : {item.title} </div>    
                    <div>Price : {item.price} $</div>         
                    <button onClick={() => deleteItem(context.dispatch , item.id)}>DELETE</button>      
                    <button onClick={() => {
                        setPopUp(true);
                        setValue(item.id);
                    //    console.log(value)
                    }}>EDIT</button>        
                    {popUp && value && <PopUp value = {value} setpopup = {setPopUp}/>}
                </div>
            )
        })}
      </div>
    );
}
export default DataInfo;
