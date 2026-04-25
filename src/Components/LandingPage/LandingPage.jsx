import { Link } from 'react-router';
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import Biography from './Biography';
import { useUsername } from '../Authorization/AuthContext';

function LandingPage(){
    const username = useUsername();

    return(
        <div>
            <Header />

            <div className = 'flex flex-col justify-center items-center gap-5 border-2 rounded-2xl p-4 m-2 max-w-xl mx-auto px-4'>
                {username ? (<h1 className = 'text-lg font-bold'>Hi {username}! Welcome to BK Blogs!</h1>) : (<h1 className = 'text-lg font-bold'>Welcome to BK Blogs!</h1>)}
                <p className = 'max-w-lg'>This is your go-to site to see what the buzz is about! As a guest, you can view blog posts from many different bloggers. With an account, you can leave comments on blog posts as well as see other reader's comments.</p>
                <p>Click below to log in or view blog posts.</p>
                <div className = 'flex flex-row justify-center items-center gap-24 p-5'>
                    <Link to={`/login`} className='bg-purple-950 text-white rounded-sm p-2 animate-bounce'>Login</Link>
                    <Link to={`/blogposts`} className='bg-purple-950 text-white rounded-sm p-2 animate-bounce'>Explore Blog</Link>
                </div>
            </div>
            <hr className='m-5'/>
            <h1 className = 'text-lg font-bold text-center'>About the Creators</h1>
            <div className='flex flex-col justify-center items-center gap-5 p-4 m-2 mx-auto px-4 md:flex-row'>
                <Biography 
                    name='Cae Henderson' 
                    image='src/assets/cae_picture.png' 
                    content='Cae is an aspiring game developer who enjoys full stack development (but maybe front-end a little more!). They enjoy getting to use code to create things creative and visually appealing. Cae worked on the login functionality and blog post page, as well as assisted with styling.' 
                />
                <Biography 
                    name='Bee Acree' 
                    image='src/assets/bee_picture.png' 
                    content='Bee is an aspiring game developer who specializes in back-end development. She likes to find the fun in coding by trying new things. Bee created the home page of this website and assisted with styling.' 
                />
            </div>
            <p className='text-center'>The "BK" in BK Blogs comes from our names, Bee and Cae!</p>
    
            <Footer />
        </div>
    );
}

export default LandingPage;