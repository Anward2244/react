import React from "react"
import SpinnerComponent from "../components/spinner";
import axios from "axios"

class Application extends React.Component{
    constructor(){
        super()
        this.state={
            products:[]
        }   
    }

    fetchrecipes = async()=>{
        try{
            let response = await axios.get('https://dummyjson.com/recipes')
            this.setState({products:response.data.recipes})
        }catch(err){
            console.log(err)
        }
    } 
    componentDidMount(){
        this.fetchrecipes()
    };

    render(){
        return(
            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
            {this.state.products.length>0?<>
            {
                this.state.products.map(each=><div style={{margin:"10px", padding:"10px", textAlign:"center", backgroundColor:"#E77728", color:"white", fontWeight:"600", borderRadius:"10px"}}>
                <img src={each.image} style={{width:"200px", borderRadius:"10px"}}/>
                <p style={{marginTop:"10px"}}>{each.name}</p>
                </div>)
            }
            </>:<SpinnerComponent/>}
            </div>
        )
    }
}

export default Application