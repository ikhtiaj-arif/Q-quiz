import React from 'react';

const EachTopic = ({topic}) => {
    const {logo, name} = topic;
    return (
        <div className='w-18 border-2 rounded-lg m-4'>
            <img className='w-9/12 mx-auto rounded-xl bg-slate-700' src={logo} alt="" />
          <div className='text-center m-4'>
            <h2 className='text-3xl font-semibold p-3 text-gray-600'>topic: {name}</h2>
            <button className='bg-cyan-400 text-white px-3 py-1 rounded'>Start Quiz</button>
          </div>
        </div>
    );
};

export default EachTopic;