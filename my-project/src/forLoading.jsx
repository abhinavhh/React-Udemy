import React from "react";
import { Component } from "react";
import axios, { Axios } from "axios";
import {Loading} from "./Loading";

class Load extends Component{
    constructor(props){
        super(props)
        this.state={
            users:[],
            loading:false
        }
    }
    getUsers(){
        this.setState({
            loading:true
        });
        axios('https://api.randomuser.me/?nat=US&results=5').then( response => 
            this.setState({
                users:response.data.results,
                loading:false
            })
        );
    }
    componentDidMount(){
        this.getUsers()
    }
    render(){
        return(
            <div className="App">
                {!this.state.loading ? (this.state.users.map(user => (
                    <>
                        <h1>{user.name.first}</h1>
                        <p>{user.email}</p>
                        <hr/>
                    </>
                ))
                ) : (
                    <Loading message="This may take some time"/>
                )}
            </div>
        )
    }

}export default Load;