import React from 'react';

function Biography({name, image, content}){
    return(
        <div className='flex flex-col justify-center items-center border-2 rounded-2xl max-w-xl mx-auto px-4 bg-purple-950 text-white'>
            <h2 className='text-3xl font-bold pb-4'>{name}</h2>
            <img src={image} className='border-2 rounded-2xl object-contain' />
            <p className='pb-4 max-w-80 text-center'>{content}</p>
        </div>
    );
}

export default Biography;