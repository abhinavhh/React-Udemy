import { Component , useState } from "react";


// normallyyyyyyyy.. using class

// class Counter extends Component{
//     state = {
//         count:0
//     };
//     increment = () => {
//         this.setState({
//             count: (this.state.count) + 1
//         });
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Counter App</h1>
//                 <button onClick={this.increment}>Clicked {this.state.count} times</button>
//             </div>
            
//         )
//     }
// }export default Counter


// using hooks

function Counter(){
    const [count,setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    return(
        <div>
            <h1>Counter App</h1>
            <button onClick={increment}>Clicked {count} times</button>
        </div>
    )
}export default Counter