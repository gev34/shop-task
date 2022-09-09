import { useState, useContext } from "react";
import { editData, ShopDataContext } from "./GetData";
import "./PopUp.css"

function PopUp({ value, setpopup }) {
  const [newTitle, setNewTitle] = useState();
  const [newCategory , setNewCategory] = useState();
  const context = useContext(ShopDataContext);
 // console.log(value)

  return (
    <div className="popup">
        <div className="popupcontent">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editData(context.dispatch, newTitle, newCategory ,  value);
          console.log(context.state);
          setpopup(false);
        }}
      >
        <input
          type="text"
          placeholder="New Title"
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="New Category"
          onChange={(e) => {
            setNewCategory(e.target.value);
          }}
        />
        <button className="okButton">OK</button>
      </form>
      <button className="xForClose"
        onClick={() => {
          setpopup(false);
        }}
      >
        X
      </button>
      </div>
    </div>
  );
}

export default PopUp;
