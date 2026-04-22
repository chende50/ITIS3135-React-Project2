import React from 'react';

function Content({title, content, author, date}){
    return(
        <main>
            <h2 className='text-3xl font-bold pb-4'>{title}</h2>
            <p className='pb-4'>{content}</p>
            <p>
                <strong className='text-sm'>Author: {author}</strong>
            </p>
            <p className='mb-4'>
                <strong className='text-sm'>Date: {date}</strong>
            </p>
            <hr/>
        </main>
    );
}

export default Content;