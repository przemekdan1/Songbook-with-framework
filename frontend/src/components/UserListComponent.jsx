import React,{useState,useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {listUsers} from "../services/UserService.js";

const UserListComponent = () => {

    const [users, setUsers] = useState([])
    const navigator = useNavigate();

    useEffect(() => {
        listUsers().then((response) => {
            setUsers(response.data);
        }).catch(err => {
            console.log(err);
        })
    },[])

    function addNewUser(){
        navigator('/add-user')
    }
    
    

    return (
        <div className="container">
            <h2 className="text-center">User list</h2>
            <button className='btn btn-primary mb-2' onClick={addNewUser}> Add user </button>
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>User id</th>
                    <th>Email</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(user =>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                        </tr>)
                }
                </tbody>
            </table>
        </div>

    )
}

export default UserListComponent;