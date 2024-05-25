import React,{useState,useEffect} from 'react';
import {listUsers} from "../services/UserService.js";

const UserListComponent = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        listUsers().then((response) => {
            setUsers(response.data);
        }).catch(err => {
            console.log(err);
        })
    },[])
    
    

    return (
        <div className="container">
            <h2 className="text-center">User list</h2>
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>User id</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(user =>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                        </tr>)
                }
                </tbody>
            </table>
        </div>

    )
}

export default UserListComponent;