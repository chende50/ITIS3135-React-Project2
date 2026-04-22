import {useUsername, useAuth} from '../Authorization/AuthContext';
import {Link} from 'react-router-dom';

function Navbar(){
    const username = useUsername();
    const {logout} = useAuth();

    return(
        <nav>
            <ul className='text-white flex flex-row justify-center items-center gap-24 list-none p-5'>
                <li>
                    {username ? (<p onClick={logout}>Logout</p>) : (<Link to='/login'>Login</Link>)}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;