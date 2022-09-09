import React, { useReducer } from "react";
import { BaseUrl } from "../api/BaseUrl";

function reducer(state, action) {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        loading: true,
        shopData: [],
      };
    case "GET_DATA_SUCCESS":
      // console.log(action.payload)
      return {
        ...state,
        loading: false,
        shopData: action.payload,
      };
    case "DELETE_ITEM":
      return {
        ...state,
        loading: false,
        shopData: [...state.shopData.filter((item) => item.id !== action.id)],
      };
    case "EDIT_ITEM" :
        return {
            ...state,
            loading:false,
            shopData: [...state.shopData.filter((item) => {
                if(item.id === action.id){
                    item.title = action.title ? action.title : item.title;
                    item.category = action.category? action.category : item.category;
                }
                return state
            })]
        }    
        default: 
        return {state}
  }
}

const ShopDataContext = React.createContext();

export function getData(dispatch) {
  dispatch({ type: "GET_DATA" });
  fetch(BaseUrl)
    .then((res) => res.json())
    .then((res) => dispatch({ type: "GET_DATA_SUCCESS", payload: res }));
}
export function deleteItem(dispatch, id) {
  dispatch({ type: "DELETE_ITEM", id: id });
}
export function editData(dispatch, title, category , id) {
    // console.log(title)
    // console.log(id)
  dispatch({ type: "EDIT_ITEM", title: title, category:category , id: id });
}
function ShopDataProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    shopData: [],
  });

  return (
    <ShopDataContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopDataContext.Provider>
  );
}
export { ShopDataContext, ShopDataProvider };
