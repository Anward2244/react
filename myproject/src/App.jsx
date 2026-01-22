
// const fruits = ['Apple', 'Banana', 'Orange', 'Mango']
// export function Items(){
//   return(
//     <>
//     <ul>
//     {fruits.map(each=><li>{each}</li>)}
//     </ul>
//     </>
//   )
// }
// export function Order_items(ordered){
//   return(
//     <>
//     <ol>
//     {fruits.map(each=><li>{each}</li>)}
//     </ol>
//     </>
//   )
// }

import { useContext } from "react"
import { Waiter } from "./main"

{/* <Order_items fruits = {fruits}/> */}


function Customer(){
    const food = useContext(Waiter)
    console.log(food)
    return(
        <>
        <h1>This is {food}</h1>
        </>
    )
}
export default Customer