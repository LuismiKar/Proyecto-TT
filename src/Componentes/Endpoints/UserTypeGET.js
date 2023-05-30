import React, { useEffect, useState } from "react";
import axios from "axios";

function UserTypeGet(){
    const [posts, setposts] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:2000/usertype')
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
                    posts.map(post => <li key ={post.idtipousuario}>{post.nombre_tipousuario}</li>)
                }
            </ul>
        </div>
    )
}


export default UserTypeGet;