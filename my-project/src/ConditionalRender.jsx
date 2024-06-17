import { Component } from "react";
import axios from "axios";
class CondRend extends Component{
    constructor(props){
        super(props)
        //state
        this.state={
            users:[],
            // for conditional rendering..
            loading:false
        }
    }

    getusers(){
        this.setState({
            loading:true
        })
        axios('https://api.randomuser.me/?nat=US&results=5').then( response => 
            this.setState({
                users : response.data.results,
                loading:false
            })
        );
    }
    componentDidMount(){
        this.getusers()
    }
    render(){
        return <div className="App">
            
            {/* using ! inverse and &&  */}
            {!this.state.loading && this.state.users.map( user => (
                <div>
                    <h1>{user.name.first}</h1>
                    <p>{user.cell}</p>
                    <hr/>
                </div>
            ))}

            {/* using ?  */}
            {this.state.loading ? this.state.users.map( user =>(
                <>
                    <h1>{user.name.first}</h1>
                    <p>{user.email}</p>
                    <hr />
                </>
            )):'loading'}
        </div>
    }
}
export default CondRend;