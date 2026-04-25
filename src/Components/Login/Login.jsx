import {useState} from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { useAuth } from '../Authorization/AuthContext'
import { Link } from 'react-router';

function Login(){

    const {login} = useAuth();

    const [userData, setUserData] = useState({
        username: '',
        password: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
        login(userData.username)
    }

    return(
        <div>
            <Header/>
                <div className='flex flex-row justify-center items-center'>
                    <form 
                        className='flex flex-col max-w-96 gap-2 mt-2 ml-3 border-2 rounded-2xl p-4 m-2'
                        onSubmit={onSubmit}>
                        <label>Username </label>
                        <input
                            className='border-2' 
                            required
                            value={userData.username}
                            onChange={(e) => setUserData({...userData, username: e.target.value})}>
                        </input>
                        <label>Password </label>
                        <input 
                            className='border-2'
                            required
                            type='password'
                            value={userData.password}
                            onChange={(e) => setUserData({...userData, password: e.target.value})}>
                        </input>
                        <button className='bg-purple-950 text-white max-w-18 p-1 rounded-2xl hover:bg-purple-800' type='submit'>Log In</button>
                    </form>
                </div>
            <Footer/>
        </div>
    )
}

export default Login;