import React from "react";
import UsernameItem from "../UsernameItem/UsernameItem";
import styles from "./UserList.module.css";


const UserList = props => {
    return (
        <ul className={styles['align']}>
            {props.items.map((item) => (
                <UsernameItem
                    username={item.name}
                    age={item.age}
                    key={item.id}
                />
            ))}
        </ul>
    )
}

export default UserList;

