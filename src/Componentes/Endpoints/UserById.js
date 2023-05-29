import React, { Component, useEffect, useState } from "react";
import axios from "axios";

export function UserGetById(){
    const [posts, setposts] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:2000/user/aldo.ibanez21@gmail.com')
        .then(res =>{
            console.log(res)
            setposts(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])

    return(
        <div>
            <ul>
                {
                    posts.map(post => <li key ={post.email}>{post.nombreusuario}</li>)
                }
            </ul>
        </div>
    )
}


export class UserPost extends Component{

    constructor(props){
        super(props)

        this.state={
            email:'',
            nombreusuario:'',
            contraseña:''
        }
    }

    changeHandler = e =>{
        this.setState({[e.target.name]:e.target.name})
    }

    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)
    }

    render(){

        const {email, nombreusuario, contraseña} = this.state; 

        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name = "email" value={email} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name = "nombreusuario" value = {nombreusuario} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name = "contraseña" value = {contraseña} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Ejecutar</button>
                </form>
            </div>
        )
    }
}

export default UserGetById;