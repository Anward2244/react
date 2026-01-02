let users = ['Anwar', 'Shasha', 'Prasad']
let festival = 'Vinayaka Chavithi'

export function UserList(){
    return(
        <>
        {users.map((val, index)=><Greeting key= {index} list1={val} festival={festival}/>)}
        </>
    )
}


export function Greeting(props){
    console.log(props)
    let {festival, list1}= props
    return(
        <>
        <h1>Happy {festival} {list1}</h1>
        </>
    )
}
