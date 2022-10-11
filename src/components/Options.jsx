
import React from 'react';

const Options = ({option, handleOptionClick}) => {
    // console.log(option)
    return (
        <div className='border-2 rounded-xl bg-gray-200 hover:bg-blue-200 m-3 md:m-0  p-2 text-cyan-600 font-medium'>
            <li onClick={()=> handleOptionClick(option)} className="cursor-pointer">{option}</li>
            
        </div>
    );
};

export default Options;