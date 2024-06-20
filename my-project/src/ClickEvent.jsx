import { Component } from "react";
import axios, { Axios } from "axios";
import React from "react";
import { Loading } from "./Loading";

class Clicks extends Component{
    constructor(props){
        super(props)
        this.state={
            users:[],
            loading:false
        }
        //bind 
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    getUsers(){
        this.setState({
            loading:true
        });
        axios('https://api.randomuser.me/?nat=US&results=5').then( response =>
            this.setState({
                // merge old and new users
                users:[...this.state.users ,...response.data.results],
                loading:false
            })    
        );
    }
    handleSubmit(e){
        e.preventDefault()
        this.getUsers()
        console.log("More users logged.")
    }
    componentDidMount(){
        this.getUsers()
    }
    render(){
        //Destructuring
        const {loading,users} = this.state

        return(
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    <input type="submit" value="load user"/>
                </form>
                <hr/>
                {!loading ? (users.map(user => (
                    <div key={user.id.value}>
                        <h1 style={{color:"darkblue"}}>{user.name.first}</h1>
                        <p>{user.email}</p>
                        <hr/>
                    </div>
                ))
                ) : (
                    <Loading message="Loading.."/>
                )}
            </div>
        )
    }
}
export default Clicks;