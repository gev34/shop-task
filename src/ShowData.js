 
 
 function ShowData({data}){
   data.map((value) => {
        //console.log(value)
        return (
            <div>
                {value.id}
            </div>
        )
    })
    

 }

  export default ShowData 