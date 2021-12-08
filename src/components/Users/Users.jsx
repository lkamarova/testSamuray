import React from "react";
import style from "./users.module.css";
import * as axios from "axios";
import userPhoto from "./../../../src/assets/images/imageUser.png";

let Users = (props) => {

    if(props.users.length === 0) {
        axios.get("https:social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        });
    }

    return(
        <div>
            { props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img alt="" src={ u.photoUrl != null ? u.photoUrl : userPhoto } className={style.userPhoto}></img>
                    </div>
                    <div>
                        { u.followed 
                        ? <button onClick = {() => { props.unfollow(u.id) } }>UnFollow</button> 
                        : <button onClick = {() => { props.follow(u.id) } }>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>) }
        </div>
    )
};

export default Users;