import React, {Component } from "react"
import axios from 'axios'
class Main extends Component{
    constructor(props){
        super(props)
        //state
        this.state={
            users:[]
        }
    }

    getUsers(){
        axios('https://api.randomuser.me/?nat=US&results=5').then( response => 
            this.setState({
                users : response.data.results
            })
        );
    }
    componentDidMount(){this.getUsers()}
    render(){
        return <div className = "App">
            {/* print users cell no */}
            {/* {this.state.users.map( user => <div>{user.cell}</div>)} */}
            {/* print users first name */}
            {/* {this.state.users.map( user => <div>{user.name.first}</div>)} */}
            {/* print name with email */}
            {this.state.users.map(user=>(<><h1>{user.name.first}</h1><p>{user.email}</p><hr/></>
            ))}
        </div>
    }
}
export default Main