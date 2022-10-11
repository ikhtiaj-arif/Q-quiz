
import React from 'react';

const Options = ({option, handleOptionClick}) => {
    // console.log(option)
    return (
        <div>
             <div class="form-check">
            <input onClick={()=> handleOptionClick(option)}class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-00 bg-white checked:bg-blue-400 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault10"/>
            
                <label htmlFor="">{option}</label>
            </div>
            
        </div>
    );
};

export default Options;