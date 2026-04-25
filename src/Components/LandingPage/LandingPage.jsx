import { Link } from 'react-router';
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { useUsername } from '../Authorization/AuthContext';

function LandingPage(){
    const username = useUsername();

    return(
        <div>
            <Header />

            <div className = 'flex flex-col justify-center items-center gap-5 border-2 rounded-2xl p-4 m-2'>
                {username ? (<h1 className = 'text-lg font-bold'>Hi {username}! Welcome to BK Blogs!</h1>) : (<h1 className = 'text-lg font-bold'>Welcome to BK Blogs!</h1>)}
                <p className = 'max-w-lg'>This is your go-to site to see what the buzz is about! As a guest, you can view blog posts from many different bloggers. With an account, you can leave comments on blog posts as well as see other reader's comments.</p>
                <p>Click below to log in or view blog posts.</p>
                <div className = 'flex flex-row justify-center items-center gap-24 p-5'>
                    <Link to={`/login`} className='bg-purple-950 text-white rounded-sm p-2 animate-bounce'>Login</Link>
                    <Link to={`/blogposts`} className='bg-purple-950 text-white rounded-sm p-2 animate-bounce'>Explore Blog</Link>
                </div>
            </div>
    
            <Footer />
        </div>
    );
}

export default LandingPage;