import Navbar from '../Navbar/Navbar'

function Header(){
    return(
        <header className='bg-purple-950'>
            <div className='flex gap-8 justify-center items-center pt-2'>
                <h1 className='text-white text-2xl'>BK Blogs</h1>
            </div>
            <Navbar/>
        </header>
    );
}

export default Header;