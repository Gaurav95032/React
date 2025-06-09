import React from 'react';

function Card(props) {
    return (
        
        <div className='w-full max-w-sm max-h-4/5 rounded-xl overflow-auto scroll-hidden bg-gray-800 shadow-2xl m-4'>
            <img
                className='w-full max-h-72 object-cover'
                src={props.imageSource}
            />
            <div className='p-6 text-white'>
                <h1 className='text-2xl font-bold'>{props.gameName}</h1>
                <p className='text-2xl font-semibold text-teal-400 mt-2'>{props.price}</p>
                <p className='text-gray-300 mt-4 text-sm'>
                    {props.description}
                </p>

            </div>
        </div>
    );
}

export default Card;