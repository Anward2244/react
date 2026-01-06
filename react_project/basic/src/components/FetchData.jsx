import { useEffect, useState } from "react"
import SpinnerComponent from "./spinner";


function FetchData(){
    const [data, setdata] = useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/recipes')
        .then(res => res.json())
        .then((fetch_res)=>{setdata(fetch_res.recipes)});
    },[])
    return(
        <div id="main_div" style={{width:'100%', display:'flex', flexWrap:'wrap', fontSize:'15px', textAlign:'center', justifyContent:'center'}}>
        {data.length>0?data.map(each=>
        <div id="sub-part" style={{backgroundColor:"#4F4789", borderRadius:"10px", padding:"5px",margin:"5px"}}>
        <img src={each.image} style={{width:'200px'}}/>
        <p style={{color:'white'}}>{each.name}</p>
        </div>
        ):<SpinnerComponent/>}
        </div>
    )
}
export default FetchData