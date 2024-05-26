import React, {useEffect, useState} from 'react';
import {createUser, getUserById, updateUser} from "../services/UserService.js";
import {useNavigate,useParams} from "react-router-dom";
const UserComponent = () => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigator = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        if(id){
            getUserById(id).then((response) => {
                setUsername(response.data.username);
                setEmail(response.data.email);
                setPassword(response.data.password);
            }).catch(error=>{
                console.error(error);
            })
        }
    }, [id]);

    const [errors, setErrors] = useState({
        email:'',
        username:'',
        password:''
    });

    function validateForm(){
        let valid = true;

        const errorCopy = {...errors}

        if(email.trim()){
            errorCopy.email ='';
        }else{
            errorCopy.email ='Email required';
            valid = false;
        }

        if(username.trim()){
            errorCopy.username ='';
        }else{
            errorCopy.username ='Username required';
            valid = false;
        }

        if(password.trim()){
            errorCopy.password ='';
        }else{
            errorCopy.password ='Password required';
            valid = false;
        }

        setErrors(errorCopy);
        return valid;
    }


    function saveOrUpdateUser(e){
        e.preventDefault();

        if(validateForm()){

            const user = {username, email, password};
            console.log(user)

            if(id){
                updateUser(id,user).then((response) => {
                    console.log(response.data);
                    navigator('/users');
                }).catch(error=>{
                    console.error(error);
                })
            }else{
                createUser(user).then((response) => {
                    console.log(response.data);
                    navigator('/users')
                }).catch(error=>{
                    console.error(error);
                })
            }


        }
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update User</h2>
        }else{
            return <h2 className='text-center'>Add User</h2>
        }
    }



    return (
        <div className="container">
            <br/>
            <br/>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3">'>
                    {
                        pageTitle()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label className='form-label'>Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    className={`form-control ${errors.username ? 'is-invalid': ''}`}
                                    placeholder="Enter your username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                {errors.username && <div className='invalid-feedback'>{errors.username}</div>}
                            </div>

                            <div className='form-group'>
                                <label className='form-label'>Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    className={`form-control ${errors.email ? 'is-invalid': ''}`}
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                            </div>

                            <div className='form-group'>
                                <label className='form-label'>Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className={`form-control ${errors.password ? 'is-invalid': ''}`}
                                    placeholder="**********"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {errors.password && <div className='invalid-feedback'>{errors.password}</div>}
                            </div>
                            <br/>
                            <button className='btn btn-success me-2' onClick={saveOrUpdateUser}>Submit</button>
                            <button className='btn btn-danger' onClick={() => navigator('/users')}>Discard</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserComponent;