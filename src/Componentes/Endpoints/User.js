import React, { Component, useEffect, useState } from "react";
import axios from "axios";

//Obtener todos los usuarios
function UserGetAll(){
    const [posts, setposts] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:2000/user')
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
                    posts.map(post => <li key ={post.email}>
                        {post.nombreusuario}<br/>
                        {post.email}
                        </li>)
                }
            </ul>
        </div>
    )
}

//Traer datos de usuario por ID
export function UserGetById(){
    const [posts, setposts] = useState([]);
    const id='aldo.ibanez21@gmail.com';

    useEffect(()=> {
        axios.get(`http://localhost:2000/user/${id}`)
        .then(res =>{
            console.log(res)
            setposts(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[id])

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

export default UserGetAll;