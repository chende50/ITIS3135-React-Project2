import React from 'react';

function Content({title, content, author}){
    return(
        <main>
            <h2 className='text-3xl font-bold pb-4'>{title}</h2>
            <p className='pb-4'>{content}</p>
            <p className='pb-4'>
                <strong className='text-sm'>Author: {author}</strong>
            </p>
            <hr/>
        </main>
    );
}

export default Content;