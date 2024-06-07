import React,{useState,useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {deleteUser, listUsers} from "../../services/UserService.js";

const UserListComponent = () => {

    const [users, setUsers] = useState([])
    const navigator = useNavigate();

    useEffect(() => {
        getAllUsers()
    },[])

    function getAllUsers(){
        listUsers().then((response) => {
            setUsers(response.data);
        }).catch(err => {
            console.log(err);
        })
    }

    function addNewUser(){
        navigator('/add-user')
    }

    function updateUser(id){
        navigator(`/update-user/${id}`)
    }

    function removeUser(id){
        console.log(id);

        deleteUser(id).then((response) => {
            getAllUsers()
        }).catch(error=>{
            console.error(error);
        })
    }
    
    

    return (
        <div className="container-users">
            <h2 className="text-center">User list</h2>
            <button className='btn btn-primary mb-2' onClick={addNewUser}> Add user </button>
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>User id</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Operations</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(user =>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>
                                <button className='btn btn-info me-2' onClick={() => updateUser(user.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() => removeUser(user.id)}>Delete</button>
                            </td>
                        </tr>)
                }
                </tbody>
            </table>
        </div>

    )
}

export default UserListComponent;