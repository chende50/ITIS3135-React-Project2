import {useState} from 'react';
import {useLogin} from '../LoginContext/LoginContext';
import Header from '../Common/Header';
import Footer from '../Common/Footer';

function Login(){
    var {loginStatus, setLogin} = useLogin();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!username || !password){
            alert("Please fill out field")
            return;
        }
        setLogin(true);
    }

    return(
        <div>
            <Header/>
                <h1>{loginStatus ? "Logged In" : "Logged Out"}</h1>
                <form onSubmit={handleSubmit}>
                    <label>Username </label>
                    <input 
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    ></input>
                    <label>Password </label>
                    <input 
                        required
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}></input>
                    <button type='submit'>Log In</button>
                </form>
            <Footer/>
        </div>
    )
}

export default Login;