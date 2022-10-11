import React from 'react';

const Heading = () => {
    return (
        <div className='bg-gray-200 flex justify-around h-1/2'>
            <img className='w-2/4 md:w-1/4 mx-6 my-3' src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2019/06/bnr-36.png" alt="" />
            <div className='mt-8 md:my-16'>
                <h2 className='text-2xl md:text-4xl font-bold text-red-500'>Lets Test Your Skills!</h2>
                <p className='py-4 text-xl font-medium text-cyan-600'>Chose Any Of The Topic Below</p>
                <p className='text-2xl md:text-4xl font-bold text-red-500'>Good Luck!!</p>
            </div>
        </div>
    );
};

export default Heading;