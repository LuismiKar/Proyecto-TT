import React, { Component, useEffect, useState } from "react";
import axios from "axios";

function UserGetAll(){
    const [posts, setposts] = useState([]);

    useEffect(()=> {
        axios.get('http://10.100.96.8:2000/user')
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

export default UserGetAll;