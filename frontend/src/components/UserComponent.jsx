import React,{useState} from 'react';

const UserComponent = () => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    function saveUser(e){
        e.preventDefault();

        const user = {username, email, password};
        console.log(user)
    }


    return (
        <div className="container">
            <br/>
            <br/>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3">'>
                    <h2 className='text-center'>Create User</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label className='form-label'>Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    className="form-control"
                                    placeholder="Enter your username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>

                            <div className='form-group'>
                                <label className='form-label'>Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className='form-group'>
                                <label className='form-label'>Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="**********"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <br/>
                            <button className='btn btn-success' onClick={saveUser}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserComponent;