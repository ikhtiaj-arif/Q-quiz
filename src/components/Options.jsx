
import React from 'react';

const Options = ({option, handleOptionClick}) => {
    // console.log(option)
    return (
        <div className='border-2 rounded-xl bg-gray-200 hover:bg-blue-200 m-3 md:m-0  p-2 text-cyan-600 font-medium'>
             <div className="form-check">
            <input onClick={()=> handleOptionClick(option)} className="cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault10"/>
            
                <label className='ml-3' htmlFor="">{option}</label>
            </div>
            
        </div>
    );
};

export default Options;