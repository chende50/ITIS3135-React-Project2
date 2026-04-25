import Navbar from '../Navbar/Navbar'

function Header(){
    return(
        <header className='bg-purple-950'>
            <div className='flex gap-8 justify-center items-center pt-2'>
                <img src='src/assets/BK_logo.png' className='max-w-25 max-h-25' />
            </div>
            <Navbar/>
        </header>
    );
}

export default Header;